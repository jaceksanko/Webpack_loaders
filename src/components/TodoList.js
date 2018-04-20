import React from 'react';
import style from './TodoList.css';
import Todo from '../components/Todo';

class TodoList extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        let liList = this.props.data.map((li) => {
            return <Todo id={li.id} remove={this.props.remove} text={li.text}/>
        })
        
        return (
            <div className={style.todolist}>
                <h1>To do list</h1>
                <ul >
                    {liList} 

                </ul>
            </div>
        )
    }
}

export default TodoList;