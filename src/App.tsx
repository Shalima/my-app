import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './components/Sources';
import { Grid } from '@material-ui/core';
function App(){
  let users = ["Shalima", "Fahad"];
  return (
    <div>
       
      <Grid>
        <div><b>Disclaimer</b></div>
        <div>SDM or its board members are not directly involved in any of the above organizations or fund raisers.</div>
        <div>SDM or its board members does not favor any of the above efforts and is up to the donor to choose the beneficiary.</div>
      </Grid>
      <br/>
      <Demo />     
    </div>
  )
}

export default App;