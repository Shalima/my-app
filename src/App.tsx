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
      <br/>
      <div><b><i><u>Other resources</u></i></b></div>
      <br/>
      <div><a href="https://www.youthkiawaaz.com/2021/04/donate-covid-india">https://www.youthkiawaaz.com/2021/04/donate-covid-india</a></div>
      <div><a href="https://www.indianlink.com.au/covid-19/where-to-donate-for-covid-relief-in-india/">https://www.indianlink.com.au/covid-19/where-to-donate-for-covid-relief-in-india/</a></div>
      <div><a href="https://www.nytimes.com/article/india-covid-how-to-help.html">https://www.nytimes.com/article/india-covid-how-to-help.html</a></div>
      <div><a href="https://indiacovidresources.wordpress.com/blog/">https://indiacovidresources.wordpress.com/blog/</a></div>
      <div><a href="https://community.nasscom.in/communities/COVID-19/india-wide-covid-19-resources">https://community.nasscom.in/communities/COVID-19/india-wide-covid-19-resources</a></div>
    </div>
  )
}

export default App;