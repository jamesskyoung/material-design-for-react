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
      selectedValue: '',
      showDate: false,
      showTime: false
    }

  }

  colourize(element) {
    return Colourizer.colourize(element);
  }

  clickEvent(isChecked) {
    this.setState({ isChecked: isChecked });
  }

  callBackDate(value) {
    this.setState({ selectedDateValue: 'Selected date: ' + value.toISOString().substring(0, 10), showDate: false });
  }

  callBackTime(value) {
    this.setState({ selectedTimeValue: 'Selected time: ' + value.toISOString().substring(11), showTime: false });
  }

  cancelledDate() {
    this.setState({ showDate: false });
  }

  cancelledTime() {
    this.setState({ showTime: false });
  }

  showDatePicker() {
    console.log('show date');
    this.setState({ showDate: true, type: 'date' });
  }

  showTimePicker() {
    console.log('show time');
    this.setState({ showTime: true, type: 'time' });
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
                <Button onClick={this.showTimePicker.bind(this)} style={{ marginLeft: '6px' }} raised={true}>Show Time Picker</Button>
                <p>
                  {this.state.selectedDateValue}
                  <br />
                  {this.state.selectedTimeValue}
                </p>
                <Pickers dateUntil={new Date(2018, 0, 15)} show={this.state.showDate} type='date' onCancel={this.cancelledDate.bind(this)} onChange={this.callBackDate.bind(this)} />
                <Pickers onCancel={this.cancelledTime.bind(this)} show={this.state.showTime} type='time' onChange={this.callBackTime.bind(this)} />
              </p>
            </Typography>
          </div>
          <div span='1'></div>
          <div style={{ textAlign: 'left' }} span='11'>
            <Typography font='display1'>About &rarr; <strong>Pickers</strong></Typography>
            <Typography font='body1'>
              <p>The return value is always a long that represents what the user has selected.  Simply construct a date object etc.
                </p>
              <p>
                <strong>It is important that you implement both the handlers(onCancel, onChange) and reset the show state attribute to false.</strong>

              </p>
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
                  <tr ><td >dateUntil</td><td>Date</td><td>Today</td><td>Date after which dates will not be selectable</td></tr>
                  <tr ><td >show</td><td>Boolean</td><td>false</td><td>Is the picker to be shown?</td></tr>
                  <tr ><td >type</td><td>String</td><td>date</td><td>The type of picker.  date or time</td></tr>
                  <tr ><td >onCancel</td><td>Function</td><td>none</td><td>Handler when cancel is clicked</td></tr>
                  <tr ><td >onChange</td><td>Function</td><td>none</td><td>Handler when ok is clicked</td></tr>
                </tbody>
              </table>
              <div style={{ marginTop: '24px' }}></div>
              This page can be viewed here <a href='https://github.com/jamesskyoung/material-design-for-react/blob/master/src/examples/PickersEx.jsx' target='_blank'>Here</a>
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
                  "callBackDate(value) {"
                  + "\n     this.setState({ selectedDateValue: "
                  + "\n      'Selected date: ' + value.toISOString().substring(0, 10), "
                  + "\n      showDate: false });"
                  + "\n   }"
                  + "\n "
                  + "\ncallBackTime(value) {"
                  + "\n     this.setState({ selectedTimeValue: "
                  + "\n      'Selected time: ' + value.toISOString().substring(11), "
                  + "\n      showTime: false });"
                  + "\n   }"
                  + "\n\n<Pickers show={this.state.showDate} " 
                  + "\n    dateUntil={new Date(2018, 0, 15)}  "
                  + "\n    type='date' "
                  + "\n    onCancel={this.cancelled.bind(this)} "
                  + "\n    onChange={this.callBackDate.bind(this)} "
                  + "\n />"
                  + "\n\n<Pickers show={this.state.showTime} "
                  + "\n    type='date' "
                  + "\n    onCancel={this.cancelled.bind(this)} "
                  + "\n    onChange={this.callBackTime.bind(this)} "
                  + "\n />")
                }

              </code>
            </pre>
          </div>

        </Grid>

      </div >

    )
  }

}

export default PickersEx;