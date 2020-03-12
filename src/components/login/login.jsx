import React from 'react'
import './login.css'

export default class Login extends React.Component{
  render(){
    return(
      <div className="new">
      用户名：<input type = "text"/><br/>
      密&nbsp;&nbsp;&nbsp;码：<input type = "password"/>
      </div>
    )
  }
}