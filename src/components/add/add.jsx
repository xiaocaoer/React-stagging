import React,{Component} from 'react'
import { v4 as uuidv4 } from 'uuid';

export default class Add extends Component{
  add = () => {
    let {username,commentContent} =this.refs
    if(!username.value.trim()||!commentContent.value.trim()){
      alert('用户名和评论内容均不能为空')
      return
    }
    let data = {id:uuidv4(),name:username.value,content:commentContent.value}
    //更新App的状态
    this.props.addComment(data)
    //将value值清空
    username.value=''
    commentContent.value=''
  }
  render(){
    return(
      <div className="col-md-4">
      <form className="form-horizontal">
        <div className="form-group">
          <label>用户名</label>
          <input ref='username' type="text" className="form-control" placeholder="用户名"/>
        </div>
        <div className="form-group">
          <label>评论内容</label>
          <textarea ref='commentContent' className="form-control" rows="6" placeholder="评论内容"></textarea>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button onClick={this.add} type="button" className="btn btn-default pull-right">提交</button>
          </div>
        </div>
      </form>
    </div>
    )
  }
}
