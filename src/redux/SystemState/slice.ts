import { createSlice } from '@reduxjs/toolkit';
import { SystemState } from './models';
import { setTitle, setAlertMessage, setCurrentQuestions, setCurrentResults, setPastResults } from './caseReducers';

const initialState: SystemState = {
  title: 'Welcome to the Trivia Challenge!',
  alertMessage: '',
  currentQuestions: JSON.parse('[{"category":"Vehicles","type":"boolean","difficulty":"hard","question":"In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.","correct_answer":"True","incorrect_answers":["False"]},{"category":"General Knowledge","type":"boolean","difficulty":"hard","question":"This is the correct spelling of &quot;Supercalifragilisticexpialidocious&quot;.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Comics","type":"boolean","difficulty":"hard","question":"In the comic book &quot;Archie&quot;, Betty is friends with Veronica because she is rich.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Entertainment: Japanese Anime & Manga","type":"boolean","difficulty":"hard","question":"Throughout the entirety of &quot;Dragon Ball Z&quot;, Goku only kills two characters: a miniboss named Yakon and Kid Buu.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Film","type":"boolean","difficulty":"hard","question":"&quot;Cube&quot;, &quot;Cube 2: Hypercube&quot; and &quot;Cube Zero&quot; were directed by the same person.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Entertainment: Music","type":"boolean","difficulty":"hard","question":"Pete Townshend&#039;s solo album, &quot;White City: A Novel&quot;, is set in the metropolitan area of Chicago.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Geography","type":"boolean","difficulty":"hard","question":"The two largest ethnic groups of Belgium are Flemish and Walloon. ","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Japanese Anime & Manga","type":"boolean","difficulty":"hard","question":"The character Plum from &quot;No Game No Life&quot; is a girl.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Art","type":"boolean","difficulty":"hard","question":"The Statue of Liberty&#039;s official name is &ldquo;Liberty Enlightening the World&rdquo;.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Video Games","type":"boolean","difficulty":"hard","question":"The Paradox Interactive game &quot;Stellaris&quot; was released in 2016.","correct_answer":"True","incorrect_answers":["False"]}]'),
  currentResults: undefined,
  pastResults: [],
};

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setTitle,
    setAlertMessage,
    setCurrentQuestions,
    setCurrentResults,
    setPastResults,
  },
});
