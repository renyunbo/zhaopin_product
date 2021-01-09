/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-12-22 15:01:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-12-22 16:24:45
 */
import React, { useState } from "react";
import ReactDOM from "react-dom";
// import List from "./List";
import List from "./DndList";

import "./styles.css";

const defaultList = [
  { id: 1, title: "item1" },
  { id: 2, title: "item2" },
  { id: 3, title: "item3" },
  { id: 4, title: "item4" },
  { id: 5, title: "item5" }
];

function DragOrder() {
  const [list, setList] = useState(defaultList);
  const [activeItem, setActiveItem] = useState(list[0]);
  const onDropEnd = (list, fromIndex, toIndex) => {
    setList([...list]);
  };
  const onDelete = list => {
    setList([...list]);
  };
  const onClick = item => {
    if (item.id !== activeItem.id) {
      setActiveItem(item);
    }
  };
  return (
    <div className="list-wrap">
      <List
        list={list}
        activeItem={activeItem}
        onDropEnd={onDropEnd}
        onDelete={onDelete}
        onClick={onClick}
      />
    </div>
  );
}

export default DragOrder;