import React from 'react';
import style from './Title.css';

class Title extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const dataNumber = this.props.dataNumber
        return (
            <div className={style.TodoTitle}>
                <h1>Tytuł aplikacji Todo list</h1>
                <p>Liczba dodanych zadań {dataNumber.length}</p>
            </div>
        )
    }
}

export default Title;