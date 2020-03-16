import React, { Component } from 'react';
import Add from './components/add/add'
import Comment from './components/comment/comment'

export default class App extends Component {
  state = {
    comments:[
      {id:'003',name:'小梅',content:'自律成就自由'},
  ]
  }
  changeState = (data) => {
    //获取原状态
    let {comments} = this.state
    //更改状态
    comments.unshift(data)
    //将更改后的状态设置回去
    this.setState({comments})
  }
  deleteComment = (id) => {
    //排除是这个id的对象，使用数组filter方法
    // let comments = this.state.comments.filter((commentObj) => {
    //   return commentObj.id !==id
    // })
    //方法二：使用数组findIndex方法,这里得到的是id是参数id的数组元素的下标，要删除该下标的数组元素
    let result =  this.state.comments.findIndex((commentObj) => {
      return commentObj.id = id
    })
    let {comments} = this.state
    // comments[result] = undefined.删除数组中为某下标的元素不能这么写，这个只是让这一项的值变为undefined，
    //正常的删除还要让后面的元素往前移动
    //知道下标，采用数组方法splice(删除起始位置，删几位)
    comments.splice(result,1)
    this.setState({comments})
  }

  //删除对象中的某个属性，delete obj.name
  //删除数组中某下标的元素,arr.splice(删除起始位置，删除位数)，影响原数组

  render() {
    let {comments} = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add  changeState={this.changeState} />
          <Comment comments={comments} deleteComment={this.deleteComment} />
        </div>
      </div>
    )
  }
}
