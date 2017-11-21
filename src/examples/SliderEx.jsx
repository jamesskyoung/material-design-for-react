import React from 'react';
import MUIBase from '../lib/MUIBase';
import Colourizer from '../lib/Colourizer';
import Grid from '../lib/Grid';
import Slider from '../lib/Slider';
import Typography from '../lib/Typography';


// Examples
import MainHeader from '../app/MainHeader.jsx';

class SliderEx extends MUIBase {
  constructor(props) {
    super(props);
    this.state = {
      initialValue: '',
      finalValue: 0,
      value: 0
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

  onChange(value) {
    this.setState({ finalValue: value, value: value });
  }

  onInput(value) {
    this.setState({ value: value });
  }

  render() {
    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid>
          <div span='1'></div>
          <div span='11'>
            <Typography font='display2'>Slider</Typography>
            <p>
              The Slider component allows for flexible input from a user.  You can specify min, max and an initial value.
              You can also just click on a part of the slider instead of sliding it.
            </p>
            <Slider style={{ width: '100%' }}
              id='mySlider'
              min={0}
              max={100}
              value={this.state.initialValue}
              onInput={this.onInput.bind(this)}
              onChange={this.onChange.bind(this)} />
            <p>
              Current value is: {this.state.value}<br />
              Final value is: {this.state.finalValue}
            </p>
          </div>
          <div span='1'></div>
          <div span='11'>

            <Typography font='display1'>Component Properties &rarr; <strong>Slider</strong></Typography>

            <Typography font='body1'>

              <table style={{ width: '100%', borderSpacing: '0px', padding: '6px', textAlign: 'left' }}>
                <thead style={{ padding: '6px' }}>
                  <tr >
                    <th style={{ borderBottom: '1px solid #eee' }}>Name</th>
                    <th style={{ borderBottom: '1px solid #eee' }}>Type</th>
                    <th style={{ borderBottom: '1px solid #eee' }}>Default</th>
                    <th style={{ borderBottom: '1px solid #eee' }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr ><td >id</td><td>int</td><td>none</td><td>The ID for this Slider</td></tr>
                  <tr ><td >min</td><td>int</td><td>0</td><td>The minimum value of the Slider</td></tr>
                  <tr ><td >max</td><td>int</td><td>100</td><td>The maximum value of the Slider</td></tr>
                  <tr ><td >value</td><td>String</td><td>0</td><td>The initial value of the slider</td></tr>
                  <tr><td>onChange</td><td>Function</td><td>none</td><td>Called (with the value) when the slider stops.</td></tr>
                  <tr><td>onInput</td><td>Function</td><td>none</td><td>Called (with the value) when the slider moves.</td></tr>
                </tbody>
              </table>
              <div style={{ marginTop: '24px' }}></div>
              This page can be viewed here <a href='https://github.com/jamesskyoung/material-design-for-react/blob/master/src/examples/SliderEx.jsx' target='_blank'>Here</a>

              <p>
                <Typography font='headline'>Code example</Typography>
              </p>

              <pre style={{ fontFace: 'Roboto Mono, monospace', padding: '6px', background: '#eee', borderRadius: '6px' }}>
                <code>
                  {this.colourize(
                    "onChange( value ) {"
                    + "\n\tthis.setState({finalValue: value, value: value  } );"
                    + "\n}"
                    + "\n\nonInput( value ) {"
                    + "\n\tthis.setState({value: value } );"
                    + "\n}"
                    + "\n\n<Slider min={0} max={100} "
                    + "\n\tvalue={this.state.initialValue} "
                    + "\n\tonInput={this.onInput.bind(this)} "
                    + "\n\tonChange={this.onChange.bind(this)} "
                    + "\n/>")
                  }

                </code>
              </pre>

            </Typography>
          </div>
        </Grid>

      </div >

    )
  }

}

export default SliderEx;