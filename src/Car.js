import React, { useState } from 'react'
import './Car.css'

export default function Car() {
    const[car,setCar]=useState(["Mustang","Renault"])
    function Addcar(){
        let b=document.getElementById("inp").value;
        if(b!==""){
            setCar([...car,b])
           document.getElementById("inp").value="";
        }
        else{
            alert("Enter the car")
        }
    }
    function Remove(){
        setCar(car.slice(0,-1))
        if(car.length>0){
            document.getElementById("result1").innerHTML="You have deleted "+car.slice(-1)
        }
        else{
            document.getElementById("result1").innerHTML="No cars left to delete."
        }
    }
  return (
    <div>
        <center>
        <input type='text' placeholder='Enter the car' id='inp'></input><br/>
        <button onClick={Addcar}>Add Car</button>
        <button onClick={Remove}>Delete</button>
        {car.map((x)=><li key={x}>{x}</li>)}
        <p id="result1"></p>
        </center>
       
    </div>
  )
}
