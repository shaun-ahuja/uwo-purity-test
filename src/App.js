import React, { useState } from 'react';
import './App.css';

function App() {
  const [checkedItems, setCheckedItems] = useState({});
  const [score, setScore] = useState(null);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [id]: checked
    });
  };

  const calculateScore = () => {
    const totalQuestions = questions.length;
    const checkedCount = Object.values(checkedItems).filter(value => value).length;
    const purityScore = Math.round(((totalQuestions - checkedCount) / totalQuestions) * 100);
    setScore(purityScore);
  };

  const questions = [
    "Played League of Legends/Valorant",
    "Got attacked by a goose",
    "Stepped in geese shit",
    "Own a Mr. Goose plushie",
    "Gotten a bike stolen on campus",
    "Worked out at PAC",
    "Been rock climbing at PAC",
    "Went on a late-night walk to Waterloo Park",
    "Done a late night campus pizza run",
    "Had 10 lines at Lazeez",
    "Lost your WatCard",
    "Slept in MC",
    "Showered in E7",
    "Had 3 or more monsters within 24 hours",
    "Pulled out your laptop at the dinner table",
    // ... many more questions
    "Been in a relationship with someone in the opposite stream/sequence",
    "Led someone on solely to get a co-op job referral",
    "Fondled your partner's genitalia during lecture",
    "Groped the same gender's ass",
    "Signed up for Aphrodite",
    "Ghosted/Got Ghosted on Aphrodite",
    "Body count > 0",
    "Kissed someone on campus",
    "Had sex in residence",
    "Had sex in a non-residence campus building",
    "Had sex in Waterloo Park",
    "Got caught on a dating app",
    "Cheated on your boyfriend/girlfriend",
    "Have had yellow fever",
    "Masturbated in non-residence building",
    "Masturbated between classes",
    "Sent a nude to your co-op group chat",
    "Gone 3 or more days without showering",
    "Gone a week or more without showering",
    "Fucked a goose"
  ];

  return (
    <div className="purity-test-container">
      <div className="purity-test">
        <div className="header">
          <h1>
            <span className="official">The Official</span> Waterloo Purity Test
          </h1>
          <p className="description">
            The Waterloo Purity Test has historically served as a way for students to bond and track their experiences
            throughout their time at the University of Waterloo. It's a voluntary opportunity for students to reflect on their
            unique university journey.
          </p>
          <p className="caution">
            Caution: This is not a bucket list. Completion of all items on this test will likely result in academic
            probation.
          </p>
          <p className="instructions">
            Click on every item you have done. Your purity score will be calculated at the end.
          </p>
        </div>

        <div className="questions">
          {questions.map((question, index) => (
            <div className="question-item" key={index}>
              <label className="checkbox-container">
                <span className="question-number">{index + 1}.</span>
                <input
                  type="checkbox"
                  id={`question-${index}`}
                  checked={checkedItems[`question-${index}`] || false}
                  onChange={handleCheckboxChange}
                />
                <span className="checkbox-text">{question}</span>
              </label>
            </div>
          ))}
        </div>

        <div className="button-container">
          <button className="calculate-button" onClick={calculateScore}>
            Calculate My Score
          </button>
        </div>

        {score !== null && (
          <div className="result">
            <h2>Your Waterloo Purity Score: {score}%</h2>
            <p>
              {score >= 90
                ? "You're as pure as the snow on Ring Road in January!"
                : score >= 70
                  ? "You've had a few Waterloo experiences, but still have more to explore."
                  : score >= 40
                    ? "You've fully embraced the Waterloo experience!"
                    : "You're a Waterloo legend! (Or a concerning individual, we're not sure which.)"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;