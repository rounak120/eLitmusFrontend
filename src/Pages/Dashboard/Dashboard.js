import React, { useState,useEffect } from 'react'
import {getData} from '../../Api.js'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom';
function Dashboard() {
    const navigate=useNavigate()
    const logout=()=>{
        navigate('/')
    }
    const [data,setData]=useState([])
    
    useEffect(() => {
        getData(setData)
       }, [])
  return (
    <div>
    {/* {console.log(data)} */}
    <button onClick={logout} className="log" >Logout</button>
    <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
          <div className='hea'>Time taken by the user</div>
            <tr>
              {/* <th scope='col' >#</th>    */}
              <th scope='col' >Email</th>
              <th scope='col' >TimeClue1</th>
              <th scope='col' >TimeClue2</th>
              <th scope='col' >TimeClue3</th>
              <th scope='col' >TimeClue4</th>
              <th scope='col' >TimeClue5</th>
              <th scope='col' >TotalTime</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr>
                {/* <th scope='row' >{index + 1}</th> */}
                <td >{data.email}</td>
                <td>{data.timeclue[0]}</td>
                <td>{data.timeclue[1]}</td>
                <td>{data.timeclue[2]}</td>
                <td>{data.timeclue[3]}</td>
                <td>{data.timeclue[4]}</td>
                <td>{data.timeclue[4]+data.timeclue[0]+data.timeclue[1]+data.timeclue[2]+data.timeclue[3]}</td>
                </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
          <div className='hea'>Accuracy of the user</div>
            <tr>
              {/* <th scope='col' >#</th> */}
              <th scope='col' >Email</th>
              <th scope='col' >AccClue1</th>
              <th scope='col' >AccClue2</th>
              <th scope='col' >AccClue3</th>
              <th scope='col' >AccClue4</th>
              <th scope='col' >AccClue5</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr>
                {/* <th scope='row' >{index + 1}</th> */}
                <td >{data.email}</td>
                <td>{data.accuracy[0]}</td>
                <td>{data.accuracy[1]}</td>
                <td>{data.accuracy[2]}</td>
                <td>{data.accuracy[3]}</td>
                <td>{data.accuracy[4]}</td>
                </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
  )
}


export default Dashboard