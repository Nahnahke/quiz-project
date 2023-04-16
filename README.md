# Redux quiz group project

This is a multiple-choice quiz game built using React and Redux, where users can test their trivia knowledge by answering questions and getting feedback on their answers. It's a group project made by Hannah Ek, Sofia Gerdmar, Camilla Cronqvist and Matilda Frid as part of the Technigo Web Development Bootcamp.

## The problem

This project was our introduction to Redux, so a lot of time was spent researching new concepts and tools. We had a starter code containing a few pre-defined reducers that we could use to set everything up. 

The first meeting we had a brainstorming session where we came up with a theme, discussed how we wanted to work with the project together and made a Figma board to keep track of everything and collect inspiration. For the second meeting we did a mob-programming session where we set up the React components, the main functionality and logic of the application. Then we divided the work between us and worked individually, where everyone got to do a little bit of both styling and javascript.

The end result features the following:

- Redux implementation: The app makes use of Redux for managing the state, with small components that interact with the store, following best practices for state management.
- Answer feedback: When the user selects an answer, the app provides feedback on whether the answer was correct or not, allowing the user to learn from their mistakes.
- Progress tracking: The app displays the current question number out of total amount, giving users a sense of progress.
- Summary screen: After answering all the questions, users are presented with a summary screen that displays the number of correct and incorrect answers they provided. Conditional rendering of elements (e.g. confetti) depending on the outcome.
- Visually appealing user interface: Styled components with props for the CSS styling.
- Timer: Countdown timer to complete the quiz. If it counts down to 0, they lose. 
- Score: We give a score for correct answers and deduct points for incorrect answers. If the user goes below 0, they lose!

## View it live

https://the-fact-frenzy-quiz.netlify.app/