import React from 'react';
import MUIBase from '../lib/MUIBase';
import Colourizer from '../lib/Colourizer';
import Grid from '../lib/Grid';
import MainHeader from '../app/MainHeader.jsx';
import Typography from '../lib/Typography';
import TextField from '../lib/TextField';


class TextFieldEx extends MUIBase {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: ''
    }

  }

  colourize(element) {
    return Colourizer.colourize(element);
  }

  onChange(event) {
    this.setState({ currentValue: event.target.value });
  }

  render() {

    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid>
          <div span='1'></div>
          <div span='11'>
            <Typography font='display2'>Textfield</Typography>
            <p>
              <TextField type='text' id='myid' placeholder='Hover above' 
                onChange={this.onChange.bind(this)}
              />

              <TextField style={{marginLeft: '6px'}} type='password' id='myid' placeholder='Password' />
            </p>
            <div>You are typing: {this.state.currentValue}</div>
          </div>
          <div span='1'></div>
          <div style={{ textAlign: 'left' }} span='11'>
            <Typography font='display1'>About &rarr; <strong>TextField</strong></Typography>

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
                <tr ><td >type</td><td>String</td><td>none</td><td>The type of field (text, password...)</td></tr>
                <tr ><td >placeholder</td><td>String</td><td>none</td><td>The placeholder text.</td></tr>
                <tr ><td >onChange</td><td>Function</td><td>none</td><td>Fired on an onChange event</td></tr>
              </tbody>
            </table>
            <div style={{ marginTop: '24px' }}></div>
            This page can be viewed here <a href='https://github.com/jamesskyoung/material-design-for-react/blob/master/src/examples/TextFieldEx.jsx' target='_blank'>Here</a>

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
                  "onChange(event) {"
                  + "\n   this.setState({ currentValue: event.target.value });"
                  + "\n }"
                  + "\n "
                  + "\n<TextField type='text' id='myid' placeholder='Hover above' "
                  + "\n   onChange={this.onChange.bind(this)}>"
                  + "\n/>")}

              </code>
            </pre>
          </div>
        </Grid>
      </div >

    )
  }

}

export default TextFieldEx;