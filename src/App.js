

import React, { Component } from 'react'
import Movieliste from './composant/Movieliste';
import Buttonadd from './composantbtn/Buttonadd'

import './App.css';
import Searchname from './rechercherate/Searchname';
import Search from './recherche/Search';


export default class App extends Component {
  state={filters:"",
  rate:0,
    movie:[
    {   movieimage:"https://doostihaa.com/img/uploads/2013/12/The-Lion-King-1994.jpg",
       moviename:"Sinba",
     rating:5},
     {  movieimage:"https://i.pinimg.com/236x/aa/58/d6/aa58d691a7d4e5c196dbb994b2584198--tom-and-jerry-jerry-oconnell.jpg",
       moviename:"Tom&&Jerry",
       rating:4},
   
     {  movieimage:"https://mashamichka.fr/upload/resize_cache/iblock/b02/560_315_2/_rrwi7jxoc.jpg",
       moviename:"Macha",
       rating:3}
   ],show:false}
  
   addmovie=(movieimagee,movienamee,ratinge)=>{
    this.setState({
      movie:[...this.state.movie,{movieimage:movieimagee, moviename: movienamee,rating:ratinge}]
    })

  }
  hideModal = () => {
    this.setState({
      show: false
    });
  };

  showModal = () => {
    this.setState({
      show: true
    });
  };

  HandlehangeSearch = (serached) => {
    this.setState({ filters: serached.target.value });
  };
  Handlehangerate=(rated)=>{
    this.setState({ rate:rated})
  }
  render() {
    return (
      <div className="tot">
<div className="search">
          <Search searchra={this.Handlehangerate} 
                      rate={this.state.rate}
                      />
          <Searchname HandlehangeSearch={this.HandlehangeSearch}/>
</div>

      <div>
        
        <Movieliste movieListes={this.state.movie} fil={this.state.filters} ra={this.state.rate}/>
        <button className="addButt" onClick={this.showModal}>+</button>
        <Buttonadd addmo={this.addmovie} show={this.state.show} hide={this.hideModal}/>
      </div>
      </div>

    )
  }
}

