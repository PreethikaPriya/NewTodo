import React from 'react';
import TodoList from './TodoList';
import Input from './Input';
import Button from './Button';

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo_items: [ ],
            todo_item: ''
        }

        this.myChangeHandler= this.myChangeHandler.bind(this);
        this.mySubmitHandler= this.mySubmitHandler.bind(this);
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        this.setState({todo_items: [...this.state.todo_items, this.state.todo_item], todo_item: '' });
    }

    myChangeHandler = (event) => {
        this.setState({todo_item: event.target.value});
        // this.setState({todo_item: event.target.value , todo_items: [...this.state.todo_items, event.target.value]});
    }

    resetTodo = (event) => {
        this.setState({todo_item: '', todo_items: []});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.mySubmitHandler}>
                  <Input type={'text'}
                   name= {'todo_item'}
                   value={this.state.todo_item} 
                   placeholder = {'Enter To Do Item'}
                   handleChange = {this.myChangeHandler}
                   /> {/*To do item */}
                   <Button 
                   title= {'Add To Do Item'} 
                   type =  {'Submit'}
                   /> {/* Add Item */}
                   <Button 
                   title= {'Clear Todo List'} 
                   type =  {'Reset'}
                   action={this.resetTodo}
                    /> {/* Clear Todo List */}
                </form>
                <TodoList list = {this.state.todo_items}/>
            </div>
        )
    }
}

export default FormContainer;
