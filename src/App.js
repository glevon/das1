import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      name:"Ani",
      names:["Ani","Lianna","Artur"],
      cars:[
        {
        model:"BMW",
        price:30000,
        color: "orange"
        },
        {
        model:"Audi",
        price:25000,
        color: "blue"
        },
        {
        model:"Mers",
        price:40000,
        color: "red"
        },
      
      ],
    count:0,

    }
  }
  F(name){
    console.log("barev "+name)
  }
  add(){
    this.state.count++
    this.setState({})
  }
  delete(x){
    console.log(x)
    this.state.cars.splice(x,1)
    this.setState({})
  }
  render(){
    return (
      <div className="main_div" style={{border:"2px solid green",borderRadius:"15px"}}>
        <h1>Barev {this.state.name} </h1>     
        <p>ok</p>
        <ul>
          {this.state.names.map((a,i)=>(
            <div key={i}>
              <li>{a},{i}</li>
              <button class="btn btn-success" >ok</button>
            </div>
            
          ))
          }
        </ul>
        <ul>
          {
            this.state.cars.map((a,i)=>(
              <div key={i} style={{background:a.color,border:a.price>=37000?"2px solid green":"2px dashed black"}}>
                <h1>{a.model}</h1>
                <h5>{a.price}</h5>
                <button onClick={this.delete.bind(this,i)} >delete</button>
              </div>
            ))
          }
          <button onClick ={this.F.bind(this,"Levon")} > ok </button>
          <button onClick={this.add.bind(this)} style = {{ background:this.state.count > 10?"red":""}} className={this.state.count>10?"but":""} >add count</button>
        <h4>Count:{this.state.count}</h4>
        </ul>
      </div>
    );
  }

}

export default App;
