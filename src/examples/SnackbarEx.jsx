import React from 'react';
import Colourizer from '../lib/Colourizer';
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


  colourize(element) {
    return Colourizer.colourize(element);
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
          <div span='1'></div>
          <div span='11'>
            <Typography font='display2'>Snackbar</Typography>
            <p>
              <Button raised={true} onClick={this.show.bind(this)} >Show Snackbar!</Button >
              <Snackbar message='Sample snackbar message' actionText='UNDO!' position='center'
                show={this.state.show}
                dismissOnAction={false}
                onClick={this.actionHandler.bind(this)}
                timeout={5000}
                multiline={false}
                actionOnBottom={true}
              />
            </p>
          </div>
          <div span='1'></div>
          <div style={{ textAlign: 'left' }} span='11'>
            <Typography font='display1'>About &rarr; <strong>Snackbar</strong></Typography>
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
                <tr ><td >message</td><td>String</td><td>none</td><td>The message to display.</td></tr>
                <tr ><td >actionText</td><td>String</td><td>none</td><td>Text of the action</td></tr>
                <tr ><td >show</td><td>Boolean</td><td>false</td><td>Show the snackBar?</td></tr>
                <tr ><td >dismissOnAction</td><td>Boolean</td><td>false</td><td>Dismiss as soon as action is clicked?</td></tr>
                <tr ><td >timeout</td><td>int</td><td>2750</td><td>Timeout. How long is the snackBar visible?</td></tr>
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
                  "actionHandler() {"
                  + "\n   alert('Action from snackbar!');"
                  + "\n   this.setState({ show: false });"
                  + "\n }"
                  + "\nshow() {"
                  + "\n   this.setState({ show: true });"
                  + "\n }"
                  + "\n\n<Button raised={true} onClick={this.show.bind(this)} >Show Snackbar!</Button >"
                  + "\n "
                  + "\n<Snackbar message='Sample snackbar message' actionText='UNDO!' position='center'"
                  + "\n    show={this.state.show}"
                  + "\n    dismissOnAction={false}"
                  + "\n    onClick={this.actionHandler.bind(this)}"
                  + "\n    timeout={5000}"
                  + "\n    multiline={false}"
                  + "\n    actionOnBottom={true}"
                  + "\n/>")}

              </code>
            </pre>
          </div>
        </Grid>

      </div >

    )
  }

}

export default SnackbarEx;