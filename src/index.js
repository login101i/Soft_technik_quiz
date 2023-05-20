import React, { Component, useEffect } from "react";
import ReactDOM from "react-dom";
import BazaPytan from "./BazaPytan/index";
import QuestionBox from "./Components/QuestionBox";
import Result from "./Components/Result";
import Navbar from "./Components/Navbar";
import QuestionForm from "./Components/AddQuestion";
import { numberOfQuestion } from "./BazaPytan";
import "./styles/style.css";
import "./styles/navbar.css";

class QuizBee extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
    numberOfTries: 0,
    questionsLeft: 20,
  };

  getQuestions = () => {
    BazaPytan().then((questions) => {
      console.log(questions);
      this.setState({
        questionBank: questions,
      });
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  wybranoDobrze = (answerIndex, item, answers, correct) => {
    if (this.state.numberOfTries === 0) {
      if (answerIndex === correct) {
        console.log("ok poprawna odp");
        this.setState((prevState) => ({
          score: prevState.score + 1,
          responses: prevState.responses < 20 ? prevState.responses + 1 : 20,
          numberOfTries: 0,
        }));
      }
    }
    this.setState((prevState) => ({
      questionsLeft: prevState.questionsLeft - 1,
    }));

    console.log(
      "Score " + this.state.score,
      "Responses " + this.state.responses,
      "Tries " + this.state.numberOfTries,
      "numberOfQuestions " + numberOfQuestion,
      "questionsLeft " + this.state.questionsLeft
    );
  };

  wybranoZle = (answerIndex, item, answers, correct) => {
    this.setState((prevState) => ({
      score: prevState.score,
      responses: prevState.responses < 20 ? prevState.responses + 1 : 20,
      numberOfTries: prevState.numberOfTries + 1,
    }));

    console.log(typeof answerIndex, typeof correct);
    console.log(answerIndex, correct);
    console.log("odpowiedź zła, nie dodaję punktu");
    console.log(
      "Score " + this.state.score,
      "Responses " + this.state.responses,
      "Tries " + this.state.numberOfTries,
      "numberOfQuestions " + numberOfQuestion,
      "questionsLeft " + this.state.questionsLeft
    );
  };

  zakonczGre = () => {
    this.setState({
      responses: this.state.responses,
    });
  };

  grajPonownie = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  render() {
    const returnResult = () => {
      return (
        <Result
          score={this.state.score}
          responses={this.state.responses}
          grajPonownie={this.grajPonownie}
        />
      );
    };
    return (
      <>
        <div className="container">
          <div className="title">SOFT-TECHNIK QUIZ</div>
          {this.state.questionBank.map(
            ({ question, answers, correct, questionId, src }) =>
              this.state.questionsLeft === 0 ? (
                returnResult()
              ) : (
                <QuestionBox
                  key={questionId}
                  question={question}
                  answers={answers}
                  correct={correct}
                  src={src}
                  wybranoDobrze={(answerIndex, item) =>
                    this.wybranoDobrze(answerIndex, item, answers, correct)
                  }
                  wybranoZle={(answerIndex, item) =>
                    this.wybranoZle(answerIndex, item, answers, correct)
                  }
                  wszystkieNieaktywne={() => this.zakonczGre()}
                />
              )
          )}
        </div>
      </>
    );
  }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"));
