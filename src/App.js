import React from 'react';
import Login from './components/login/login'
import './App.css'

export default class App extends React.Component{
  render(){
    return(
      <div>      
        <h2 className="title">第一个APP组件登录信息</h2>
        <Login/>
      </div>
    )
  }
}
