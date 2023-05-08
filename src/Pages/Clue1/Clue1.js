import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './Clue1.css'
function Clue1() {
  
  window.onload = function() {
    if (window.confirm("Do you really want to restart the puzzle?")) {
      window.location.href = "/Home";
    } else {
      return false;
    }
  };
  
    const navigate = useNavigate();
    const [answer, setAnswer] = useState('');
    var d = new Date();
    const time=d.valueOf()
    const [acc,setAcc] = useState(1)
    let timetaken=0,accuracy=0
    const insert = async () => {
      await fetch("http://localhost:3001/stats",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email:localStorage.getItem('email'),
          timeclue:timetaken,
          accuracy:accuracy
        })

      })
    }
    
  const handleSubmit = (event) => {
    event.preventDefault();
    if (answer.toLowerCase() === 'parl the balloon owl') {
      var d1 = new Date();
      const newtime=d1.valueOf()
       timetaken=(newtime-time)/1000
       accuracy=(100/acc).toFixed(2)

      insert()
      navigate('/clue2');
    } else {
      setAcc(prev=>prev+1)
      alert('Sorry, that is not the correct answer');
    }
  };
  return (
    <div>
    <h1>Clue 1: Text Puzzle</h1>
      <p>Unscramble the letters to form a phrase:</p>
      <p>alrp eht loblaon olw</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="answer">Enter your answer:</label>
        <input
          type="text"
          id="answer"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        />
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default Clue1