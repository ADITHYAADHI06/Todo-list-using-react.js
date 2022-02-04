import React from 'react';
import { useState } from 'react/cjs/react.development';

const Todo = () => {
    const [inputData, setInputData] = useState('');


    const [items, setItems] = useState([]);

    const addItem = () => {
        if (!inputData) {

        }
        else {
            setItems([...items, inputData]);
            setInputData('')
        }

    }

    const deleteItem = (id) => {


        let newitemsList = [...items];
        newitemsList.splice(id, 1);
        setItems(newitemsList);

        //   const newItems = items.filter((index)=>{
        //      return index !== id; 
        //     })
        // setItems(newItems);    
    }


    const removeBtn = () => {
        setItems([]);
    }

    return <>

        <div className="mainDiv">
        <h1>To Do List App</h1>
        <h1></h1>
            <div className="childDiv">
                <figure>
                    <img src="./img/logo512.png" />
                    <figcaption>Add Your List Here✌️</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder="✍️ Add items..." value={inputData} onChange={(e) => { setInputData(e.target.value) }} />
                    <i className="far fas fa-plus" onClick={addItem}></i>
                </div>
                <div className="margin-top-40">
                    {items.map((curElem, index) => {
                        return (
                            <div className="showItems" key={index}>
                                <p>{curElem}</p>
                                <i className="far fas fa-trash" onClick={() => { deleteItem(index) }}></i>
                            </div>
                        );
                    })
                    }
                </div>

                <div className="removebtn">
                    <button onClick={removeBtn}>Clear All</button>
                </div>
            </div>
        </div>

    </>;
};

export default Todo

