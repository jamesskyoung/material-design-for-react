import React from 'react';
import Colourizer from '../lib/Colourizer';
import Button from '../lib/Button';
import Grid from '../lib/Grid';
import Pickers from '../lib/Pickers';
import MainHeader from '../app/MainHeader.jsx';
import TextField from '../lib/TextField';
import Typography from '../lib/Typography';

/**
 * TODO Multiple events being returned
 * Theme!
 * Copy source into mine... css too
 * 
 */
class PickersEx extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    }

  }

  colourize(element) {
    return Colourizer.colourize(element);
  }

  clickEvent(isChecked) {
    this.setState({ isChecked: isChecked });
  }

  callBack(value) {
    alert('back..' + value.toString());
    this.setState({ selectedValue: value.toISOString() });
  }

  showDatePicker() {
    this.setState({ show: true, type: 'date' });
  }

  showTimePicker() {
    this.setState({ show: true, type: 'time' });
  }

  render() {

    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid>
          <div span='1'></div>
          <div span='11'>
            <Typography font='display2'>Date and Time Pickers</Typography>
            <Typography font='body1'>
              <p>
                Sample Date and time pickers...
            </p>
              <p>
                <Button onClick={this.showDatePicker.bind(this)} raised={true}>Show Date Picker</Button>
                <Button onClick={this.showTimePicker.bind(this)} raised={true}>Show Time Picker</Button>
                <p>
                  Selected: {this.state.selectedValue}
                </p>
                <Pickers show={this.state.show} type={this.state.type} onChange={this.callBack.bind(this)} />

              </p>
            </Typography>
          </div>
          <div span='1'></div>
          <div style={{ textAlign: 'left' }} span='11'>
            <Typography font='display1'>About &rarr; <strong>Pickers</strong></Typography>
            <Typography font='body1'>
              <table cellSpacing={5} style={{ width: '100%', borderSpacing: '0px', padding: '6px' }}>
                <thead style={{ padding: '6px' }}>
                  <tr >
                    <th style={{ borderBottom: '1px solid #eee' }}>Name</th>
                    <th style={{ borderBottom: '1px solid #eee' }}>Type</th>
                    <th style={{ borderBottom: '1px solid #eee' }}>Default</th>
                    <th style={{ borderBottom: '1px solid #eee' }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr ><td >id</td><td>id</td><td>none</td><td>The ID of this component</td></tr>
                  <tr ><td >isChecked</td><td>Boolean</td><td>false</td><td>Is the switch on or off?</td></tr>
                  <tr ><td >label</td><td>none</td><td>false</td><td>The label to display.</td></tr>
                  <tr ><td >onClick</td><td>Function</td><td>none</td><td>Handler when switch is clicked</td></tr>
                </tbody>
              </table>
              <div style={{ marginTop: '24px' }}></div>
              This page can be viewed here <a href='https://github.com/jamesskyoung/material-design-for-react/blob/master/src/examples/SwitchEx.jsx' target='_blank'>Here</a>
            </Typography>
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
                  "clickEvent(isChecked) {"
                  + "\n   this.setState({ isChecked: isChecked });"
                  + "\n }"
                  + "\n "
                  + "\n <Switch isChecked={this.state.isChecked} "
                  + "\n    id='my-great-switch'"
                  + "\n    label='Enable notifications?'"
                  + "\n    disabled={false}"
                  + "\n    onClick={this.clickEvent.bind(this)} "
                  + "\n />")}

              </code>
            </pre>
          </div>

        </Grid>

      </div >

    )
  }

}

export default PickersEx;