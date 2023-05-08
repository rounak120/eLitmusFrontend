import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Clue2.css'
function Clue2() {
  window.onload = function() {
    if (window.confirm("Do you really want to restart the puzzle?")) {
      window.location.href = "/Home";
    } else {
      return false;
    }
  };
    const [answer, setAnswer] = useState('');
    const navigate = useNavigate();
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
      if (answer.toLowerCase() === 'vincent van gogh') {
        var d1 = new Date();
      const newtime=d1.valueOf()
       timetaken=(newtime-time)/1000
       accuracy=(100/acc).toFixed(2)
      insert()
        navigate('/clue3');
            
      } else {
        setAcc(prev=>prev+1)
        alert('Sorry, that is not the correct answer');
      }
    };
  return (
    <div className="clue2" >
        <h1>Clue 2: Image Puzzle</h1>
      <p>There is always a painter for a painting the name of the painter might help you to clear this level but you should also make note of how much the painting was sold for.</p>
      <img src="https://iiif.micr.io/TZCqF/full/1280,/0/default.jpg" alt="Sunflowers painting" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="answer">Enter your answer:</label>
        <input
          type="text"
          id="answer"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Clue2