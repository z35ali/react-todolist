import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className='list-group'>
        <h3 className='text-capitalize text-center my-3'>list</h3>
        <div className='card card-body'>
          {items.map(item => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}

          <button
            type='button'
            className='btn btn-danger btn-block text-capitalize mt-5'
            onClick={clearList}
          >
            clear list
          </button>
        </div>
      </ul>
    );
  }
}
