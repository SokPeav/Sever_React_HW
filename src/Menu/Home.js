import React from 'react'
import img from "../img/joke.jpg"
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
   

    return (
        <div style={{background: `url(${img}) no-repeat center`,backgroundSize: "cover" ,height:'1000px'}}>
           <h1 style={{padding:"50px"}} className="text-light font-weight-bold ">Hello Mentor From React Joke Team  </h1>
           <h3 style={{}}className="text-info bg-gradient-primary shadow py-5 text-justify text-center">Come with Us</h3>
        </div>
    )
}
