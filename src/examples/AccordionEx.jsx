import React from 'react';
import MUIBase from '../lib/MUIBase';
import Accordion from '../lib/Accordion';
import Button from '../lib/Button';
import Card from '../lib/Card';
import Checkbox from '../lib/Checkbox';
import Colourizer from '../lib/Colourizer';
import Grid from '../lib/Grid';
import MainHeader from '../app/MainHeader.jsx';
import TextField from '../lib/TextField';
import Typography from '../lib/Typography';

class AccordionEx extends MUIBase {
  constructor(props) {
    super(props);

    this.state = {
      acc1Show: true,
      acc2Show: false,
      acc3Show: false,
      acc4Show: false
    }

  }

  colourize(element) {
    return Colourizer.colourize(element);
  }


  clickEvent(event, id, isChecked) {

    if (id === 'cb1') {
      this.setState({ cb1Checked: isChecked });
    } else {
      this.setState({ cb2Checked: isChecked });
    }
  }

  render() {
    let accStyle = { margin: '12px'  };
    let headerStyle = { color: 'white', cursor: 'pointer', backgroundColor: 'var(--mdc-theme-primary)', padding: '12px', margin: '6px' };
    let headerStyleAlt = { color: 'white', cursor: 'pointer', backgroundColor: 'var(--mdc-theme-secondary)', padding: '12px', margin: '6px' };
    let headerStyleAlt2 = { textAlign: 'right', color: 'white', cursor: 'pointer', backgroundColor: 'var(--mdc-theme-secondary)', padding: '12px', margin: '6px' };
    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid >
          <div span='1'></div>
          <div span='6'>
            <Typography font='display2'>Accordion</Typography>
            <p>
              Material Design does not offer support for Accordions.  These are a way to show and hide sections of information.
              You have full programmatic control over what is shown.  In this example, the first section is shown by default.
              The images for the 'toggle' are material icons.  The headers are not part of the accordion itself, but divs that react to clicks
              that set state variables to control the accordion's open/close behaviour.
            </p>
            <p>
              Click on the 'header' to toggle show/hide.
            </p>

            <div style={{ marginTop: '12px', height: '2px', backgroundColor: 'var(--mdc-theme-secondary)' }}></div>
            <div style={{ marginTop: '12px', height: '2px' }}></div>

            <div style={headerStyle} onClick={(() => {
              this.setState({ acc1Show: !this.state.acc1Show });
            })}>
              <i style={{ verticalAlign: 'middle' }} className="material-icons">{this.state.acc1Show ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</i> Your details
            </div>

            <Accordion style={accStyle} id='accid1' show={this.state.acc1Show} transitionTime={1}>
              <h1>Details</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec bibendum purus. Fusce nec pharetra enim, eu auctor nisi. Vivamus luctus leo ac purus mattis, vitae suscipit sem venenatis. Sed lacus nisl, finibus blandit nisi ac, vulputate elementum tortor. Donec maximus et urna eget pretium. Suspendisse rutrum commodo pharetra. Cras imperdiet hendrerit leo, sit amet tempor purus gravida vel. Cras nulla erat, varius finibus ante sed, blandit ultrices enim. Aliquam erat volutpat. Maecenas consequat varius tincidunt.
              
            </Accordion>

            <div style={headerStyleAlt2} onClick={(() => {
              this.setState({ acc2Show: !this.state.acc2Show });
            })}>
            Your stuff
              <i style={{ verticalAlign: 'middle' }} className="material-icons">{this.state.acc2Show ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</i> 
            </div>
            <Accordion style={accStyle} id='accid2' maxHeight='250px' show={this.state.acc2Show} transitionTime={1}>
              <h1>Accordian 2</h1>
              <p>
                This header div has <code style={{backgroundColor: '#333', padding: '6px', color: 'white'}}>textAlign: 'right'</code>
              </p>
              <Checkbox id='cb1' label='Checkbox 1' name='cbExample' value={this.state.cb1Value} isChecked={this.state.cb1Checked} onClick={this.clickEvent.bind(this)} />
              <Checkbox id='cb2' label='Checkbox 2' name='cbExample2' value={this.state.cb2Value} isChecked={this.state.cb2Checked} onClick={this.clickEvent.bind(this)} />

            </Accordion>

            <div style={headerStyle} onClick={(() => {
              this.setState({ acc3Show: !this.state.acc3Show });
            })}>
              <i style={{ verticalAlign: 'middle' }} className="material-icons">{this.state.acc3Show ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</i> Your future
            </div>
            <Accordion id='accid3' style={accStyle} show={this.state.acc3Show} transitionTime={1}>
              <h1>This is an accordion that contains a Card</h1>
              <Card style={{ marginLeft: '12px', width: '320px' }} title='Sample Card Title' subtitle='This card has a shadow!'
                shadow={true}
                headerStyle={{ backgroundImage: 'url("images/1-1.jpg")', backgroundSize: 'cover', width: '100%', height: '120px' }}>
                <Button raised={true}> Action 1</Button>
                <Button> Action 2</Button>
              </Card>
            </Accordion>

            <div style={headerStyleAlt} onClick={(() => {
              this.setState({ acc4Show: !this.state.acc4Show });
            })}>
              <i style={{ verticalAlign: 'middle' }} className="material-icons">{this.state.acc4Show ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</i> Other info?
            </div>
            <Accordion id='accid4' style={accStyle} show={this.state.acc4Show} transitionTime={1}>
              <h1>Anything else?</h1>
              Is there anything else?
            </Accordion>
            <div style={{ marginTop: '24px', height: '2px', backgroundColor: 'var(--mdc-theme-secondary)' }}></div>
          </div>

          <div span='5'></div>

          <div span='1'></div>
          <div span='11'>

            <div ></div>
            <Typography font='display1'>Component Properties &rarr; <strong>Accordion</strong></Typography>
            <div style={{ marginTop: '12px' }}></div>
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
                  <tr ><td >id</td><td>string</td><td>none</td><td>ID of the Accordion</td></tr>
                  <tr ><td >maxHeight</td><td>string</td><td>500px</td><td>Maximum height of opened accordion in pixels</td></tr>
                  <tr ><td >transitionTime</td><td>int</td><td>0</td><td>Milliseconds of transition effect</td></tr>
                  <tr ><td >show</td><td>boolean</td><td>false</td><td>Show the accordion?</td></tr>
                </tbody>
              </table>
              <div style={{ marginTop: '12px' }}></div>


              <div style={{ marginTop: '24px' }}></div>
              This page can be viewed here <a href='https://github.com/jamesskyoung/material-design-for-react/blob/master/src/examples/AccordionEx.jsx' target='_blank'>Here</a>

              <p>
                <Typography font='headline'>Code example</Typography>
              </p>

              <pre style={{ fontFace: 'Roboto Mono, monospace', padding: '6px', background: '#eee', borderRadius: '6px' }}>
                <code>
                  {this.colourize(
                    "let headerStyle = { color: 'white', cursor: 'pointer', "
                    + "\nbackgroundColor: 'var(--mdc-theme-primary)', "
                    + "\npadding: '12px', margin: '6px' };"
                    + "\n\n<div style={headerStyle} onClick={(() => {"
                    + "\n  this.setState({ acc3Show: !this.state.accShow });"
                    + "\n  })}>"
                    + "\n  <i style={{ verticalAlign: 'middle' }} "
                    + "\n        className='material-icons'>"
                    + "\n        {this.state.accShow "
                    + "\n        ? 'keyboard_arrow_up' "
                    + "\n        : 'keyboard_arrow_down'}"
                    + "\n</i> Your future"
                    + "\n</div>"
                    + "\n\n<Accordion id='accid3' style={accStyle} show={this.state.acc3Show} transitionTime={1}>"
                    + "\n<h1>This is an accordion!!!!</h1>"
                    + "\n</Accordion>"

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

export default AccordionEx;