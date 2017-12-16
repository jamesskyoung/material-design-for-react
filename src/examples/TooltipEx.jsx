import React from 'react';
import MUIBase from '../lib/MUIBase';
import Accordion from '../lib/Accordion';
import Button from '../lib/Button';
import Colourizer from '../lib/Colourizer';
import Grid from '../lib/Grid';
import MainHeader from '../app/MainHeader.jsx';
import TextField from '../lib/TextField';
import Tooltip from '../lib/Tooltip';
import Typography from '../lib/Typography';

class TooltipEx extends MUIBase {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      text: "I'm a tooltip... I'm here to help "
    }

  }

  colourize(element) {
    return Colourizer.colourize(element);
  }

  onMouseLeave(event) {
    event.persist();
    this.setState({ event: event, showTip: false });
  }

  onMouseOver(event) {
    event.persist();
    this.setState({ event: event, showTip: true });
  }

  render() {
    let accStyle = { margin: '12px' };
    let headerStyle = { color: 'white', cursor: 'pointer', backgroundColor: 'var(--mdc-theme-primary)', padding: '12px', margin: '6px' };
    let headerStyleAlt = { color: 'white', cursor: 'pointer', backgroundColor: 'var(--mdc-theme-secondary)', padding: '12px', margin: '6px' };
    let headerStyleAlt2 = { textAlign: 'right', color: 'white', cursor: 'pointer', backgroundColor: 'var(--mdc-theme-secondary)', padding: '12px', margin: '6px' };
    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid >
          <div span='1'></div>
          <div span='6'>
            <Typography font='display2'>Tooltip</Typography>
            <p>
              Material Design does not offer support for Tooltips.  These Tooltips can be from the left, right, top, or bottom
            </p>
            <p>
              <div id='tip1' style={{border: '1px solid #eee', padding: '12px'}} 
                onMouseOver={this.onMouseOver.bind(this)} 
                onMouseLeave={this.onMouseLeave.bind(this)} >
                Mouse over me for a tooltip!!!! It will disappear after 5 seconds (configurable prop)
              </div>
              <Tooltip forId='tip1' event={this.state.event} show={this.state.showTip} text={this.state.text} timeout={5000} />
            </p>

          </div>

          <div span='5'></div>

          <div span='1'></div>
          <div span='11'>

            <Typography font='display1'>Component Properties &rarr; <strong>Tooltip</strong></Typography>
            <div ></div>
            <Typography font='body1'>

              <table cellSpacing={5} style={{ textAlign: 'left', width: '75%', borderSpacing: '0px', padding: '6px' }}>
                <thead style={{ padding: '6px' }}>
                  <tr >
                    <th style={{ borderBottom: '1px solid #eee' }}>Name</th>
                    <th style={{ borderBottom: '1px solid #eee' }}>Type</th>
                    <th style={{ borderBottom: '1px solid #eee' }}>Default</th>
                    <th style={{ borderBottom: '1px solid #eee' }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr ><td >forId</td><td>string</td><td>none</td><td>The ID that this tooltip is attached to</td></tr>
                  <tr ><td >show</td><td>boolean</td><td>false</td><td>Show the tooltip??</td></tr>
                  <tr ><td >text</td><td>string</td><td>none</td><td>The text of the tooltip</td></tr>
                  <tr ><td >timeout</td><td>int</td><td>0 - shows until mouseout</td><td>Milliseconds to show the tooltip</td></tr>
                </tbody>
              </table>
              <div style={{ marginTop: '12px' }}></div>


              <div style={{ marginTop: '24px' }}></div>
              This page can be viewed here <a href='https://github.com/jamesskyoung/material-design-for-react/blob/master/src/examples/TooltipEx.jsx' target='_blank'>Here</a>

              <p>
                <Typography font='headline'>Code example</Typography>
              </p>

              <pre style={{ fontFace: 'Roboto Mono, monospace', padding: '6px', background: '#eee', borderRadius: '6px' }}>
                <code>
                  {this.colourize(
                    "onMouseLeave(event) {"
                    + "\n  this.setState({ showTip: false });"
                    + "\n}"
                    + "\n "
                    + "\nonMouseOver(event) {"
                    + "\n  this.setState({ showTip: true });"
                    + "\n}"
                    + "\n\n"
                    + "<div id='tip1'" 
                    + "\n  onMouseOver={this.onMouseOver.bind(this)} "
                    + "\n  onMouseLeave={this.onMouseLeave.bind(this)} >"
                    + "\n  Mouse over me for a tooltip!!!! "
                    + "\n  It will disappear after 5 seconds (configurable prop)"
                    + "\n</div>"
                    + "\n\n<Tooltip forId='tip1' "
                    + "\n  show={this.state.showTip} "
                    + "\n  text={this.state.text} "
                    + "\n  timeout={5000}\n/>"

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

export default TooltipEx;