import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from 'store/modules/todo';

const TodoItem = ({ id, text, checked, onToggle, onRemove }) => {
  const style = {
    textDecoration: checked ? 'line-through' : 'none'
  };
  return (
    <li
      style={style}
      onClick={() => onToggle(id)}
      onDoubleClick={() => onRemove(id)}
    >
      {text}
    </li>
  );
}

class Todo extends Component {
  handleChange = (e) => {
    const { TodoActions } = this.props;
    TodoActions.changeInput(e.target.value);
  }
  handleInsert = () => {
    const { input, TodoActions } = this.props;
    TodoActions.insert(input);
    TodoActions.changeInput('');
  }
  handleToggle = (id) => {
    const { TodoActions } = this.props;
    TodoActions.toggle(id);
  }
  handleRemove = (id) => {
    const { TodoActions } = this.props;
    TodoActions.remove(id);
  }
  render() {
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;
    const { todos, input } = this.props;
    const todoItems = todos.map(
      todo => {
        const { id, checked, text } = todo.toJS();
        return (
          <TodoItem
            id={id}
            checked={checked}
            text={text}
            onToggle={handleToggle}
            onRemove={handleRemove}
            key={id}
          />
        )
      }
    )
    return (
      <div>
        <h2>오늘 할 일</h2>
        <input value={input} onChange={handleChange} />
        <button onClick={handleInsert}>추가</button>
        <ul>
          { todoItems }
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    input: state.todo.get('input'),
    todos: state.todo.get('todos')
  }),
  (dispatch) => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(Todo);
