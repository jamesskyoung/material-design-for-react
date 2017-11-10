import React from 'react';
import Button from '../lib/Button';
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

  render() {

    return (
      <div>
        <MainHeader />
        <Grid >
          <div span='2'></div>
          <div style={{ textAlign: 'left', }} span='10'>
            <Typography font='display2'>Dialog</Typography>
            <p>
            <Button onClick={(() => {
              this.setState({ showDialog: true, dialogBody: 'This is a test of the Dialogue component -- DIALOG1. It used Material Components for the WEB.' });
            })}
              id="dlg1" raised={true} className="mdc-button mdc-button--raised">Show Dialog 1</Button>

            <br />

            <Button onClick={(() => {
              this.setState({ showDialog: true, dialogBody: 'This is a test of the Dialogue component -- DIALOG2. It used Material Components for the WEB.' });
            })}
              id="dlg2" raised={true} className="mdc-button mdc-button--raised">Show Dialog 2</Button>

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
              acceptText='AccepItt' declineText='DeclineIt'
            />
            </p>
          </div>
        </Grid>
      </div >

    )
  }

}

export default DialogEx;