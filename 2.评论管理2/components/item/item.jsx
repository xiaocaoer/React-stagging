import React,{Component} from 'react'
import './item.css'
export default class Item extends Component{
  delete = (id) => {
    //询问是否删除
    let result = window.confirm('确定删除该评论吗?')
    if(result){
      //获取删除评论的ID更新state
      // console.log(this.props.deleteComment)
    this.props.deleteComment(id)
    }

  }
  render(){
    let {id,name,content} = this.props
    return(
        <li className="list-group-item">
          <div className="handle">
            <a onClick={() => {this.delete(id)}} href="#1">删除</a>
          </div>
          <p className="user"><span >{name}</span><span>说:</span></p>
          <p className="centence">{content}</p>
        </li>
    )
    
  }
}