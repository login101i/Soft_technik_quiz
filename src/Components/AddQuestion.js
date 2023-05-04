import React, { useState } from 'react';
import fs from 'fs';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  }

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newQuestion = {
      question: question,
      answers: [answer],
      correct: answer,
      questionId: Math.random(),
    };
    const questions = JSON.parse(fs.readFileSync('./src/data/questions.json'));
    questions.push(newQuestion);
    fs.writeFile('./src/data/questions.json', JSON.stringify(questions), (err) => {
      if (err) throw err;
      console.log('Question saved to file');
    });
    setQuestion('');
    setAnswer('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Question:
        <input type="text" value={question} onChange={handleQuestionChange} />
      </label>
      <label>
        Answer:
        <input type="text" value={answer} onChange={handleAnswerChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionForm;
