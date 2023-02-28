


import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import BazaPytan from './BazaPytan/index'
import QuestionBox from './Components/QuestionBox'
import Result from './Components/Result'
import './assets/style.css'


class QuizBee extends Component {
    state = {
        questionBank: [],
        score: 0,
        responses: 0
    }

    getQuestions = () => {
        BazaPytan().then(questions => {
            console.log(questions)
            this.setState({
                questionBank: questions
            })
        })
    }

    componentDidMount() {
        this.getQuestions()
    }


    wybranoDobrze = (answerIndex, item, answers, correct) => {

        if (answerIndex === correct) {
            console.log("ok poprawna odp")
            this.setState({
                score: this.state.score + 1,
                responses: this.state.responses < 20 ? this.state.responses + 1 : 20
            })
        }
        console.log(this.state.score, this.state.responses)
    }

    wybranoZle = (answerIndex, item, answers, correct) => {
        this.setState({
            score: this.state.score + 0,
            responses: this.state.responses < 20 ? this.state.responses + 1 : 20
        })

        console.log(typeof (answerIndex), typeof (correct))
        console.log(answerIndex, correct)
        console.log("odpowiedź zła, nie dodaję punktu")
        console.log(this.state.score, this.state.responses)

    }

    zakonczGre=()=>{
        this.setState({
            responses:this.state.responses +1000
        })
    }



grajPonownie = () => {
    this.getQuestions()
    this.setState({
        score: 0,
        responses: 0
    })
}


render() {
    return (

        <div className="container">
            <div className="title">SOFT-TECHNIK QUIZ</div>
            {this.state.questionBank.length > 0 && this.state.responses < 20 &&
                this.state.questionBank.map(
                    ({ question, answers, correct, questionId, src }) => (
                        <QuestionBox
                            key={questionId}
                            question={question}
                            answers={answers}
                            correct={correct}
                            src={src}
                            wybranoDobrze={(answerIndex, item) => this.wybranoDobrze(answerIndex, item, answers, correct)}
                            wybranoZle={(answerIndex, item) => this.wybranoZle(answerIndex, item, answers, correct)}
                            wszystkieNieaktywne={()=>this.zakonczGre()}
                        />
                    )
                )}

            {this.state.responses > 20 ?
                (
                    <Result
                        score={this.state.score}
                        responses={this.state.responses}
                        grajPonownie={this.grajPonownie}

                    />

                ) : null}

        </div>
    )
}
}

ReactDOM.render(<QuizBee />, document.getElementById("root"))
