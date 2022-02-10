import { Button } from "@material-ui/core";

const Item = ({ id, noteData, dateData, timeData, deleteData, submitState }) => {

  const deleteItem = () => {
    submitState.current = true
    deleteData((prev) => {
        return prev.filter(item => item.id !== id)
    })
  }
  
  return (
    <div className="item">
      <div>
        <p>{noteData}</p>
        <p>{`${dateData} ${timeData}`}</p>
      </div>
      <Button variant="contained" color="secondary" className="remove" onClick={deleteItem} >
        Remove
      </Button>
    </div>
  );
};

export default Item;