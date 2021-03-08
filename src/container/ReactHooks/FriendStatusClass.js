/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-03-01 17:49:00
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-03-03 10:44:02
 */
import React from 'react';

class FriendStatusClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            status:'在线'
        };
    }
    componentDidMount(){
        console.log(`开始监听 ${this.props.friendId} 的在线状态是 ${this.state.status}`);
    }
    componentWillUnmount(){
        console.log(`结束监听 ${this.props.friendId} 的在线状态是 ${this.state.status}`);
    }
    componentDidUpdate(prevProps){
        console.log(`结束监听 ${prevProps.friendId} 在线状态`);
        console.log(`开始监听 ${this.state.friendId} 在线状态`);
    }
    render(){
        return <div>
            aa
        </div>
    }
}
export default FriendStatusClass;