import React from 'react';
import Button from '../lib/Button';
import Colourizer from '../lib/Colourizer';
import Grid from '../lib/Grid';
import Theme from '../lib/Theme';
import MainHeader from '../app/MainHeader.jsx';
import Typography from '../lib/Typography';

class ButtonEx extends React.Component {
  constructor(props) {
    super(props);

  }


  colourize(element) {
    return Colourizer.colourize(element);
  }

  componentDidMount() {
    return;
    var code = document.getElementById('buttonExCode').innerHTML;
    document.getElementById('buttonExCode').innerHTML = this.escapeHTML(code);
    var b = code.split('>');

    for (var i = 0; i < b.length; i++) {
      var replaceBracket = i == b.length - 1 ? "" : ">";
      document.getElementById("buttonExCode").textContent += b[i] + replaceBracket + " \r\n";
    }
  }

  escapeHTML(string) {
    var pre = document.createElement('pre');
    var text = document.createTextNode(string);
    pre.appendChild(text);
    return pre.innerHTML;
  }//end escapeHTML

  render() {

    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid >
          <div span='1'></div>
          <div style={{ textAlign: 'left' }} span='11'>
            <Typography font='display2'>Button</Typography>
            <Typography font='body1'>
              <div style={{ marginTop: '12px' }}></div>
              Buttons can be of a primary, secondary or flat style.  They can be 'raised' and can accept an onClick event.
              Kindly note tha the Material Design default style is a transformation to capitals. If you do not want this style
              on your buttons, then simply supply a style object with textTransform: 'none' as in one of the examples below.


              <div style={{ marginTop: '12px' }}></div>
              <Button type='primary' raised={true} onClick={(() => alert('Hello from a button!'))}>A primary raised button. Click me!</Button >
              <div style={{ marginTop: '12px' }}></div>
              <Button type='secondary' raised={true} >A secondary raised button</Button >
              <div style={{ marginTop: '12px' }}></div>
              <Button type='primary' raised={false} >A plain primary (flat) button</Button >
              <div style={{ marginTop: '12px' }}></div>
              <Button type='secondary' raised={false} >A plain secondary (flat) button</Button >
              <div style={{ marginTop: '12px' }}></div>
              <Button type='flat' raised={false} >A plain (flat) button</Button >
              <div style={{ marginTop: '12px' }}></div>
              <Button style={{ lineHeight: '24px', height: '24px', fontSize: '0.75em' }} type='primary' raised={true} >A primary small button</Button >
              <div style={{ marginTop: '12px' }}></div>
              <Button type='primary' raised={true} style={{ height: '4em' }} >A primary large button</Button >
              <div style={{ marginTop: '12px' }}></div>
              <Button type='primary' style={{ textTransform: 'none' }} >No Text Caps</Button >
              <div style={{ marginTop: '12px' }}></div>
              <Button disabled='disabled' raised={true} >A disabled button</Button >
            </Typography>
            <div style={{ marginTop: '12px' }}></div>
            <Typography font='display1'>Icon Buttons</Typography>
            <Typography font='body1'>

              <div style={{ marginTop: '12px' }}></div>
              Simply use a Material Design Icon in the Button text area.  You can easily combine it with text on the left or right.
              <div style={{ marginTop: '12px' }}></div>
              <Button type='primary' raised={true} >
                <i style={{ color: 'white', marginRight: '12px' }} className="material-icons mdc-button__icon" aria-hidden="true">check_circle</i>
                &nbsp;Text right</Button >
              <div style={{ marginTop: '12px' }}></div>
              <Button type='primary' raised={true} >
                Text left&nbsp;
              <i style={{ color: 'white', marginRight: '12px' }} className="material-icons mdc-button__icon" aria-hidden="true">cancel_circle</i></Button >

              <div style={{ marginTop: '12px' }}></div>
              <Button type='secondary' raised={true} >
                <i style={{ color: 'white', marginRight: '12px' }} className="material-icons mdc-button__icon" aria-hidden="true">check_circle</i>
                &nbsp;Text right secondary</Button >
              <div style={{ marginTop: '12px' }}></div>
              <Button type='secondary' >
                Text left secondary&nbsp;
              <i style={{ color: 'white', marginRight: '12px' }} className="material-icons mdc-button__icon" aria-hidden="true">cancel</i></Button >
              <div style={{ marginTop: '12px' }}></div>
              <Button type='primary' >
                <i style={{ color: 'white', marginRight: '12px' }} className="material-icons mdc-button__icon" aria-hidden="true">network_check</i></Button >

              <div style={{ marginTop: '12px' }}></div>
              <Button type='primary' >
                <i style={{ color: 'white', marginRight: '12px' }} className="material-icons mdc-button__icon" aria-hidden="true">settings</i></Button >

              <div style={{ marginTop: '12px' }}></div>
              <Button type='primary' >
                Backup&nbsp;
                <i style={{ color: 'lime', marginRight: '12px' }} className="material-icons mdc-button__icon" aria-hidden="true">backup</i></Button >

              <div style={{ marginTop: '12px' }}></div>

            </Typography>

          </div>
        
          <div style={{ textAlign: 'left', }} span='1'></div>
          <div style={{ textAlign: 'left', }} span='11'>

            <div style={{ marginTop: '12px' }}></div>
            <Typography font='display1'>Component Properties &rarr; <strong>Button</strong></Typography>
            <div style={{ marginTop: '12px' }}></div>
            <Typography font='body1'>
              <table >
                <thead>
                  <tr >
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: '#eee' }}><td>onClick</td><td>Function</td><td>none</td><td>Fired when the button is clicked.</td></tr>
                  <tr><td>style</td><td>Object</td><td>none</td><td>Style object to override colours etc.  (Use judiciously.)</td></tr>
                  <tr style={{ background: '#eee' }}><td>type</td><td>String</td><td>primary</td><td>Sets the button type.  One of primary, secondary or flat.</td></tr>
                </tbody>
              </table>

              <p>
                <Typography font='headline'>Code example</Typography>
              </p>

              <pre style={{ fontFace: 'Roboto Mono, monospace', padding: '6px', background: '#eee', borderRadius: '6px' }}>
                <code>
                  {this.colourize(
                    "<Button type='primary'"
                    + "\n\traised={true}"
                    + "\n\tonClick={(() => alert('Hello from a button!'))}>"
                    + "\n\tA primary raised button. Click me!"
                    + "\n</Button >"

                    + "\n\n<Button type='primary' "
                    + "\n\tstyle={{textTransform: 'none}}>"
                    + "\n\tNo text caps"
                    + "\n</Button >"
                  )}

                </code>
              </pre>
              <div style={{ marginTop: '24px' }}></div>
              This page can be viewed here <a href='https://github.com/jamesskyoung/reactmaterial/blob/aplha-1/src/examples/ButtonEx.jsx' target='_blank'>Here</a>

            </Typography>
          </div>

        </Grid>

      </div >

    )
  }

}

export default ButtonEx;