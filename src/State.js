import React, { useState } from 'react'
import './Car.css'

export default function State() {
    const[color,setColor]=useState(["White","Black"])
function add(){
    let a=document.getElementById("input").value
    if(a!==""){
    setColor([...color,a])
    document.getElementById("input").value=""
    }
    else{
        alert("Enter the Color")
    }
}
function del(){
 setColor(color.slice(0,-1));
 if(color.length>0){
 document.getElementById("result3").innerHTML = "You have deleted " + color.slice(-1);
 }else{
    document.getElementById("result3").innerHTML = "No colors left to delete.";
 }
} 

       


  return (
    <div>
        <center>
            <input type="text" placeholder='Enter the Color' id='input'></input><br/>
            <button onClick={add}>Add Color</button>
            <button onClick={del}>Delete</button>
        {color.map(x=><li key={x}>{x}</li>)}
        <p id="result3"></p>
       

        </center>
        
    </div>
  )
}
