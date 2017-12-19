import React from 'react';
import MUIBase from '../lib/MUIBase';
import Accordion from '../lib/Accordion';
import Button from '../lib/Button';
import Colourizer from '../lib/Colourizer';
import Grid from '../lib/Grid';
import MainHeader from '../app/MainHeader.jsx';
import Radio from '../lib/Radio';
import TextField from '../lib/TextField';
import Tooltip from '../lib/Tooltip';
import Typography from '../lib/Typography';

class TooltipEx extends MUIBase {
  constructor(props) {
    super(props);

    this.state = {
      leftChecked: false,
      rightChecked: false,
      aboveChecked: false,
      belowChecked: true,
      position: 'below',
      showTip: false,
      showTip2: false,
      text: "I'm a tooltip... I'm here to help "
    }

  }

  clickPos(event, id, name, value) {
    console.log(id, name, value);
    let leftChecked, rightChecked, aboveChecked, belowChecked = false;
    let position = '';

    if (id === 'left') {
      position = 'left';
      leftChecked = true;
    } else if (id === 'right') {
      position = 'right';
      rightChecked = true;
    } else if (id === 'above') {
      position = 'above';
      aboveChecked = true;
    } else if (id === 'below') {
      position = 'below';
      belowChecked = true;
    }

    this.setState({ position: position, leftChecked: leftChecked, rightChecked: rightChecked, aboveChecked: aboveChecked, belowChecked: belowChecked });
  }

  colourize(element) {
    return Colourizer.colourize(element);
  }

  onMouseLeave(event) {
    this.setState({ showTip: false });
  }

  onMouseOver(event) {
    console.log( this.state.showTip);
    this.setState({ showTip: true });
  }

  onMouseLeave2(event) {
    this.setState({ showTip2: false });
  }

  onMouseOver2(event) {
    this.setState({ showTip2: true });
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
            <Typography font='display2'>Tooltip "Work in progress" <i style={{fontSize: '2em'}} className="material-icons">build</i></Typography>
            <p>
              Material Design does not offer support for Tooltips.  These Tooltips can be from the left, right, top, or bottom.
              </p>
            <p>
              <TextField style={{width: '300px'}} type='text' id='myid' placeholder='Tooltip text'
                value={this.state.text}
                onChange={((event) => this.setState({ text: event.target.value }))}
              />
            </p>
            <p>
              Use the radio buttons below to determine position.
            </p>
            <p>
              <Radio id='left' label='Left' name='radioExample' value='left' isChecked={this.state.leftChecked} onClick={this.clickPos.bind(this)} />
              <Radio id='right' label='Right' name='radioExample' value='right' isChecked={this.state.rightChecked} onClick={this.clickPos.bind(this)} />
              <Radio id='above' label='Above' name='radioExample' value='above' isChecked={this.state.aboveChecked} onClick={this.clickPos.bind(this)} />
              <Radio id='below' label='Below' name='radioExample' value='below' isChecked={this.state.belowChecked} onClick={this.clickPos.bind(this)} />
            </p>
            <p>
              <div id='tip1' style={{ border: '1px solid #aaa', padding: '12px', textAlign: 'center' }}
                onMouseOver={this.onMouseOver.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)} >
                Mouse over me for a tooltip!!!! It will disappear after 3 seconds (configurable prop)
              </div>
              <Tooltip forId='tip1'
                position={this.state.position}
                show={this.state.showTip}
                text={this.state.text}
                timeout={3000} />
            </p>
            <p>
            <div id='tip2' style={{ border: '1px solid #aaa', padding: '12px', textAlign: 'center' }}
                onMouseOver={this.onMouseOver2.bind(this)}
                onMouseLeave={this.onMouseLeave2.bind(this)} >
                Rich text example... custom colours.. no timeout.  You must 'mouse out'.
              </div>
              <Tooltip forId='tip2'
                position={this.state.position}
                show={this.state.showTip2}
                text='<i style="font-size: 2em;" class="material-icons">info_outline</i><p><span style="font-weight: bold; ">This is a rich text tooltip!!!</span></p><p style="color: white">In order to do this, just supply the text you want with HTML tags.</p>'
                tipStyle={{ backgroundColor: '#000', color: 'aqua' }}
              />
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
                  <tr ><td >tipStyle</td><td>object</td><td>Theme secondary colour</td><td>Background and text colours. </td></tr>
                  <tr ><td >timeout</td><td>int</td><td>3000</td><td>Milliseconds to show the tooltip</td></tr>
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
                    + "\n  text='Your rich text <h1>etc. etc.</h1><img ... </img>'"
                    + "\n  tipStyle={{backgroundColor: '#000', color: 'aqau'}} \n/>"

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