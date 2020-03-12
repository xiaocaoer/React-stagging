import React,{Component}from 'react'
// 这李表示react中使用默认暴露的方式暴露了React，分别暴露或者统一暴露的方式暴露了Component，因为其接受的时候用了花括号
import './login.css'

export default class Login extends Component{
  render(){
    return(
      <div className="new">
      用户名：<input type = "text"/><br/>
      密&nbsp;&nbsp;&nbsp;码：<input type = "password"/><br/>
      <input type="submit"/>
      </div>
    )
  }
}