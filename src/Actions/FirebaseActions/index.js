import { NotesDataReference } from "../../firebaseConfig";
import SettingsPage from "../../pages/SettingsPage";

const FirebaseActions = {

    // fetchNotes() {
    //             /*
    //                 .on( (snapshot) => {})  = listen to this node 24/7 wirth a callback function
    //                 .once()
    //      */
    //                 NotesDataReference.on('value',(snapshot)=>{
    //                     let noteList = [];
    //                     // snapshot.forEach(data => {
    //                     //     noteList.push(data.val());
    //                     // });
    //                     // console.log('snapshot.val()', snapshot.val())
            
    //                     snapshot.forEach((value)=>{
    //                         noteList.push({...value.val(), id:value.key})
    //                     })
    //                     // console.log(noteList);
    //                     SettingsPage.setNoteList(noteList);
            
    //                     // const tempNoteValue = Object.values(snapshot.val())
    //                     // setNote(snapshot.val());
                        
    //                 })
            
    //                /* UsersDataReference.child('2000').once('value').then((snapshot)=>{
    //                     console.log(snapshot.val());
    //                     setUser(snapshot.val())
    //                 })*/
                
    // },

    createNewNotes(note, date, time) {
        let newID = NotesDataReference.push().key;
        NotesDataReference.child(newID).set({
            note: note,
            date: date,
            time: time
    })
    },

    updateNotes(id, note, date, time) {
        NotesDataReference.child(id).update({
            note: note,
            date: date,
            time: time
        })
        
    },

    deleteNotes(id) {
        NotesDataReference.child(id).remove()
    }
}

export default FirebaseActions
