import React, { Component } from 'react'
import Item from '../item/item'
import './comment.css'

export default class Comment extends Component {
  render() {
    let {comments,deleteComment} = this.props
    // console.log( this.props)
    //根据comments数组的长度生成相对应数目的Item组件,而数组有多长，
    //map的回调就会自动走多少次，最终的返回结果是这些回调每次返回结果的组合，
    //这个里回调每次都会返回以这个Item 组件

    //生成组件了，需要给组件标签属性，让其组件内容渲染到页面上
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{ display: comments.length ? 'none' : 'block'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {/* //注意：map方法不会对空数组进行检测，所以当下面的数组为空是下面的代码不会执行，就不会报错 */}
          {comments.map((commentObj) => {
            //这里因为commentObj中的每个属性都是要做在Item中用的到,所以使用ES8三点运算符在React中的特殊用法,解包一个对象
            return <Item key={commentObj.id} {...commentObj} deleteComment={deleteComment} />
            //...commentObj等价于写了三组标签属性:id={commentObj.id} name={commentObj.name} content={commentObj.content}
          })}
        </ul>
      </div>
    )
  }
}