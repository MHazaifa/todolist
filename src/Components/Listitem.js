const Listitem = (props) => {
  const {list, idx , delItem, completeItems} = props; 
  
  return (
    <div>
      
      <li className={list.isDone? 'checked' : ''} onClick={() => completeItems(idx)}>{list.name}
      <span className="close" onClick={()=> delItem(idx)}>x</span>
      </li>
      
    </div>
  );
};

export default Listitem;
