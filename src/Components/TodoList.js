import Listitem from "./Listitem";

function TodoList(props) {
    const {list, delItem} = props;
    
    return (
        <div>
            <ul id="myUL">
                {list.map((list, key) => <Listitem key={key} idx={key} list={list} delItem={delItem}/> )}
             
            </ul>
        </div>
    )
}

export default TodoList
