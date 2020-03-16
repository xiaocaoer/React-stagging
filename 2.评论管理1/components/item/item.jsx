import React, { Component } from 'react'
import './item.css'

export default class Item extends Component {
  //删除功能
  //1.询问用户是否删除
  //2.获取删除项的id
  //3.删除,更新状态
  delete = (id) => {
  //  let a = prompt('请输入您的姓名','小草儿')
   let result = window.confirm('您确定要删除该评论吗?')
    if(!result){
      return
    }
    this.props.deleteComment(id)
  }
  render() {
    let { id,name,content} = this.props
    console.log(this.props)
    return (
      <li className="list-group-item">
        <div className="handle">
          <a onClick={() => {this.delete(id)}} href="#1">删除</a>
        </div>
        <p className="user"><span > {name} </span><span>说:</span></p>
        <p className="centence">{content} </p>
      </li>
    )
  }
}