import React from 'react'
import './Movieliste.css'

export default function Movieliste(props) {

    const Rating = (count) => {
        let stars = []
      if  (count <=5 ) 
      {
       for (let i = 0; i < 5; i++) {
            if(i < count) {
                stars.push(<span >★</span>)
            }
            else {
                stars.push(<span >☆</span>)
            }
        }
        return (
            <div className="movieRating">{stars}</div>
        )
      }
        else alert (" Error ! Rating > 5 ")
    }
    return (
        <div>
        {/* <div className="list"> 
            {
                props.movieListes.map((el,index)=>
                <div className="liste">   
           <p>{Rating(el.rating)}</p>
                    <img className="image" src={el.movieimage}/>
            <p>{el.moviename}</p>

                </div>

                )
            }

        </div> */}
<div className="list"> 
            {props.movieListes.filter(el=>(el.moviename.toUpperCase().includes(props.fil.toUpperCase())&&(el.rating>= props.ra))).map((el, index) => 

                <div className="liste" key={index}>   
           <p>{Rating(el.rating)}</p>
                    <img className="image" src={el.movieimage}/>
            <p>{el.moviename}</p>

                </div>

                )
            }

        </div>

        </div>
    )
}
