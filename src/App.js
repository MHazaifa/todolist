import { useState } from 'react';
import './App.css';
import Heder from "./Components/Heder";

import TodoList from './Components/TodoList';

const App = () => {

      const dumy_list = [
        { name: 'Hit the gym', isDone : true },
        { name: 'Pay bills',  isDone : false },
        { name: 'Meet George', isDone : true},
        { name: 'Buy eggs', isDone : false},
        {name: 'Read a book', isDone : true},
        { name: 'Organize office', isDone : true}
      ]

      const [todos, setTodos] = useState(dumy_list);

     

      const delItem = (idx) =>{
       
       const  newTodos=todos.filter((val, index) => {
            return idx !== index;
        })
        setTodos(newTodos)
      }

      const completeItems =(idx)=> {
        const todoItem = [...todos]
        const element = todoItem[idx]
        if (element.isDone){
          element.isDone = false
        }
        else{
          element.isDone = true
        }
        todoItem[idx] = element
        setTodos(todoItem)
       
      }


      const additems =(name) => {
        if (name === ""){
          alert("Please enter something")
        }
        else {
          const myTodos = [...todos, {name: name ,isDone : false}];
        // todos.push({name: name , isDone : false})
        // console.log (name)
        // we have to call our state setTodos is already have previous todos so we can give any parameters to
        //setTodos and then use spread operator before this parameters in return statment
        //    setTodos ((prevTodos) => { 
        //     return [...prevTodos, {name: name , isDone : false}]
         // });
        setTodos(myTodos);
        }


      }
      


  return (
    <div>
      <Heder additems={additems}/>
      <TodoList list={todos} completeItems={completeItems} delItem={delItem}/>
    
    </div>
  );
};

export default App;
