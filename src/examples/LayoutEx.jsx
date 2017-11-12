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
        <Grid  >
          <div span='1'></div>
          <div style={{ textAlign: 'left', borderRight: 'solid 1px lightgrey' }} span='11'>
            <Typography font='display2'>Layout Grid</Typography>
            <p>
              The Grid component offers a very flexible grid LayoutExt that is responsive.
              (Try resizing this browser and you wil see the Grid adjust
              to the size.)
            </p>
            <p>
              You can nest Grids (like this page does) to provide even more flexibility.
            </p>
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

          </div>
          <div span='1'></div>
          <div style={{ textAlign: 'left', borderRight: 'solid 1px lightgrey' }} span='11'>
            <Typography font='display1'>About &rarr; <strong>Grid</strong></Typography>
            <div style={{ marginTop: '12px' }}></div>
            <p>
              The Grid by itself does not take properties oher than id and style.
                It expects its child components (which are usually divs) to contain a span property.
                </p>
            <p>
              The Grid is based on a 12 column layout. Therefore, therefore just apportion
                the column property which represent the column space accordingly.
                </p>
            <div style={{ marginTop: '24px' }}></div>
            This page can be viewed here <a href='https://github.com/jamesskyoung/material-design-for-react/blob/master/src/examples/LayoutEx.jsx' target='_blank'>Here</a>

            <p>
              <Typography font='headline'>Code example</Typography>
            </p>

            <pre style={{
              fontFace: 'Roboto Mono, monospace', padding:
              '6px', background: '#eee',
              borderRadius: '6px'
            }}>
              <code>
                {this.colourize(
                  " <Grid>"
                  + "\n\t<div span='1'></div>"
                  + "\n\t<div span='10'></div>"
                  + "\n\t<div  span='1'></div>"
                  + "\n</Grid>")}

              </code>
            </pre>
          </div>
        </Grid>
      </div >

    )
  }

}

export default LayoutEx;