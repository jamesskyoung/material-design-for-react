import React from 'react';
import MUIBase from '../lib/MUIBase';
import Colourizer from '../lib/Colourizer';
import Grid from '../lib/Grid';
import RingGraph from '../lib/RingGraph';
import MainHeader from '../app/MainHeader.jsx';
import TextField from '../lib/TextField';
import Typography from '../lib/Typography';

class ChartsEx extends MUIBase {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: 0
    }

  }

  colourize(element) {
    return Colourizer.colourize(element);
  }

  componentDidMount() {

    document.body.style.backgroundColor = 'black';
    let progress = 0;
    let timer = window.setInterval(() => {
      progress++;
      console.log('progress is now: ' + progress);
      this.setState({ inputValue: progress });
      if (progress === 100) {
        window.clearInterval(timer);
        document.body.style.backgroundColor = 'white';
      }
    }, 20);


  }


  render() {

    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid style={{ display: 'flex' }}>
          <div span='1'></div>
          <div span='11'>
            <Typography font='display2'>Charts</Typography>
            <p>
              Material Design does not offer support for charts.  I will be providing (over time), some basic charts
              for use. Right now, only a ring graph is supplied.  This is good for progress,
              when a page is loading etc.
            </p>
            <Typography font='display1'>Ring Chart</Typography>
            <p>
              <TextField type='text' id='myid' placeholder='Enter number between 1-100'
                value={this.state.inputValue}
                onChange={((event) => {
                  this.setState({ inputValue: event.target.value });
                })} />
            </p>
            <p>
              <RingGraph height={300} width={300} id='p1' ringColor='lime' ringBackground='#333'
                ringTextColor='#999' value={this.state.inputValue} />
            </p>

          </div>
          <div span='1'></div>
          <div span='11'>

            <div style={{ marginTop: '12px' }}></div>
            <Typography font='display1'>Component Properties &rarr; <strong>RingGraph</strong></Typography>
            <div style={{ marginTop: '12px' }}></div>
            <Typography font='body1'>
              <p>
                When updating the ring graph, always do it in the <code>componentDidMount</code> lifecycle method.
              </p>

              <table cellSpacing={10} style={{ width: '75%', borderSpacing: '0px', padding: '6px' }}>
                <thead style={{ textAlign: 'left', padding: '6px' }}>
                  <tr >
                    <th style={{ borderBottom: '1px solid #eee' }}>Name</th>
                    <th style={{ borderBottom: '1px solid #eee' }}>Type</th>
                    <th style={{ borderBottom: '1px solid #eee' }}>Default</th>
                    <th style={{ borderBottom: '1px solid #eee' }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr ><td>id</td><td>int</td><td>none</td><td>The ID for this RingGraph</td></tr>
                  <tr ><td>height</td><td>int</td><td>300</td><td>Height of the chart in pixels</td></tr>
                  <tr ><td>width</td><td>int</td><td>300</td><td>Width of the chart in pixels</td></tr>
                  <tr ><td>ringBackground</td><td>HTML Color</td><td>Theme secondary color</td><td>The color of the outer ring</td></tr>
                  <tr ><td>ringColor</td><td>HTML Color</td><td>Theme primary color</td><td>The color of the inner ring -- i.e. the value</td></tr>
                  <tr ><td>ringTextColor</td><td>HTML Color</td><td>black</td><td>The color of the value text</td></tr>

                </tbody>
              </table>
              <div style={{ marginTop: '24px' }}></div>
              This page can be viewed here <a href='https://github.com/jamesskyoung/material-design-for-react/blob/master/src/examples/ChartsEx.jsx' target='_blank'>Here</a>

              <p>
                <Typography font='headline'>Code example</Typography>
              </p>

              <pre style={{ fontFace: 'Roboto Mono, monospace', padding: '6px', background: '#eee', borderRadius: '6px' }}>
                <code>
                  {this.colourize(
                    "<RingGraph height={300} width={300}  id='p1'  "
                    + "\n\tringColor='lime' ringBackground='black' "
                    + "\n\tvalue={this.state.inputValue}/>"

                  )}"

                  </code>
              </pre>

            </Typography>
          </div>

        </Grid>

      </div >

    )
  }

}

export default ChartsEx;