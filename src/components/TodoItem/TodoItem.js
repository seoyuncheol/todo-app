import React, { Component } from "react";
import "./TodoItem.scss";
import cx from "classnames";

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.done !== nextProps.done;
  }

  render() {
    const { done, children, onToggle, onRemove } = this.props;
    return (
      <div className="TodoItem" onClick={onToggle}>
        <input className="tick" type="checkbox" checked={done} readOnly />
        <div className={cx("text", { done })}>{children}</div>
        <div
          className="delete"
          onClick={e => {
            onRemove();
            e.stopPropagation();
          }}
        >
          [지우기]
        </div>
      </div>
    );
  }
}

export default TodoItem;
