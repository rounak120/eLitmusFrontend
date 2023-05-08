import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Clue5.css'
function Clue5() {
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
      await fetch("https://e-litmus-backend.vercel.app/stats",{
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
      if (answer.toLowerCase() === '5') {
        var d1 = new Date();
      const newtime=d1.valueOf()
       timetaken=(newtime-time)/1000
       accuracy=(100/acc).toFixed(2)
      insert()
        navigate('/complete');
            
      } else {
        setAcc(prev=>prev+1)
        alert('Sorry, that is not the correct answer');
      }
    };
  return (
    <div className='clue5'>
        <h1>Clue 5: Spot the differences</h1>
      <p>Spot the number of differences between the  two images?</p>
      <img src="https://img.jagranjosh.com/images/2023/April/1842023/spot%20difference%20hedgehog-min.jpg" alt="Sunflowers painting" />
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

export default Clue5