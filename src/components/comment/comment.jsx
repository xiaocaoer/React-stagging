import React, { Component } from 'react'
import Item from '../item/item'
import './comment.css'

export default class Comment extends Component {
  render() {
    let {comments} = this.props
    // console.log( this.props)
    //根据comments数组的长度生成相对应数目的Item组件,而数组有多长，
    //map的回调就会自动走多少次，最终的返回结果是这些回调每次返回结果的组合，
    //这个里回调每次都会返回以这个Item 组件

    //生成组件了，需要给组件标签属性，让其组件内容渲染到页面上
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{ display: 'none' }}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {comments.map((commentObj) => {
            return <Item key={commentObj.id} name={commentObj.name} content={commentObj.content} />
          })}
        </ul>
      </div>
    )
  }
}