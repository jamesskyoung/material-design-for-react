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

  onChangePw(event) {
    this.setState({ password: event.target.value });
  }

  onClick(event) {
    console.log('A click event on the field');
  }

  render() {

    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid style={{ display: 'flex' }}>
          <div span='1'></div>
          <div span='11'>
            <Typography font='display2'>Textfield</Typography>
            <div>
              <TextField  helpText='Enter stuff' required={true} type='text' id='myid' placeholder='Hover above'
                value={this.state.currentValue}
                onChange={this.onChange.bind(this)}
                onClick={this.onClick.bind(this)}
              />
              </div>
              <div>
                <TextField style={{width:'50%'}} minLength={8} helpText='Min 8 characters' required={true}
                    onChange={this.onChangePw.bind(this)} value={this.state.password} type='password' id='mypassword' placeholder='Password' />
              </div>
              <div>You are typing: {this.state.currentValue}</div>
            </div>
            <div span='1'></div>
            <div style={{ textAlign: 'left' }} span='11'>
              <Typography font='display1'>About &rarr; <strong>TextField</strong></Typography>
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
                  <tr ><td >helpText</td><td>String</td><td>none</td><td>This text will appear under the field -- experimental. (See required)</td></tr>
                  <tr ><td >minLength</td><td>int</td><td>none</td><td>The minimum length of the field.  Tabbing out of the field when 'incomplete' causes the helpText to turn red.</td></tr>
                  <tr ><td >type</td><td>String</td><td>none</td><td>The type of field (text, password...)</td></tr>
                  <tr ><td >placeholder</td><td>String</td><td>none</td><td>The placeholder text.</td></tr>
                  <tr ><td >onChange</td><td>Function</td><td>none</td><td>Fired on an onChange event</td></tr>
                  <tr ><td >onClick</td><td>Function</td><td>none</td><td>Fired on an onClick event</td></tr>
                  <tr ><td >required</td><td>boolean</td><td>false</td><td>If true, then '*' is placed beside the placeholder. Tabbing out of the field when empty causes the helpText to turn red etc. Try the example above.</td></tr>
                </tbody>
              </table>
              <div style={{ marginTop: '24px' }}></div>
              This page can be viewed here <a href='https://github.com/jamesskyoung/material-design-for-react/blob/master/src/examples/TextFieldEx.jsx' target='_blank'>Here</a>
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
                    "onChange(event) {"
                    + "\n   this.setState({ currentValue: event.target.value });"
                    + "\n }"
                    + "\n "
                    + "\n<TextField required={true} helpText='Enter...' minLength={8} "
                    + "\n   type='text' id='myid' placeholder='Hover above' "
                    + "\n   onChange={this.onChange.bind(this)}"
                    + "\n   onClick={this.onClick.bind(this)}>"
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