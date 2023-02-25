import React from "react";
import checkRadioIcon from '../../assets/icons/check_radio.png';
import unCheckRadioIcon from '../../assets/icons/uncheck_radio.png';
import { todoStatus } from '../../constants';
import { Avatar, List } from 'antd';
import clsx from 'clsx';
import styles from './todoitem.module.css';

const TodoItem = ({ todos, onDeleteTodo}) => {

	const handleDeleteTodo = (id) => {
		onDeleteTodo(id);
	}
	
  return (
    <div>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item
            actions={[
              <a key="list-loadmore-edit">edit</a>,
              <a onClick={() => handleDeleteTodo(todo.id)} key="list-loadmore-more">delete</a>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={
                    todo.status === todoStatus.COMPLETED
                      ? checkRadioIcon
                      : unCheckRadioIcon
                  }
                />
              }
              title={
                <span
                  className={clsx(styles.todoItemTitle, {
                    [styles.completed]: todo.status === todoStatus.COMPLETED,
                  })}
                >
                  {todo.title}
                </span>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoItem;
