import React from "react";
import { Link , useNavigate } from "react-router-dom";

import './Home.css'
function Home(){
    const navigate=useNavigate()
    const logout =()=>{
        localStorage.clear()
        // window.location.reload()
        navigate('/')
    }
    const start = () =>{
        navigate('/clue1')
    }
    return (
        <div className="home-container">
        
            <img  src="https://rare-gallery.com/uploads/posts/864784-Candy-Treasure-chest-coffer-Jug-container.jpg" alt="treasure image"/>
            
            <div className="home-banner">
            <button  className="logout-button" onClick={logout}>Logout</button>
            <h1>Once you click on the start game button you will be asked to solve some puzzles in order to find the treasure....</h1>
            <button className="clue-button" onClick={start}> Start Game </button>
            </div>
        </div>  
    );
}
export default Home;
