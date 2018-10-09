import React, { Component } from 'react';
import "./Jumbotron.css";
import photo from "../../assets/image/profile.jpg"



class Jumbotron extends Component {

    render() {
        return (

            <div id ="jumbotron_main" className=" jumbotron text-center">
                <div id="img">
                <h1 className="display-4">John De Jesus</h1>
                <span className="lead">Full-Stack MERN Web Developer,Notary Public, And Paralegal </span>
            
                <img alt= ""src={photo}/>
                 </div>
                </div>
                )
            }
        }
        
        
export default Jumbotron;