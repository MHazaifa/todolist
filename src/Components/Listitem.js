const Listitem = (props) => {
  const {list, idx , delItem } = props; 
  
  return (
    <div>
      
      <li className={list.isDone? 'checked' : ''}>{list.name}
      <span className="close" onClick={()=> delItem(idx)}>x</span>
      </li>
      
    </div>
  );
};

export default Listitem;
