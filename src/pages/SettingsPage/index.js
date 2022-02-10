import React from "react";
import { useState, useEffect, useRef } from "react";
import firebase from "firebase";
import { NotesDataReference } from "../../firebaseConfig";
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import RenderNoteList from "../../components/RenderNoteList";
import Notes from "../../components/Notes";
import FirebaseActions from "../../Actions/FirebaseActions"

const SettingsPage = () => {
    
    const [note, setNote] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    
    const [updateId, setUpdateId] = useState(null);
    const [noteList, setNoteList] = useState([]);
    const [editNoteId, setEditNoteId] = useState('')
    const [editMode, setEditMode] = useState(false)
    
    const noteChange = (e) => {
        setNote(e.target.value);
      };
    
      const dateChange = (e) => {
        setDate(e.target.value);
      };
    
      const timeChange = (e) => {
        setTime(e.target.value);
      };

    const onClearState = () => {
        setNote('')
        setDate('')
        setTime('')
        setEditMode(false)
    }

    const onModifyNote = (editNoteId) =>{
        if(editMode){
            FirebaseActions.updateNotes(editNoteId,note,date,time)
            onClearState()
        }else{
            FirebaseActions.createNewNotes(note, date, time)
            onClearState()
    }

    }
    const onDeleteNote = (id) => {
        FirebaseActions.deleteNotes(id)
    }

    const onChangeToEditMode= (params)=>{
        setEditMode(true)
        setUpdateId(params.id)
        setNote(params.note)
        setDate(params.date)
        setTime(params.time)
    }

    useEffect(() => {
        /*
                    .on( (snapshot) => {})  = listen to this node 24/7 wirth a callback function
                    .once()
         */
        NotesDataReference.on('value',(snapshot)=>{
            let noteList = [];
            // snapshot.forEach(data => {
            //     noteList.push(data.val());
            // });
            // console.log('snapshot.val()', snapshot.val())

            snapshot.forEach((value)=>{
                noteList.push({...value.val(), id:value.key})
            })
            setNoteList(noteList);

            // const tempNoteValue = Object.values(snapshot.val())
            
        })
        

       /* UsersDataReference.child('2000').once('value').then((snapshot)=>{
            console.log(snapshot.val());
            setUser(snapshot.val())
        })*/
    },[]);

    return (
    <>
          <h1>Note</h1>
          <p>Title: </p>
          <input type="text" value={note} onChange={noteChange} />
          <p>Date: </p>
          <input type="date" value={date} onChange={dateChange} />
          <p>Time: </p>
          <input type="time" value={time} onChange={timeChange} />
          <br />
          <br />
        <Notes editMode={editMode} updateId={updateId} modifyNote={onModifyNote} clearState={onClearState} />
        <RenderNoteList noteList={noteList} changeToEditMode={onChangeToEditMode} deleteNote={onDeleteNote} />
    </>
)
    
}


export default SettingsPage;

