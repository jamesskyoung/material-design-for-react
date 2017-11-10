import React from 'react';
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

  clickEvent(isChecked) {
    this.setState( {isChecked: isChecked });
  }

  render() {

    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid>
          <div span='2'></div>
          <div span='10'>
            <Typography font='display2'>Switch</Typography>
            <p>
            <br />
            <Switch isChecked={this.state.isChecked} id='my-great-switch' label='Enable notifications?' disabled={false}
              onClick={this.clickEvent.bind(this)} />
            <h3>Is checked? {this.state.isChecked ? 'true' : 'false'}</h3>
          </p>
          </div>
          
        </Grid>

      </div >

    )
  }

}

export default SwitchEx;