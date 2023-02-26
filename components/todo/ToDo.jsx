"use client";



import React, { useState } from "react";
import TodoList from "./todoList";
// import { Input, Button } from '@chakra-ui/react';
// import 'styles/globals.css';


const Todo = () => {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value)
    };
    const listOfItems = () => {
        
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList('')
    };

    const deleteItems = (id) => {
       

        setItems((oldItems)=>{
            return oldItems.filter((arrElem, index)=>{
return index !== id;
            });
        });
    };


    return (
        <>
            <div className="main_div">

                <div className="center_div">
                    <br />
                    <h1>Todo-List </h1>
                    <br />

                    <input type="text"
                        placeholder="Add a item"
                        value={inputList}
                        onChange={itemEvent} />
                    <br />

                    <button onClick={listOfItems} > + </button>
                    <ol>
                        { }

                        {Items.map((itemval, index) => {
                            return <TodoList
                                key={index}
                                id={index}
                                text={itemval}
                                onSelect={deleteItems} />;

                        })}

                    </ol>

                </div>

            </div>

        </>

    );
};

export default Todo;