import { createSlice } from '@reduxjs/toolkit';
import { Question, SystemState } from './models';
import { setTitle, setAlertMessage, setCurrentQuizSetup, setCurrentResults, setPastResults } from './caseReducers';

// const dummyQuestions: Question[] = JSON.parse(
//   '[{"category":"Vehicles","type":"boolean","difficulty":"hard","question":"In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.","correct_answer":"True","incorrect_answers":["False"]},{"category":"General Knowledge","type":"boolean","difficulty":"hard","question":"This is the correct spelling of &quot;Supercalifragilisticexpialidocious&quot;.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Comics","type":"boolean","difficulty":"hard","question":"In the comic book &quot;Archie&quot;, Betty is friends with Veronica because she is rich.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Entertainment: Japanese Anime & Manga","type":"boolean","difficulty":"hard","question":"Throughout the entirety of &quot;Dragon Ball Z&quot;, Goku only kills two characters: a miniboss named Yakon and Kid Buu.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Film","type":"boolean","difficulty":"hard","question":"&quot;Cube&quot;, &quot;Cube 2: Hypercube&quot; and &quot;Cube Zero&quot; were directed by the same person.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Entertainment: Music","type":"boolean","difficulty":"hard","question":"Pete Townshend&#039;s solo album, &quot;White City: A Novel&quot;, is set in the metropolitan area of Chicago.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Geography","type":"boolean","difficulty":"hard","question":"The two largest ethnic groups of Belgium are Flemish and Walloon. ","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Japanese Anime & Manga","type":"boolean","difficulty":"hard","question":"The character Plum from &quot;No Game No Life&quot; is a girl.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Art","type":"boolean","difficulty":"hard","question":"The Statue of Liberty&#039;s official name is &ldquo;Liberty Enlightening the World&rdquo;.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Video Games","type":"boolean","difficulty":"hard","question":"The Paradox Interactive game &quot;Stellaris&quot; was released in 2016.","correct_answer":"True","incorrect_answers":["False"]}]'
// );
const dummyQuestions: Question[] = JSON.parse(
  '[{"category":"Geography","type":"multiple","difficulty":"easy","question":"What is the capital of Indonesia?","correct_answer":"Jakarta","incorrect_answers":["Bandung","Medan","Palembang"]},{"category":"Animals","type":"multiple","difficulty":"easy","question":"How many legs do butterflies have?","correct_answer":"6","incorrect_answers":["2","4","0"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In Pokemon Red &amp; Blue, what is the name of HM05?","correct_answer":"Flash","incorrect_answers":["Strength","Cut","Fly"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In &quot;Overwatch&quot;, which hero is able to wallride?","correct_answer":"Lucio","incorrect_answers":["Reinhardt","Sombra","Mercy"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"What language does Node.js use?","correct_answer":"JavaScript","incorrect_answers":["Java","Java Source","Joomla Source Code"]}]'
);

const initialState: SystemState = {
  title: 'Welcome to the Trivia Challenge!',
  alertMessage: '',
  // currentQuizSetup: {
  //   questions: [],
  //   difficulty: 'hard',
  //   amount: 0,
  //   type: 'boolean',
  // },
  currentQuizSetup: {
    questions: dummyQuestions,
    difficulty: 'hard',
    amount: 5,
    type: 'multiple',
  },
  currentResults: undefined,
  pastResults: [],
};

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setTitle,
    setAlertMessage,
    setCurrentQuizSetup,
    setCurrentResults,
    setPastResults,
  },
});
