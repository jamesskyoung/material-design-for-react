import React from 'react';
import MUIBase from '../lib/MUIBase';
import Colourizer from '../lib/Colourizer';
import Grid from '../lib/Grid';
import Slider from '../lib/Slider';
import Typography from '../lib/Typography';


// Examples
import MainHeader from '../app/MainHeader.jsx';

class LayoutEx extends MUIBase {
  constructor(props) {
    super(props);
    this.state = {

    }

  }


  colourize(element) {
    return Colourizer.colourize(element);
  }


  componentDidMount() {
    this.injectMui().then(() => {

    }).catch((err) => {
      alert('injection error ' + err);
    });
  }


  render() {
    let cell = { background: 'var(--mdc-theme-secondary)', border: '4px solid var(--mdc-theme-primary)', height: '64px' };

    return (
      <div className="mdc-typography">
        <MainHeader />
        <p>
        <Typography font='display1'>Span 1 x 12</Typography>
        </p>
        <Grid>


          <div style={cell} span='1'></div><div style={cell} span='1'></div><div style={cell} span='1'></div>
          <div style={cell} span='1'></div><div style={cell} span='1'></div><div style={cell} span='1'></div>
          <div style={cell} span='1'></div><div style={cell} span='1'></div><div style={cell} span='1'></div>
          <div style={cell} span='1'></div><div style={cell} span='1'></div><div style={cell} span='1'></div>
        </Grid>
        <p>
        <Typography font='display1'>Span 4 x 3 Grid</Typography>
        </p>
        <Grid>
          <div style={cell} span='3'></div><div style={cell} span='3'></div>
          <div style={cell} span='3'></div><div style={cell} span='3'></div>
        </Grid>

        <p>
        <Typography font='display1'>Span 10, Span 2</Typography>
        </p>
        <Grid>
          <div style={cell} span='10'></div><div style={cell} span='2'></div>
        </Grid>

      <p>
        <Typography font='display1'>Span 1, Span 10, Span 1</Typography>
        </p>
        <Grid>
          <div style={cell} span='1'></div><div style={cell} span='10'></div><div style={cell} span='1'></div>
        </Grid>


      </div >

    )
  }

}

export default LayoutEx;