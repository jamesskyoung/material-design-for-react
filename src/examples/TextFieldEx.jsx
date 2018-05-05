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
    document.querySelector('#mypassword_helpText p').innerHTML = 'Changed to this.';
  }

  onClick(event) {
    console.log('A click event on the field');
    document.getElementById( 'myid').value = 'abc';
    document.getElementById( 'myid' ).onChange.call();
  }

  onFocus(event) {
    console.log(event.target.id + ' has the focus.');
  }

  onPaste(event) {
    console.log( ' paste!');
    event.persist();
    setTimeout(() => {
      alert( event.target.value );
    }, 1000 )
    
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
              <TextField
                disabled={false}
                helpText='Enter stuff' required={true} type='text' id='myid' placeholder='Hover above'
                labelIcon='warning' // Material design icon name
                labelIconStyle={{color: 'red'}}
                value={this.state.currentValue}
                onChange={this.onChange.bind(this)}
                onClick={this.onClick.bind(this)}
                onFocus={this.onFocus.bind(this)}
                onPaste={this.onPaste.bind(this)}
                maxLength={92}
              />
            </div>
            <div>
              <TextField style={{ width: '300px' }} 
                helpText='Min 8 characters' 
                id='mypassword' 
                labelIcon='done' // Material design icon name
                minLength={8} 
                onChange={this.onChangePw.bind(this)} 
                required={true}
                type='password' 
                value={this.state.password} 
                placeholder='Password' />
            </div>
            <div style={{ marginTop: '12px' }} >You are typing: {this.state.currentValue}</div>
            <div style={{ marginTop: '12px' }}>
              <p>
                Note that the 'helpText' can be dynamically changed.  This can be
                useful when there can be multiple error conditions possible with a field. To do this, simply:
                </p>

              <p>
                <code style={{ backgroundColor: '#eee', padding: '6px', color: '#333' }}>
                  document.querySelector('#mypassword_helpText p').innerHTML = 'Changed to this.';
                </code>
                <p>
                  #mypassword is the id I provided on the textField followed by the constant '_helpText p' which locates
                  the paragraph containing your help text.  InnerHTML of course, changes that.
                </p>
                <p>
                  Another use could be a character counter...
                </p>
              </p>
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
                    <tr ><td >className</td><td>String</td><td>none</td><td>Class to be applied</td></tr>
                    <tr ><td >helpText</td><td>String</td><td>none</td><td>This text will appear under the field -- experimental. (See required)</td></tr>
                    <tr ><td >maxLength</td><td>int</td><td>none</td><td>The maximum length of the field.</td></tr>
                    <tr ><td >minLength</td><td>int</td><td>none</td><td>The minimum length of the field.  Tabbing out of the field when 'incomplete' causes the helpText to turn red.</td></tr>
                    <tr ><td >type</td><td>String</td><td>none</td><td>The type of field (text, password...)</td></tr>
                    <tr ><td >placeholder</td><td>String</td><td>none</td><td>The placeholder text.</td></tr>
                    <tr ><td >onBlur</td><td>Function</td><td>none</td><td>Fired on an onBlur event</td></tr>
                    <tr ><td >onChange</td><td>Function</td><td>none</td><td>Fired on an onChange event</td></tr>
                    <tr ><td >onClick</td><td>Function</td><td>none</td><td>Fired on an onClick event</td></tr>
                    <tr ><td >onFocus</td><td>Function</td><td>none</td><td>Fired on an onFocus event</td></tr>
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
          </div>
        </Grid>
      </div >

    )
  }

}

export default TextFieldEx;