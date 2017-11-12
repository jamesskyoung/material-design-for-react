import React from 'react';
import Button from '../lib/Button';
import Colourizer from '../lib/Colourizer';
import Dialog from '../lib/Dialog';
import Grid from '../lib/Grid';
import MainHeader from '../app/MainHeader.jsx';
import Typography from '../lib/Typography';

class DialogEx extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showd1: false,
      showd2: false
    }
  }

  colourize(element) {
    return Colourizer.colourize(element);
  }

  render() {

    return (
      <div className='mdc-typography'>
        <MainHeader />
        <Grid >
          <div span='1'></div>
          <div style={{ textAlign: 'left' }} span='11'>
            <Typography font='display2'>Dialog</Typography>

            <p>
              Dialogs are a way to inform the user of a particular situation -- but do not
              overuse them.  These dialogues are modal which means they
              interrupt a user.
            </p>
            <p>
              The Dialog component will call back on what is essentially OK/Cancel choices.

            </p>

            <Button onClick={(() => {
              this.setState({ showDialog: true, dialogBody: 'This is a test of the Dialogue component -- DIALOG1. It used Material Components for the WEB.' });
            })}
              id="dlg1" raised={true} className="mdc-button mdc-button--raised">Show Dialog</Button>


            <p>
              <Dialog id='d1'
                onAccept={(() => {
                  this.setState({ showDialog: false });
                  alert('You clicked accept.');
                })}
                onCancel={(() => {
                  this.setState({ showDialog: false });
                  alert('You clicked decline.');
                })}
                show={this.state.showDialog} title='Dialog1 Title' body={this.state.dialogBody}
                acceptText='Accept' declineText='Decline'
              />
            </p>
          </div>
          <div span='1'></div>
          <div style={{ textAlign: 'left' }} span='11'>


            <div style={{ marginTop: '12px' }}></div>
            <Typography font='display1'>About &rarr; <strong>Dialog</strong></Typography>
            <Typography font='body1'>
              <table cellSpacing={5} style={{ width: '100%', borderSpacing: '0px', padding: '6px', color: 'xwhite' }}>
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
                  <tr ><td >acceptText</td><td>String</td><td>false</td><td>Text for the accept button.</td></tr>
                  <tr ><td >body</td><td>String</td><td>none</td><td>The body text</td></tr>
                  <tr ><td >declineText</td><td>String</td><td>false</td><td>Text for the decline button.</td></tr>
                  <tr ><td >onAccept</td><td>Function</td><td>none</td><td>Callback when accept is clicked.</td></tr>
                  <tr ><td >onDecline</td><td>Function</td><td>none</td><td>Callback when decline is clicked.</td></tr>
                  <tr ><td >show</td><td>Boolean</td><td>false</td><td>Show the dialogue?</td></tr>
                  <tr ><td >title</td><td>String</td><td>false</td><td>The Dialogue title</td></tr>
                </tbody>
              </table>
              <div style={{ marginTop: '24px' }}></div>
              This page can be viewed here <a href='https://github.com/jamesskyoung/reactmaterial/master/src/examples/CardEx.jsx' target='_blank'>Here</a>
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
                  "<Dialog id='d1'"
                  + "\n\tonAccept={(() => {"
                  + "\n\t\tthis.setState({ showDialog: false });"
                  + "\n\t\talert('You clicked accept.');"
                  + "\n\t})}"
                  + "\n\tonCancel={(() => {"
                  + "\n\t\tthis.setState({ showDialog: false });"
                  + "\n\t\talert('You clicked decline.');"
                  + "\n\t})}"
                  + "\n\tshow={this.state.showDialog}"
                  + "\n\ttitle='Dialog1 Title'"
                  + "\n\tbody={this.state.dialogBody}"
                  + "\n\tacceptText='AccepItt' "
                  + "\n\tdeclineText='DeclineIt'"
                  + "/>")}

              </code>
            </pre>
          </div>

        </Grid>
      </div >

    )
  }

}

export default DialogEx;