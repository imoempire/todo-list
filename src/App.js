import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      newItem: '',
      list: []
    }
  }

  
  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
 
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div className="App">
        <h1>Add Item...</h1><br />
        <input type="text" value={this.state.newItem} 
        onChange={e => this.updateInput("newItem", e.target.value)} />
        <button onClick={() => this.addItem()}>Add</button>
        <br />
        <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    <big>x</big>
                  </button>
                </li>
              );
            })}
          </ul>
      </div>
    )
  }
}
