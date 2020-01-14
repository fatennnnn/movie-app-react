import React, { Component } from 'react'
import './Buttonadd.css'
export default class Buttonadd extends Component {
    constructor(props){
        super(props)
        this.state={
            rating:"",

            movieimage:"",
            moviename:"",
        }
    }
    handleChange=(event)=>{
        this.setState({
             [event.target.name]:event.target.value

    
        })
    
    }
    handleAdd=()=>{
        this.props.addmo(
            this.state.movieimage,this.state.moviename,this.state.rating);
            this.setState({rating:"",movieimage:"",moviename:""});
            this.props.hide();

    }
    
    render() {
        if (this.props.show) {

        return (
<form>
            <div className="modal">     
            {/* <button  className="button" >+</button> */}
            <input  className="inputform" type="text" name="rating"  onChange={this.handleChange} value={this.state.rating}/>

            <input className="inputform"  type="text" name= "movieimage" onChange={this.handleChange} value={this.state.movieimage}/>
            <input  className="inputform"  type="text" name="moviename" onChange={this.handleChange} value={this.state.moviename}/>

           <button  className="button" onClick={this.handleAdd}>Add</button>

            </div>
            </form>
        )
    }else return null;
    }
}