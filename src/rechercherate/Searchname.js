import React from 'react'
import './Searchname.css'

export default function Searchname(props) {
    return (
        <div>
         <input className="inputsearch" type="text"  placeholder=" search by movie name " onChange={props.HandlehangeSearch}/>

        </div>
    )
}
