import React from "react";
import './Complete.css'
const Complete = () => {
  window.onload = function() {
    if (window.confirm("Do you really want to restart the puzzle?")) {
      window.location.href = "/Home";
    } else {
      return false;
    }
  };
  return (
    <div className='bg'>
        <img src="https://previews.123rf.com/images/nearbirds/nearbirds1408/nearbirds140800305/30922330-illustration-island-with-palm-trees-and-a-treasure-chest.jpg" alt="Sunflowers painting" />
      <div className='remark'>
      <h1>Congratulations!</h1>
      <p>You have found the treasure.</p>
      </div>
    </div>
  );
};

export default Complete;
