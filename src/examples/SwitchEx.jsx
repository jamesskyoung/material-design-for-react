import React from 'react';
import Colourizer from '../lib/Colourizer';
import Grid from '../lib/Grid';
import Switch from '../lib/Switch';
import MainHeader from '../app/MainHeader.jsx';
import Typography from '../lib/Typography';

class SwitchEx extends React.Component {
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

  render() {

    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid>
          <div span='1'></div>
          <div span='11'>
            <Typography font='display2'>Switch</Typography>
            <p>
              <br />
              <Switch isChecked={this.state.isChecked} id='my-great-switch'
                label='Enable notifications?'
                disabled={false}
                onClick={this.clickEvent.bind(this)} />
              <h3>Is checked? {this.state.isChecked ? 'true' : 'false'}</h3>
            </p>
          </div>
          <div span='1'></div>
          <div style={{ textAlign: 'left' }} span='11'>
            <Typography font='display1'>About &rarr; <strong>Switch</strong></Typography>

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
            This page can be viewed here <a href='https://github.com/jamesskyoung/reactmaterial/blob/development/src/examples/CardEx.jsx' target='_blank'>Here</a>

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

export default SwitchEx;