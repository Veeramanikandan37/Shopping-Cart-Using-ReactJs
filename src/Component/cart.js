import React,{useState,useReducer} from 'react';
import Straberry from './assets/staraberry.jpg';
import Apple from './assets/apple.jpg';
import Orange from './assets/orange.jpg';
import Watermelon from './assets/watermelon.jpg';
import Pineapple from './assets/pineapple.jpg';

const initialState1 = {count:0};
const initialState2 = {count:0};
const initialState3 = {count:0};
const initialState4 = {count:0};
const initialState5 = {count:0}; 

function Purchase(state,action){
    switch(action.category){
        case "Increament":
            return {count:state.count+1};
        case "Decreament":
            return {count:state.count-1>=0?state.count-1:0};
        case "Reset":
            return {count:0};
            
    }
}

function Purchases(){
    function zero(){
        return(
            dispatch1({category:'Reset'}),
            dispatch2({category:'Reset'}),
            dispatch3({category:'Reset'}),
            dispatch4({category:'Reset'}),
            dispatch5({category:'Reset'})
        
        );
    }
    const [state1,dispatch1]=useReducer(Purchase,initialState1);
    const [state2,dispatch2]=useReducer(Purchase,initialState2);
    const [state3,dispatch3]=useReducer(Purchase,initialState3);
    const [state4,dispatch4]=useReducer(Purchase,initialState4);
    const [state5,dispatch5]=useReducer(Purchase,initialState5);
    return(
        <div className='Cart'>
     <div>
        <img src={Straberry}></img>
        <p>Straberry:{state1.count}</p>
        <button onClick={()=>dispatch1({category:'Increament'})}>Add</button>
        <button onClick={()=>dispatch1({category:'Decreament'})}>Remove</button>
        <button onClick={()=>dispatch1({category:'Reset'})}>Reset</button>
     </div>
     <div>
     <img src={Apple}></img>
     <p>Apple:{state2.count}</p>
     <button onClick={()=>dispatch2({category:'Increament'})}>Add</button>
     <button onClick={()=>dispatch2({category:'Decreament'})}>Remove</button>
     <button onClick={()=>dispatch2({category:'Reset'})}>Reset</button>
  </div>
  <div>
  <img src={Orange}></img>
     <p>Orange:{state3.count}</p>
     <button onClick={()=>dispatch3({category:'Increament'})}>Add</button>
     <button onClick={()=>dispatch3({category:'Decreament'})}>Remove</button>
     <button onClick={()=>dispatch3({category:'Reset'})}>Reset</button>
  </div>
  <div>
  <img src={Watermelon}></img>
     <p>Watermelon:{state4.count}</p>
     <button onClick={()=>dispatch4({category:'Increament'})}>Add</button>
     <button onClick={()=>dispatch4({category:'Decreament'})}>Remove</button>
     <button onClick={()=>dispatch4({category:'Reset'})}>Reset</button>
  </div>
  <div>
  <img src={Pineapple}></img>
     <p>Pineapple:{state5.count}</p>
     <button onClick={()=>dispatch5({category:'Increament'})}>Add</button>
     <button onClick={()=>dispatch5({category:'Decreament'})}>Remove</button>
     <button onClick={()=>dispatch5({category:'Reset'})}>Reset</button>
  </div>
  <div>
  <p>Straberrys:{state1.count}</p>
  <p>Apples:{state2.count}</p>
  <p>Oranges:{state3.count}</p>
  <p>Watermelons:{state4.count}</p>
  <p>Pineapples:{state5.count}</p>
   <p className='totalcount'>Total Fruits:{state1.count+ state2.count+ state3.count+ state4.count+ state5.count}</p>
   <button onClick={zero}>Reset All</button>
   </div>
  </div>
    )
}

export default Purchases;