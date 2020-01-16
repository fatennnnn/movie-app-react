import React, { Component } from 'react'
import './Loader.css'

const   Loader =(WrappedComponent) => {
    return function  Loader( {loading , ...props}){
    
    
        return loading ? <div className="loader"> </div> : <WrappedComponent {...props}/>
    
        
    }
}
export default Loader;


