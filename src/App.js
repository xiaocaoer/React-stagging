import React,{Component} from 'react'
import Comment from './components/comment/comment'
import Add from './components/add/add'

export default class App extends Component{
  state = {
    comments:[
      {id:'001',name:'张三',content:'好难啊，不想爱了'},
      {id:'002',name:'小妹',content:'了'},
      {id:'003',name:'小孩',content:'爱了'},
    ]
  }
  addComment = (data) => {
    // 获取原状态
    let {comments} =  this.state
    comments.unshift(data)
    this.setState({comments})
  }
  deleteComment = (id) => {
    let {comments} = this.state
    comments = comments.filter((commentObj) => {
      return commentObj.id !== id
    })
    this.setState({comments})
  }
  render(){
    return(
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
          <Add addComment={this.addComment} />
          <Comment comments={this.state.comments} deleteComment={this.deleteComment} />
        </div>
     </div>
    )
    
  }
}