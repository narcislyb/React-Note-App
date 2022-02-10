import { Button } from "@material-ui/core";
import { useState } from "react";
import { v4 } from 'uuid';

const Edit = ({ add, submitState }) => {
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const noteChange = (e) => {
    setNote(e.target.value);
  };

  const dateChange = (e) => {
    setDate(e.target.value);
  };

  const timeChange = (e) => {
    setTime(e.target.value);
  };

  // console.log(note,date,time)

  const addItem = () => {
    submitState.current = true
    add((prevData) => {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prevData,
      ];
    });
    // add(function(prevData) {
    //     return [...prevData, {
    //         note,
    //         date,
    //         time
    //     }]
    // })
  };

  return (
    <div>
      <h1>Note</h1>
      <p>Title: </p>
      <input type="text" value={note} onChange={noteChange} />
      <p>Date: </p>
      <input type="date" value={date} onChange={dateChange} />
      <p>Time: </p>
      <input type="time" value={time} onChange={timeChange} />
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        className="add"
        onClick={addItem}
      >
        ADD
      </Button>
    </div>
  );
};

export default Edit;
