import React from 'react';
import Colourizer from '../lib/Colourizer';
import Grid from '../lib/Grid';
import Checkbox from '../lib/Checkbox';
import MainHeader from '../app/MainHeader.jsx';
import Typography from '../lib/Typography';

class CheckboxEx extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cb1Checked: true,
      cb1Value: 'Checkbox1 value'
    }

  }

  colourize(element) {
    return Colourizer.colourize(element);
  }


  clickEvent(event, id, isChecked) {
    console.log(id, isChecked);
    let cb1Checked = false;

    if (id === 'cb1') {
      cb1Checked = isChecked;
    }

    this.setState({ cb1Checked: cb1Checked });
  }

  render() {

    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid>
          <div span='1'></div>
          <div span='5'>
            <Typography font='display2'>Checkbox</Typography>
            <p>
              The Material Checkbox functions just like a standard checkbox (it is backed by the standard <code>input type='checkbox'</code> element).
            </p>
            <p>
              The only difference is the styling.
            </p>
            <p>
              <Checkbox id='cb1' label='Checkbox 1' name='cbExample' value={this.state.cb1Value} isChecked={this.state.cb1Checked} onClick={this.clickEvent.bind(this)} />
            </p>
          </div>
          <div span='5'>

            <div style={{ textAlign: 'left', }} span='5'>

              <div style={{ marginTop: '12px' }}></div>
              <Typography font='display1'>Component Properties &rarr; <strong>Card</strong></Typography>
              <div style={{ marginTop: '12px' }}></div>
              <Typography font='body1'>

                <table cellSpacing={5} style={{ borderSpacing: '0px', padding: '6px', color: 'white', backgroundImage: 'url("images/16-9.jpg")' }}>
                  <thead style={{ padding: '6px' }}>
                    <tr >
                      <th style={{ borderBottom: '1px solid #eee' }}>Name</th>
                      <th style={{ borderBottom: '1px solid #eee' }}>Type</th>
                      <th style={{ borderBottom: '1px solid #eee' }}>Default</th>
                      <th style={{ borderBottom: '1px solid #eee' }}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr ><td >id</td><td>int</td><td>none</td><td>The ID for this Checkbox</td></tr>
                    <tr ><td >label</td><td>String</td><td>none</td><td>The label for this Checkbox</td></tr>
                    <tr><td>name</td><td>String</td><td>none</td><td>The name attribute fr this Checkbix</td></tr>
                    <tr><td>isChecked</td><td>Boolean</td><td>false</td><td>Is it 'checked'?</td></tr>
                    <tr><td>onClick</td><td>Function</td><td>none</td><td>The onCLick handler (optional)</td></tr>
                  </tbody>
                </table>
                <div style={{ marginTop: '24px' }}></div>
                This page can be viewed here <a href='https://github.com/jamesskyoung/reactmaterial/blob/development/src/examples/CheckboxEx.jsx' target='_blank'>Here</a>

                <p>
                  <Typography font='headline'>Code example</Typography>
                </p>

                <pre style={{ fontFace: 'Roboto Mono, monospace', padding: '6px', background: '#eee', borderRadius: '6px' }}>
                  <code>
                    {this.colourize(
                      "/** "
                      + "\n * The clickEvent receives the event object, "
                      + "\n * the id and checked (true | false) "
                      + "\n */"
                      + "\nclickEvent(event, id, isChecked) {"
                      + "\n\tthis.setState({ cb1Checked: cb1Checked });"
                      + "\n}"
                      + "\n\n<Checkbox id='cb1' "
                      + "\n\tlabel='Checkbox 1' "
                      + "\n\tname='cbExample' "
                      + "\n\tvalue={this.state.cb1Value} "
                      + "\n\tisChecked={this.state.cb1Checked} "
                      + "\n\tonClick={this.clickEvent.bind(this)} />")}

                  </code>
                </pre>

              </Typography>
            </div>

          </div>

        </Grid>

      </div >

    )
  }

}

export default CheckboxEx;