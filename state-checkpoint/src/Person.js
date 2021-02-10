import React, { Component } from 'react';
import './App.css';


 class Person extends Component {
     constructor(){
         super();
     this.state = {
           fullName : "wael Mhamdi",
           bio : " High",
           imgSrc:"https://www.psychologicalscience.org/redesign/wp-content/uploads/2017/01/PAFF_010316_MeaningfulLife-609x419.jpg",
           profession : "full stack developer",
           timer: 0,
           intervall: null

     }
    }
 
    componentDidMount() {
        this.setState({intervall:setInterval(()=>{
            this.setState(
                {
                    timer:this.state.timer+1
                }
            )
        }, 1000)})
       
       }
       
    render() {
        return (
            <div>
                <h3>{this.state.timer}</h3>
                <h1>Name :{this.state.fullName}</h1>
                <h3>Bio : {this.state.bio}</h3>
                <img src={this.state.imgSrc} />
                <p>My proffesion is : {this.state.profession}</p>
                
            </div>
        )
    }
}

    

export default Person;