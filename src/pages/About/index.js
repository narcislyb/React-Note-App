import React from "react";
import { NotesDataReference } from "../../firebaseConfig";
import { useState, useEffect, useRef } from "react";


const About = (props) => {
    const [notes, setNotes] = useState('');
    const [newName, setCreateNewName] = useState('newName')

    useEffect(()=>{
        /*
                    .on( (snapshot) => {})  = listen to this node 24/7 wirth a callback function
                    .once()
         */
        NotesDataReference.child('notes').on('value',(snapshot)=>{
            console.log('snapshot.val()', snapshot.val())
            setNotes(snapshot.val());
        })

       /* UsersDataReference.child('2000').once('value').then((snapshot)=>{
            console.log(snapshot.val());
            setUser(snapshot.val())
        })*/
    },[]);

    const setNewNotes = (e)=> {
        const value = e.target.value;
        setNotes(value)
    }

    const updateNotes = () =>{
        NotesDataReference.child("notes").update({
            addSomething:'123'
        });
    }

    const createNotes = () =>{
        let newID = NotesDataReference.push().key;
        NotesDataReference.child(newID).set({
            firstName:newName
        });
    }

    return (
        <div>
            <h1>This is About Page</h1>
            {notes !== null? <p>Hi, {notes.notes}</p>: null}
            <button onClick={createNotes}>Create new user</button>
            {/* <input onChange={setNewNotes}/> */}
            <button onClick={updateNotes}>Update the user name</button>
        </div>
    )
}

export default About;