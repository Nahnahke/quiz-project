
import { createSlice } from '@reduxjs/toolkit';

// Change these to your own questions!
const questions = [
  { id: 1, questionText: 'What is the largest mammal in the world?', options: ['African Elephant', 'Blue Whale', 'Giraffe', 'White Rhinoceros'], correctAnswerIndex: 1 },
  { id: 2, questionText: 'Which is the smallest planet in our solar system?', options: ['Mars', 'Earth', 'Venus', 'Mercury'], correctAnswerIndex: 3 },
  { id: 3, questionText: 'Which country is known as the Land of the Rising Sun?', options: ['Australia', 'Japan', 'Brazil', 'India'], correctAnswerIndex: 1 },
  { id: 4, questionText: 'Who is the author of the famous novel "To Kill a Mockingbird"?', options: ['Jane Austen', 'Ernest Hemingway', 'Harper Lee', 'F. Scott Fitzgerald'], correctAnswerIndex: 2 },
  { id: 5, questionText: "Which gas is the most abundant in Earth's atmosphere?", options: ['Oxygen', 'Carbon dioxide', 'Argon', 'Nitrogen'], correctAnswerIndex: 3 },
  { id: 6, questionText: "What is the turtle's scientific name?", options: ['Crustacea', 'Testudines', 'Asteroidea', 'Oreochromis'], correctAnswerIndex: 1 },
  { id: 7, questionText: "How long is New Zeeland's Ninety Mile Beach?", options: ['55 miles', '90 miles', '28 miles', '89 miles'], correctAnswerIndex: 0 },
  { id: 8, questionText: 'Which European country eats the most chocolate per capita?', options: ['Belgium', 'Sweden', 'Switzerland', 'Belarus'], correctAnswerIndex: 2 },
  { id: 9, questionText: 'Who composed parts of the soundtrack for the 1994 game Sonic the Hedgehog 3?', options: ['Michael Jackson', 'Sting', 'Dr. Alban', 'Yoko Shimomura'], correctAnswerIndex: 0 },
  { id: 10, questionText: "Which country's national animal is a unicorn?", options: ['Iceland', 'New Zealand', 'Ireland', 'Scotland'], correctAnswerIndex: 3 }

]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  quizStart: false,
  score: 0
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }

      if (question.correctAnswerIndex === answerIndex) {
        state.score += 10;
      } else {
        state.score -= 5;
      }

      if (state.score <= 0) {
        window.alert('Too many wrong answers, you lose!');
        window.location.reload();
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
        // classname: `question-${questionId}`
      })
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    restart: () => {
      return initialState
    },
    startTheQuiz: (state) => {
      state.quizStart = true
    }
  }
})
