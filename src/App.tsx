import React from 'react';
import logo from './logo.svg';
import sdmlogo from './sdmlogo.jpeg'
import './App.css';
import Demo from './components/Sources';
import { Grid } from '@material-ui/core';
function App(){
  return (
    <div>
      <Grid container direction="column" alignItems='center'>
      <Grid>
        <img src={sdmlogo} alt="San Diego Malayalees" height={100} width={300}></img>
      </Grid>
      <br/>
      <Grid>
        <a href="https://www.sandiegomalayalees.com/">Go to Home Page</a>
      </Grid>
      <br/>
      <Grid>
        <Demo />
      </Grid>
      <br/>
      <div><b><i><u>Other resources</u></i></b></div>
      <br/>
      <div><a href="https://www.youthkiawaaz.com/2021/04/donate-covid-india">https://www.youthkiawaaz.com/2021/04/donate-covid-india</a></div>
      <div><a href="https://www.indianlink.com.au/covid-19/where-to-donate-for-covid-relief-in-india/">https://www.indianlink.com.au/covid-19/where-to-donate-for-covid-relief-in-india/</a></div>
      <div><a href="https://www.nytimes.com/article/india-covid-how-to-help.html">https://www.nytimes.com/article/india-covid-how-to-help.html</a></div>
      <div><a href="https://indiacovidresources.wordpress.com/blog/">https://indiacovidresources.wordpress.com/blog/</a></div>
      <div><a href="https://community.nasscom.in/communities/COVID-19/india-wide-covid-19-resources">https://community.nasscom.in/communities/COVID-19/india-wide-covid-19-resources</a></div>
      <br/>
      <Grid>
        <div><b>Disclaimer</b></div>
        <div>SDM or its board members are not directly involved or have any liability in any of the above organizations or fund raisers.</div>
        <div>SDM or its board members does not favor any of the above efforts and is up to the donor to choose the beneficiary.</div>
      </Grid>
      </Grid>
    </div>
  )
}

export default App;