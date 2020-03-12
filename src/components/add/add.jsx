import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
//as这里是将v4改名为uuidv4的意思
// 使用方法 uuidv4()


export default class Add extends Component {
  //增加评论。点击按钮，获取输入的value，加入到App组件的state属性中
  add = () => {
    //1.获取输入节点value
    let {usernameNode,commentNode} = this.refs
    //2.数据校验，不能为空等
    if(!usernameNode.value.trim()|| !commentNode.value.trim()){
      alert('用户名和评论信息均不能为空')
      return
    }
    //3.更新APP的state
    let {changeState} = this.props
    // console.log(commentNode.value,usernameNode.value)
    changeState({id:uuidv4(),name:usernameNode.value,content:commentNode.value})
    //4.清空输入
    usernameNode.value = ''
    commentNode.value = ''
  }
  render() {
    console.log(this.props)
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input ref='usernameNode' type="text" className="form-control" placeholder="用户名" />
        </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea  ref='commentNode' className="form-control" rows="6" placeholder="评论内容"></textarea>
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
