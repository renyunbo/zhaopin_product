/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-12-23 17:14:27
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-12-23 17:50:24
 */
import React, {Component} from 'react';

import {DraggableAreasGroup} from '../Draggable';
import deleteBtn from '../imgs/delete.png';
import deleteBtn2x from '../imgs/delete@2x.png';

import './style.css';

import mock from './mock.js';

const group = new DraggableAreasGroup();
const DraggableArea1 = group.addArea();
const DraggableArea2 = group.addArea();


export default class CrossArea extends Component {
  constructor() {
    super();
    this.state = {
      leftTags: mock.leftTags,
      rightTags: mock.rightTags
    }
  }

  handleClickDelete(tag) {
    const rightTags = this.state.rightTags.filter(t => tag.id !== t.id);
    this.setState({rightTags});
  }


  render() {
    return (
      <div className="CrossArea">
        <div className="square left">
          <DraggableArea1
            tags={this.state.leftTags}
            render={({tag}) => (
              <div className="tag">
                {tag.content}
              </div>
            )}
            onChange={leftTags => {
              this.setState({leftTags});
            }}
          />
        </div>
        <div className="square right">
          <DraggableArea2
            tags={this.state.rightTags}
            render={({tag}) => (
              <div className="tag">
                <img
                  className="delete"
                  src={deleteBtn}
                  srcSet={`${deleteBtn2x} 2x`}
                  onClick={() => this.handleClickDelete(tag)}
                />
                {tag.content}
              </div>
            )}
            onChange={rightTags => {
              this.setState({rightTags});
            }}
          />
        </div>
      </div>
    );
  }
}