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
          <Comment comments={comments}/>
        </div>
      </div>
    )
  }
}
