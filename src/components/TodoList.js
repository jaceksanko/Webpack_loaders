import React from 'react';
import style from './TodoList.css';


class TodoList extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        let liList = this.props.data.map((li) => {
            return <li  key={li.id}>
                    <p>{li.id}. {li.text}</p>
                    <button onClick={() => this.props.remove(li.id)}>X</button>
                </li>
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