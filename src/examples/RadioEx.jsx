import React from 'react';
import Colourizer from '../lib/Colourizer';
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


  colourize(element) {
    return Colourizer.colourize(element);
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
          <div span='1'></div>
          <div span='11'>
            <Typography font='display2'>Radio Button</Typography>
            <p>
              <Radio id='radio1' label='Radio 1' name='radioExample' value={this.state.radio1Value} isChecked={this.state.radio1Checked} onClick={this.clickEvent.bind(this)} />
              <Radio id='radio2' label='Radio 2' name='radioExample' value={this.state.radio2Value} isChecked={this.state.radio2Checked} onClick={this.clickEvent.bind(this)} />
              <Radio id='radio3' label='Radio 3' name='radioExample' value={this.state.radio3Value} isChecked={this.state.radio3Checked} onClick={this.clickEvent.bind(this)} />
              <Radio id='radio4' label='Radio 4' name='radioExample' value={this.state.radio4Value} isChecked={this.state.radio4Checked} onClick={this.clickEvent.bind(this)} />
            </p>
          </div>
          <div span='1'></div>
          <div span='11'>
            <Typography font='display1'>About &rarr; <strong>Menus</strong></Typography>

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
                <tr ><td >trigger</td><td>id</td><td>none</td><td>IF of element that will fire a click event that the Menu will listen to.</td></tr>
              </tbody>
            </table>
            <div style={{ marginTop: '24px' }}></div>
            This page can be viewed here <a href='https://github.com/jamesskyoung/reactmaterial/blob/development/src/examples/CardEx.jsx' target='_blank'>Here</a>

            <p>
              <Typography font='headline'>Code examples</Typography>
            </p>

            <pre style={{
              fontFace: 'Roboto Mono, monospace', padding:
              '6px', background: '#eee',
              borderRadius: '6px'
            }}>
              <code>
                {this.colourize(
                  "<Radio id='radio1' "
                  + "\n    label='Radio 1' "
                  + "\n    name='radioExample' "
                  + "\n    value={this.state.radio1Value} "
                  + "\n    isChecked={this.state.radio1Checked} "
                  + "\n    onClick={this.clickEvent.bind(this)} />"
                  + "\n\n<Radio id='radio2' "
                  + "\n    label='Radio 2' "
                  + "\n    name='radioExample' "
                  + "\n    value={this.state.radio2Value} "
                  + "\n    isChecked={this.state.radio2Checked} "
                  + "\n    onClick={this.clickEvent.bind(this)} />")}

              </code>
            </pre>
          </div>

        </Grid >

      </div >

    )
  }

}

export default RadioEx;