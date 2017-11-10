import React from 'react';
import Button from '../lib/Button';
import Grid from '../lib/Grid';
import MainHeader from '../app/MainHeader.jsx';
import Snackbar from '../lib/Snackbar';
import Typography from '../lib/Typography';


class SnackbarEx extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }

  }

  actionHandler() {
    alert('Action from snackbar!');
    this.setState({ show: false });
  }

  show() {
    this.setState({ show: true });
  }

  render() {

    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid>
          <div span='2'></div>
          <div span='10'>
            <Typography font='display2'>Snackbar</Typography>
            <p>
              <Button raised={true} onClick={this.show.bind(this)} >Show Snackbar!</Button >
              <Snackbar message='Sample snackbar message' actionText='UNDO!' position='xleft'
                show={this.state.show}
                dismissOnAction={false}
                onClick={this.actionHandler.bind(this)}
                //timeout={5000}
                multiline={false}
                actionOnBottom={true}
              />
            </p>
          </div>
        </Grid>

      </div >

    )
  }

}

export default SnackbarEx;