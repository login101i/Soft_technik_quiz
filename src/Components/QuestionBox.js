import React, { useState, useEffect } from "react";
import FlipMove from "react-flip-move";

const QuestionBox = ({
  question,
  answers,
  correct,
  wybranoDobrze,
  wybranoZle,
  wszystkieNieaktywne,
  src,
}) => {
  const [answer, setAnswer] = useState(answers);
  const [answersShuffled, setAnswersShuffled] = useState([]);

  useEffect(() => {
    setAnswersShuffled(answers.sort(() => Math.random() - 0.5));
  }, [question, answers]);

  return (
    <div className="questionBox">
      <div
        style={{
          textAlign: "center",
        }}
        className="question"
      >
        {question}
      </div>
      <FlipMove duration={500} easing="cubic-bezier(1, 0, 0, 1)">
        {src && (
          <div className="flex">
            {" "}
            <img className="imageQuestion" src={src} alt="radstalImage" />
          </div>
        )}

        {answersShuffled.map((item, id) => (
          <button
            style={{
              color: "white",
              width: "97%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="answerBtn"
            key={id}
            onClick={() => {
              setAnswer(item);
              const answerIndex = answers[answers.indexOf(item)];

              let wszystkieBtn = document.querySelectorAll(".answerBtn");
              let kliknietyBtn = Array.from(
                document.querySelectorAll(".answerBtn")
              ).find((el) => el.innerText === item.trim());

              const ancestor = kliknietyBtn.parentElement;
              let pominieteBtn = Array.from(
                ancestor.querySelectorAll(".answerBtn")
              ).filter((el) => el.innerText !== item.trim());
              if (answerIndex === correct) {
                kliknietyBtn.style.background = "green";
                kliknietyBtn.disabled = true;
                pominieteBtn.forEach((o) => (o.style.background = "red"));
                pominieteBtn.forEach((r) => (r.disabled = true));
                wybranoDobrze(answerIndex, item);

                // if(kliknietyBtn.disabled===true){
                //     alert("nieaktywny")
                // }
              } else {
                kliknietyBtn.style.background = "red";
                kliknietyBtn.disabled = true;
                wybranoZle(answerIndex, item);
              }
              const iloscButtonow = wszystkieBtn.length;

              for (let i = 0; i < iloscButtonow; i++) {
                let nieaktywny = wszystkieBtn[i].disabled === true;
              }
              const tablicaWszystkichButtonow = Array.from(wszystkieBtn);
              const liczbaNiekatywnychBtn = tablicaWszystkichButtonow.filter(
                (obj) => obj.disabled
              ).length;
              // console.log(liczbaNiekatywnychBtn, iloscButtonow);

              if (liczbaNiekatywnychBtn === iloscButtonow) {
                setTimeout(() => {
                  wszystkieNieaktywne();
                }, 2000);
              }
            }}
          >
            {item}
          </button>
        ))}
      </FlipMove>
    </div>
  );
};

export default QuestionBox;
