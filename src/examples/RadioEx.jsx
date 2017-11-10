import React from 'react';
import Grid from '../lib/Grid';
import Radio from '../lib/Radio';
import MainHeader from '../app/MainHeader.jsx';
import Typography from '../lib/Typography';

class RadioEx extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      radio1Checked: false,
      radio2Checked: false,
      radio3Checked: false,
      radio4Checked: false,
      radio1Value: 'radio 1 value',
      radio2Value: 'radio 2 value',
      radio3Value: 'radio 3 value',
      radio4Value: 'radio 4 value'
    }

  }

  clickEvent(event, id, name, value) {
    console.log(id, name, value);
    let radio1Checked, radio2Checked, radio3Checked, radio4Checked = false;

    if (id === 'radio1') {
      radio1Checked = true;
    } else if (id === 'radio2') {
      radio2Checked = true;
    } else if (id === 'radio3') {
      radio3Checked = true;
    } else if (id === 'radio4') {
      radio4Checked = true;
    }

    this.setState({ radio1Checked: radio1Checked, radio2Checked: radio2Checked, radio3Checked: radio3Checked, radio4Checked: radio4Checked });
  }

  render() {

    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid>
          <div span='2'></div>
          <div span='10'>
            <Typography font='display2'>Radio Button</Typography>
            <p>
              <Radio id='radio1' label='Radio 1' name='radioExample' value={this.state.radio1Value} isChecked={this.state.radio1Checked} onClick={this.clickEvent.bind(this)} />
              <Radio id='radio2' label='Radio 2' name='radioExample' value={this.state.radio2Value} isChecked={this.state.radio2Checked} onClick={this.clickEvent.bind(this)} />
              <Radio id='radio3' label='Radio 3' name='radioExample' value={this.state.radio3Value} isChecked={this.state.radio3Checked} onClick={this.clickEvent.bind(this)} />
              <Radio id='radio4' label='Radio 4' name='radioExample' value={this.state.radio4Value} isChecked={this.state.radio4Checked} onClick={this.clickEvent.bind(this)} />
            </p>
          </div>

        </Grid>

      </div >

    )
  }

}

export default RadioEx;