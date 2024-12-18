import React, { useState } from 'react'
import './Car.css'

function Bike() {
    const[bike,setBike]=useState(["Ktm","Duke"])
    function Addbike(){
        let a=document.getElementById("input1").value;
        if(a!=""){
            setBike([...bike,a])
            document.getElementById("input1").value=""
        }
        else{
            alert("Enter the Bike");
        }
    }
    function Remove(){
        setBike(bike.slice(0,-1));
        if(bike.length>0){
            document.getElementById("result2").innerHTML="You have deleted "+ bike.slice(-1)
        }
        else{
            document.getElementById("result2").innerHTML="No Bikes left to delete."
        }

    }
  return (
    <div>
        <center>
            <input type='text' id='input1' placeholder='Enter the Bike'></input><br/>
            <button onClick={Addbike}>Add Bike</button>
            <button onClick={Remove}>Delete</button>
             {bike.map((x,index)=><li key={index}>{x}</li>)}
             <p id="result2"></p>
        </center>
       

    </div>
  )
}

export default Bike