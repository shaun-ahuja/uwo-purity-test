import React, { useState } from 'react';
import { Analytics } from "@vercel/analytics/react"
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
    // Count the number of checked items
    const checkedCount = Object.values(checkedItems).filter(value => value).length;

    // Calculate purity score by subtracting checked count from 100
    const purityScore = 100 - checkedCount;

    // Navigate to results page with the score
    navigate('/results', { state: { score: purityScore } });
  };

  const questions = [
    'Went to your O-week concert',
    'Had a dorm party get shut down',
    'Went to O-Hall for a meal',
    'Made friends during O-week that you never saw again',
    'Threw up during O-week because you drank too much',
    'Stole from your residence dining hall',
    'Got caught stealing from your residence dining hall',
    'Ate 711 taquitos or Subway because that was the only thing available',
    'Kicked out by your roommate because they were getting active ;)',
    'Kicked your roommate out because YOU were getting active ;)',
    'Lost your OneCard',
    'Ordered Chef On Call',
    'Used Mustang on Demand to get home',
    'Attended 5 or fewer lectures for a course during the entire term',
    'Attended a club fashion show',
    'Scored above 80 without going to class',
    'Set off a campus building fire alarm',
    'Slept overnight in UCC',
    'Showered at Ivey',
    'Been to Dollar Beers at Jacks and Wine Wednesdays at Delilahs in the same week',
    "Own OVO x Western merch",
    "Got in trouble by your residence don",
    "Studied in a cubicle at Taylor Library",
    "Not gotten a spot at Weldon because it was so packed",
    "Attend another majors classes solely to find prospects",
    "Made a balloon out of a condom",
    "Led someone on solely to get a co-op job referral",
    "Been to Beerfest at Concrete Beach",
    "Bought posters from the Imaginus Poster Sale",
    "Forgot to mute yourself during an online lecture / interview",
    "Threw a party in a lecture hall",
    'Deferred an exam because you weren’t ready',
    'Had an academic consideration request get denied',
    'Failed a course',
    'Failed a course twice',
    'Failed a course three times ???',
    'Smoked weed/had edibles',
    'Went to class drunk/high',
    'Went to class hungover',
    'Written an exam hungover',
    'Been drunk 3 or more nights in a row',
    'Went to Laurier for St. Patties',
    'Been on a date in London',
    'Been in a relationship',
    'Been in a relationship with a TA',
    'Been in a relationship with a professor',
    'Kissed someone on campus',
    'Body count > 5',
    'Had sex in residence',
    'Had sex in a non - residence campus building',
    'Met someone irl who you matched with on Tinder / Hinge',
    'Worked out at the REC',
    'Pulled an all-nighter',
    'Stepped in geese poop',
    'Got attacked by a goose',
    'Didn’t go to the football game at HOCO',
    'Gone to the Spoke because the Tim Horton’s line was too long',
    'Took a bus from Natural Science to Alumni Hall',
    'Have a shower in residence without wearing flip-flops',
    'Toboggan down UC hill when it snowed',
    'Have a bus drive by you because it’s full',
    'Dance on the stage at Jack’s',
    'Play on an intramural team',
    'Get paid for a research study',
    'Skipped a class because you were hung over',
    'Brought someone home from the bar',
    'Got hit on by a professor',
    'Been to Cowboys Ranch',
    'Spent your whole summer in London',
    'VP/Director in >2 clubs',
    'Voted for USC President',
    'Stayed in during Halloween because of exams',
    'Been featured in a campus interview',
    'Been to a darty',
    'Had to leave a party early because the cops shut it down',
    'Waited +1 hour to get into a bar',
    'Saw NAV & Quavo perform (yes both of them)',
    'Went to Battle of the Bands at The Spoke',
    'Had a meal with your parents at The Wave',
    'Volunteered on campus',
    'Got an on campus job',
    'Participated in a charity golf tournament',
    'On a Western sports team',
    'Been to more than 5 Western football games',
    'Applied to be a Soph but got rejected',
    'Kissed a Soph',
    'Kissed a residence Don',
    'Have a photo with a Special Constable',
    'Took a photo with CityBoyJJ at HOCO',
    'Slipped and fell on ice in public',
    'Been skating at the REC center',
    'Went to a club event just for the free food',
    'Went to UCC\'s career fair',
    'Had late night breakfast at Mustang Lounge during exam season',
    'Cheated on your significant other',
    'Got cheated on',
    'Got caught on a dating app',
    'Posted on r/uwo',
    'Won a case competition',
    'Got rejected from Waterloo Eng/CS or Mac Health Sci'

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

  // This is a workaround since we can't reliably use useLocation in this artifact rendering environment
  const location = window.location;
  const searchParams = new URLSearchParams(location.search);

  // First try to get score from URL parameters (this will work when sharing links)
  const scoreFromParams = searchParams.get('score');

  // Then try to access the state if it exists (this will work during normal navigation)
  // Need to check if history state has the state property from react-router
  const historyState = window.history.state;
  const scoreFromState = historyState && historyState.usr ? historyState.usr.score : null;

  // Use score from either source, defaulting to 100 if neither is available
  const score = scoreFromState || scoreFromParams || 100;
  const getScoreMessage = (score) => {
    if (score >= 90) return "do you even leave your dorm???";
    if (score >= 70) return "wow you're a pretty respectable mustang. keep up the good work";
    if (score >= 50) return "you've had your fair share of Western experiences.";
    if (score >= 30) return "certified western vet";

  };

  // const handleShareResult = async () => {
  //   const title = "UWO Purity Test";
  //   const url = `${window.location.origin}`;

  //   // Check if the Web Share API is supported by the browser
  //   if (navigator.share) {
  //     try {
  //       await navigator.share({
  //         title,
  //         url
  //       });
  //       console.log("Content shared successfully");
  //     } 
  //     catch (err) {
  //       console.error("Error sharing: ", err);

  //       // Fallback for when share is aborted or fails
  //       alert("Couldn't share results. Try copying this link instead: " + url);
  //     }
  //   } else {
  //     // Fallback for browsers that don't support the Web Share API
  //     alert("Sharing not supported on this browser. Copy this link instead: " + url);

  //     // Optional: Add clipboard copy functionality
  //     navigator.clipboard.writeText(url)
  //       .then(() => console.log("URL copied to clipboard"))
  //       .catch(err => console.error("Could not copy URL: ", err));
  //   }
  // };

  const handleShareResult = async () => {
    const title = "UWO Purity Test";
    const url = `${window.location.origin}`;

    // Check if the Web Share API is supported by the browser
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url
        });
        console.log("Content shared successfully");
      } catch (err) {
        // console.error("Error sharing: ", err);

        // // Fallback for when share is aborted or fails
        // alert("Couldn't share results. Try copying this link instead: " + url);
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      alert("Sharing not supported on this browser. Copy this link instead: " + url);

      // Optional: Add clipboard copy functionality
      navigator.clipboard.writeText(url)
        .then(() => console.log("URL copied to clipboard"))
        .catch(err => console.error("Could not copy URL: ", err));
    }
  };

  return (
    <div className="purity-test results-page">
      <div className="header">
        <h1>
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