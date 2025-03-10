import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

// Main App Component
function App() {
  return (
    <Router>
      <div className="purity-test-container">
        <Routes>
          <Route path="/" element={<PurityTest />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

// Purity Test Component
function PurityTest() {
  const [checkedItems, setCheckedItems] = useState({});
  const navigate = useNavigate();

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

    // Navigate to results page with the score
    navigate('/results', { state: { score: purityScore } });
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
    "Done leetcode on a Friday Night",
    "Climbed onto MC roof",
    "Ate instant noodles for dinner three or more nights in a row",
    // More questions...
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
    "Had sex in Waterloo Park"
    // Additional questions can be added here
  ];

  return (
    <div className="purity-test">
      <div className="header">
        <h1 >
          {/* <span className="official">The Official</span> Univeristy of Western Ontario Purity Test */}
          <img className="center-image" src="/uwoPurityTest.png" alt="University of Western Ontario Purity Test" />

        </h1>
        <p className="description">
          The first ever Western University Purity Test. Serving as a way for students to bond and track their experiences
          throughout their time at the University of Western Ontario. It's a voluntary opportunity for students to reflect on their
          unique university journey.
        </p>

        <p className="caution">
          Caution: This is not a bucket list. You are beyond cooked if you complete all the items on this list.
        </p>
        <p className="instructions">
          Click on every item you have done. Your purity score will be calculated at the end.
        </p>
      </div>

      <div className="questions">
        {questions.map((question, index) => (
          <div className="question-item" key={index}>
            <span className="question-number">{index + 1}.</span>
            <label className="checkbox-container">
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
    </div>
  );
}

// Results Page Component
function ResultsPage() {
  const navigate = useNavigate();
  const location = window.location;

  // Get score from the URL search params or use a default
  // In a real app, you would use useLocation from react-router-dom
  // This is a workaround for the artifact rendering
  const urlParams = new URLSearchParams(location.search);
  const scoreFromParams = urlParams.get('score');

  // Try to get score from state if available (this would work in a real app)
  const scoreFromState = location.state?.score;

  // Use the score from state or params, or default to 100
  const score = scoreFromState || scoreFromParams || 100;

  const getScoreMessage = (score) => {
    if (score >= 90) return "do you even leave your dorm???";
    if (score >= 70) return "wow you're a pretty respectable mustang. keep up the good work";
    if (score >= 50) return "you've had your fair share of Waterloo experiences.";
    if (score >= 30) return "hell nah you need help stop this";
    return "You're a Waterloo legend! The geese bow to you.";
  };

  const handleShareResult = () => {
    // In a real app, this would generate a shareable link or open a share dialog
    alert("This would share your results on social media!");
  };

  return (
    <div className="purity-test results-page">
      <div className="header">
        <h1>
          {/* <span className="official">The Official</span> University of Western Ontario Purity Test */}
          <img className="center-image" src="/uwoPurityTest.png" alt="University of Western Ontario Purity Test" />
        </h1>
      </div>

      <div className="results-content">
        <h2 className="result-score">Your UWO Purity Score: {score}</h2>
        <p className="result-message">{getScoreMessage(score)}</p>

        <div className="action-buttons">
          <button className="share-button" onClick={handleShareResult}>
            Share Result
          </button>
          <button className="retake-button" onClick={() => navigate('/')}>
            Retake Test
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;