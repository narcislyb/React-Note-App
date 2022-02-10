import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'

const RenderNoteList = ({noteList, changeToEditMode, deleteNote}) => {
  // console.log(changeToEditMode)
    return noteList.map((eachNote) => {
           return (
           <div key={eachNote.id}>
           <br/>
           <li> 
           Note ID: {eachNote.id}
           <br/>
           Note: {eachNote.note}
           <br/>
           Time: {eachNote.date} {eachNote.time}
           </li>
           <div>
           <Grid container spacing={2}>
               <Grid item>
                   <Button variant="contained" color="primary" className="update" onClick={() => changeToEditMode(eachNote)}>
                     Edit
                   </Button>
               </Grid>
               <Grid item>
                   <Button variant="contained" color="secondary" className="remove"  onClick={() => deleteNote(eachNote.id)}>
                     Remove
               </Button>
               </Grid> 
           </Grid>
           </div>
           </div>
           )}
   );
   }

   export default RenderNoteList