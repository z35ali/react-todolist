import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editedItem: false
  };

  handleChange = event => {
    this.setState({
      item: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updateItems = [...this.state.items, newItem]; // spread operator split up array into items and put in

    this.setState({
      items: updateItems,
      item: '',
      id: uuid(),
      editedItem: false
    });
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    const sortedItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: sortedItems
    });
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4'>
            <h3 className='text-capitalize text-center'>React Todo List</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}
