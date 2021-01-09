/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-12-22 15:04:18
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-12-23 11:03:58
 */
import React, { useState } from "react";
import { faTrashAlt, faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

function Item(props) {
  const { item, ...restProps } = props;
  return (
    <div {...restProps}>
      <p className="title">{item.title || "标题"}</p>
      <ul className="oper-list">
        <li className="oper-item icon-move">
          <FontAwesomeIcon icon={faArrowsAlt} />
        </li>
        <li className="oper-item">
          <FontAwesomeIcon icon={faTrashAlt} />
        </li>
      </ul>
    </div>
  );
}

function List(props) {
  let { list: propsList, activeItem } = props;
  propsList = propsList.map(item => {
    const isActive = activeItem.id === item.id;
    item = isActive ? activeItem : item;
    item.active = isActive;
    return item;
  });
  const [list, setList] = useState(propsList);
  const find = id => {
    const item = list.find(c => `${c.id}` === id);
    return {
      item,
      index: list.indexOf(item)
    };
  };
  const onClick = event => {
    const { id } = event.currentTarget;
    const { item } = find(id);
    props.onClick(item);
  };

  return (
    <ul className="list">
      {list.map((item, index) => (
        <li
          className={classnames("item", { active: item.active })}
          key={item.id}
        >
          <div className="index">{index + 1}</div>
          <Item
            className="info"
            id={`${item.id}`}
            item={item}
            onClick={onClick}
          />
        </li>
      ))}
    </ul>
  );
}

export default List;
