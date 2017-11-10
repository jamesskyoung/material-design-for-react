import React from 'react';
import Grid from '../lib/Grid';
import Select from '../lib/Select';
import MainHeader from '../app/MainHeader.jsx';
import Typography from '../lib/Typography';

class RadioEx extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { value: 'option 1', enabled: true },
        { value: 'option 2', enabled: true },
        { value: 'option 3 is disabled', enabled: false },
        { value: 'option 4', enabled: true },
        { value: 'option 5 is disabled', enabled: false },
        { value: 'option 6', enabled: true },
        { value: 'option 7', enabled: true }
      ]
    }

  }

  clickEvent(index, value) {
    console.log(index, value);
    alert('You selected ' + value + ' at index: ' + index);

  }

  render() {

    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid>
          <div span='2'></div>
          <div span='10'>
            <Typography font='display2'>Select</Typography>
            <p>
              <Select id='select1' label='Checkbox 1' title='Select one of these...' options={this.state.options} onClick={this.clickEvent.bind(this)} />
            </p>
          </div>

        </Grid>

      </div >

    )
  }

}

export default RadioEx;