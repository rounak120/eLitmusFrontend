import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
function Clue3() {
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
      if (answer.toLowerCase() === 'fire') {
        var d1 = new Date();
      const newtime=d1.valueOf()
       timetaken=(newtime-time)/1000
       accuracy=(100/acc).toFixed(2)
      insert()
        navigate('/clue4');
            
      } else {
        setAcc(prev=>prev+1)
        alert('Sorry, that is not the correct answer');
      }
    };
  return (
    <div><h1>Clue 3</h1>
    
      <div>
        <p>I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but I need water to survive. What am I?</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="answer">Answer:</label>
          <input type="text" id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      </div>
     </div>
  )
}

export default Clue3