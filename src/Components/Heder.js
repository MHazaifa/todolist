import Additems from "./Additems";

const Heder = (Props) => {
  
  const itemValue =(value) => {
    Props.additems(value);

  }
  return (
    <>
      <div id="myDIV" className="header">
         <h2 style={{ margin: "5px" }}>My To Do List</h2>
        <Additems getItem={itemValue} />
      </div>
    </>
  );
};

export default Heder;
