import Item from "../Item";

// const arr =["item1","item2","item3"]

const List = ({ listData, deleteData, submitState }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            noteData={note}
            dateData={date}
            timeData={time}      
            deleteData={deleteData}
            submitState={submitState}
          />
        );
      })}
    </div>
  );
};

export default List;
