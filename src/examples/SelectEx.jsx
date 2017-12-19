import React from 'react';
import Grid from '../lib/Grid';
import Colourizer from '../lib/Colourizer';
import Select from '../lib/Select';
import MainHeader from '../app/MainHeader.jsx';
import Typography from '../lib/Typography';

class RadioEx extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { value: 'option 1', enabled: true },
        { value: 'option 2', enabled: true},
        { value: 'option 3 is disabled', enabled: false },
        { value: 'option 4', enabled: true },
        { value: 'option 5 is disabled', enabled: false },
        { value: 'option 6', enabled: true },
        { value: 'option 7', enabled: true }
      ],
      options2: [
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

  colourize(element) {
    return Colourizer.colourize(element);
  }

  clickEvent(index, value) {
   // console.log(index, value);
    console.log('ClickEvent1-You selected ' + value + ' at index: ' + index);

  }

  clickEvent2(index, value) {
  //  console.log(index, value);
    console.log('ClickEvent2-You selected ' + value + ' at index: ' + index);

  }

  render() {

    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid style={{display: 'flex'}}>
          <div span='1'></div>
          <div span='11'>
            <Typography font='display2'>Select</Typography>
            <p>
              The Material Select functions in a similar fashion to a standard select.
            </p>
            <p>
              The only difference is the styling and the way that you pass your options. (See the example code below.)
            </p>
            <p>
              <Select  id='select1' title='Select...'
                options={this.state.options}
                onClick={this.clickEvent.bind(this)} 
                value='option 6' />

            </p>

            <p>
              <Select  id='select2' title='Select...'
                options={this.state.options2}
                onClick={this.clickEvent2.bind(this)} 
                value='option 2' />

            </p>
            
          </div>

          <div span='1'></div>
          <div span='11'>
            <Typography font='display1'>About &rarr; <strong>Select</strong></Typography>
            <div style={{ marginTop: '12px' }}></div>


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
                <tr ><td >title</td><td>String</td><td>none</td><td>The initial text that appears in the Select</td></tr>
                <tr ><td >onClick</td><td>Function</td><td>none</td><td>Function that is invoked on a selecton.  It is passed index and value.</td></tr>
                <tr ><td >options</td><td>Array</td><td>none</td><td>An array of objects -- See example code below.</td></tr>
                <tr ><td >value</td><td>string</td><td>none</td><td>Value to be set.  (This must exist in the options array of course.)</td></tr>
              </tbody>
            </table>
            <div style={{ marginTop: '24px' }}></div>
            This page can be viewed here <a href='https://github.com/jamesskyoung/material-design-for-react/blob/master/src/examples/SelectEx.jsx' target='_blank'>Here</a>

            <p>
              <Typography font='headline'>Code example</Typography>
            </p>
            <p>
            To select an option, use value.  In the example below, 'option 4' will be selected.
              </p>
            <pre style={{
              fontFace: 'Roboto Mono, monospace', padding:
              '6px', background: '#eee',
              borderRadius: '6px'
            }}>
              <code>
                {this.colourize(
                  "this.state = {"
                  + "\n  options: ["
                  + "\n     { value: 'option 1', enabled: true },"
                  + "\n     { value: 'option 2', enabled: true, selected: true },"
                  + "\n     { value: 'option 3 is disabled', enabled: false },"
                  + "\n     { value: 'option 4', enabled: true },"
                  + "\n     { value: 'option 5 is disabled', enabled: false },"
                  + "\n     { value: 'option 6', enabled: true },"
                  + "\n     { value: 'option 7', enabled: true }"
                  + "\n  ]"
                  + "\n}"
                  + "\n\nclickEvent(index, value) {"
                  + "\n     console.log(index, value);"
                  + "\n     alert('You selected ' + value + ' at index: ' + index);"
                  + "\n "
                  + "\n}"
                  + "\n\n<Select id='select1' "
                  + "\n    title='Select one of these...' "
                  + "\n    options={this.state.options} "
                  + "\n    onClick={this.clickEvent.bind(this)} "
                  + "\n    value='option 4' />\n\n")}

              </code>
            </pre>

          </div>

        </Grid>

      </div >

    )
  }

}

export default RadioEx;