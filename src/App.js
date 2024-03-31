import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {

  let count = useSelector(state=>state.count);
  let id = useSelector(state=>state.id); 
  let password = useSelector(state=>state.password); 
  let dispatch = useDispatch();

  const increase = () => {
    dispatch({type:"INCREMENT", payload:{num:5} }) //액션은 단순한 오브젝트인데 그냥 룰이있다.// type는 액션의 이름 //payload는 선택사항 함수에 필요한 정보를 보내줄수있다.
  }

  const decrease = () => {
    dispatch({type:"DECREMENT", payload:{num:1} }) //액션은 단순한 오브젝트인데 그냥 룰이있다.// type는 액션의 이름 //payload는 선택사항 함수에 필요한 정보를 보내줄수있다.
  }

  const login = () => {
    dispatch({type:"LOGIN", payload:{id:"noona", password:"123"} })  
  }

  return (
    <div>
      <h1>{id},{password}</h1>  
      <h1>{count}</h1>  
      <button onClick={increase}>증가!</button>
      <button onClick={decrease}>감소!</button>
      <button onClick={login}>login</button>
      <Box />
    </div>
  );
}

export default App;
