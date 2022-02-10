import React from "react";
import { useState, useEffect, useRef } from "react";
import Edit from "../../components/Edit";
import List from "../../components/List"
import { Grid } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { FormHelperText, makeStyles } from "@material-ui/core";
import { API_GET_DATA } from "../../global/constant";
import { Box } from "@material-ui/core";
import JsondbActions from "../../Actions/JsondbActions"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import About from "../About";

import { NotesDataReference } from "../../firebaseConfig";

const useStyles = makeStyles(theme => ({
    marginAutoContainer: {
      width: 500,
      height: 60,
      display: 'flex',
      backgroundColor: 'gold',
    },
    marginAutoItem: {
      margin: 'auto'
    },
    alignItemsAndJustifyContent: {
      width: 500,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'pink',
    },
  }))
const Home = () => {
    const [data, setData] = useState([]);
    const submitState = useRef(false);
    const [notes, setNotes] = useState('');
  
    useEffect(() => {
        if (!submitState.current){
            return
        }
        JsondbActions.fetchSetData(data).then(data => submitState.current = false)
    }, [data])
  
    useEffect(() => {
      JsondbActions.fetchData(setData)}, [])

    useEffect(()=>{
      /*
                  .on( (snapshot) => {})  = listen to this node 24/7 wirth a callback function
                  .once()
        */
      NotesDataReference.on('value',(snapshot)=>{
          console.log('snapshot.val()', snapshot.val())
          setNotes(snapshot.val());
      })

      /* UsersDataReference.child('2000').once('value').then((snapshot)=>{
          console.log(snapshot.val());
          setUser(snapshot.val())
      })*/
    },[]);
  
    return (
      <Box
      display="flex" 
      width={600} height={90} 
      bgcolor="lightblue"
      m="auto"
      >
      <div>
      {/* <Route path="/" exact component={Home} /> */}
        <Edit add={setData} submitState={submitState}/>
        <List listData={data} deleteData={setData} submitState={submitState}/>
      </div>
      </Box>

  
    );
  };
  
  export default Home