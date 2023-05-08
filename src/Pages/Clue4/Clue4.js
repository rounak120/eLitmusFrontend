import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Clue4.css'
function NumberForm() {
  window.onload = function() {
    if (window.confirm("Do you really want to restart the puzzle?")) {
      window.location.href = "/Home";
    } else {
      return false;
    }
  };
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
  // Set up state to track the number
  const [number, setNumber] = useState(0);

  // Function to handle the button click and increase the number
  const handleClick = () => {
    setNumber(number + 1);
  };

  // Function to handle the form submission and show the message if the number is 40
  const handleSubmit = (event) => {
    event.preventDefault();
    if (number === 40) {
      var d1 = new Date();
      const newtime=d1.valueOf()
       timetaken=(newtime-time)/1000
       accuracy=(100/acc).toFixed(2)
      insert()
      alert("Success! 40 million dollars was the price for which the painting was sold.");
      navigate('/clue5');
    }else {
      setAcc(prev=>prev+1)
        alert("Looks like you pressed the button wrong number of times...");
        setNumber(0);
    }
  };

  return (
      <div><h1>Clue 4</h1>
      <div>
      <p> This won't be difficult if you read clue 2 carefully... </p>
    <form onSubmit={handleSubmit}>
      <label>
        Number:
        <input type="text" value={number} readOnly />
      </label>
      <button className='increase'  type="button" onClick={handleClick}>
        Increase Number
      </button>
      <button type="submit">
        Submit
      </button>
    </form>
    </div>
    </div>
  );
}

export default NumberForm;
