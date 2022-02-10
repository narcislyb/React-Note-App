import React from "react";
import { Button, Grid } from '@material-ui/core'

const Notes = ({modifyNote, editMode, clearState, updateId}) => {
           return (
            <Grid container spacing={2}>
            <Grid item>
            <Button
              variant="contained"
              color="primary"
              className="add"
              onClick={() => modifyNote(updateId)}
            >
              {editMode? 'UPDATE': 'ADD'}
            </Button>
            </Grid>
            <Grid item>
            {editMode? 
              <Button
              variant="contained"
              color="secondary"
              className="cancel"
              onClick={clearState}
              >
              CANCEL
          </Button> : null}
          </Grid>
          </Grid>
   );
   }

   export default Notes