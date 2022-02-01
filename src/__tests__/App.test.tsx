import React from 'react';
import { expectQuestionDisplaysCorrectly, fireEvent, render, screen, waitFor, within } from '../test-utils';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { config } from 'react-transition-group';
import App from 'src/App';
import { CATEGORY_LIST_URL, OPEN_TRIVIA_API_URL } from 'src/utils';
import { act } from 'react-dom/test-utils';

// Ensure animations happen instantly for tests
config.disabled = true;

const dummyQuestions = [
  {
    category: 'Vehicles',
    type: 'boolean',
    difficulty: 'hard',
    question: 'In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
  {
    category: 'General Knowledge',
    type: 'boolean',
    difficulty: 'hard',
    question: 'This is the correct spelling of "Supercalifragilisticexpialidocious"',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
  {
    category: 'Entertainment: Comics',
    type: 'boolean',
    difficulty: 'hard',
    question: 'In the comic book "Archie", Betty is friends with Veronica because she is rich.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
];

// Dummy api calls
const server = setupServer(
  rest.get(OPEN_TRIVIA_API_URL, (req, res, ctx) => {
    return res(
      ctx.json({
        response_code: 0,
        results: dummyQuestions,
      })
    );
  }),
  rest.get(CATEGORY_LIST_URL, (req, res, ctx) => {
    return res(
      ctx.json({
        trivia_categories: [{ id: 9, name: 'General Knowledge' }],
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Basic App Flow', async () => {
  // Render App
  const { getByText, getAllByTestId, getByTestId } = render(<App />);

  // Page title to be able to check it changes appropriately
  const { getByText: getTitleText } = within(getByTestId('pageTitle'));

  expect(getTitleText('Welcome to the Trivia Challenge')).toBeInTheDocument();

  expect(getByText('You will be presented with 10 True or False questions.')).toBeInTheDocument();
  expect(getByText('Can you score 100%?')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Begin'));

  // If clicking Begin works correctly should be navigated to the quiz screen
  await waitFor(() => getByTestId('quizContainer'));

  // Ensure first question is displaying correctly and the category is shown in the title
  expectQuestionDisplaysCorrectly(getByTestId('frontOfCard'), getTitleText, dummyQuestions[0]);

  fireEvent.click(within(getByTestId('frontOfCard')).getByText('True'));

  // Ensure second question is now displayed correctly
  expectQuestionDisplaysCorrectly(getByTestId('frontOfCard'), getTitleText, dummyQuestions[1]);

  // Both True and False buttons should work
  fireEvent.click(within(getByTestId('frontOfCard')).getByText('True'));

  // Finally ensure the final question is displayed correctly
  expectQuestionDisplaysCorrectly(getByTestId('frontOfCard'), getTitleText, dummyQuestions[2]);

  // Use fakeTimer within an act() to ensure that when ResultsContainer is mounted it uses fakeTimers
  act(() => {
    jest.useFakeTimers();
    fireEvent.click(within(getByTestId('frontOfCard')).getByText('True'));
  });

  // Then turn realTimers on again in order for await waitFor() to work correctly
  // Should navigate to the results page once final answer is provided
  jest.useRealTimers();
  await waitFor(() => getByTestId('resultsContainer'));

  expect(getTitleText('You scored 2/3')).toBeInTheDocument();

  // Advance time in order to allow all staggeredResults to appear
  act(() => {
    jest.useFakeTimers();
    jest.advanceTimersByTime(2000);
    jest.useRealTimers();
  });

  // Ensure a row for each question appears in the results container, and they have the correct icon based on if the answer 'True' is correct or not
  getAllByTestId('resultRow').forEach((element, index) => {
    const expectedQuestion = dummyQuestions[index];
    expect(within(element).getByText(expectedQuestion.question)).toBeInTheDocument();

    if (expectedQuestion.correct_answer === 'True') {
      expect(within(element).getByTestId('AddIcon')).toBeInTheDocument();
    } else {
      expect(within(element).getByTestId('RemoveIcon')).toBeInTheDocument();
    }
  });

  fireEvent.click(screen.getByText('Play Again?'));

  // Clicking Play Again should navigate us back to the home screen
  await waitFor(() => getByTestId('homeContainer'));
});
