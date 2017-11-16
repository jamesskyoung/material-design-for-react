import React from 'react';
import MUIBase from '../lib/MUIBase';
import Colourizer from '../lib/Colourizer';
import Grid from '../lib/Grid';
import Progress from '../lib/Progress';
import MainHeader from '../app/MainHeader.jsx';
import TextField from '../lib/TextField';
import Typography from '../lib/Typography';

class ProgressEx extends MUIBase {
  constructor(props) {
    super(props);

    this.state = {
      value: .5
    }

  }

  colourize(element) {
    return Colourizer.colourize(element);
  }

  render() {

    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid>
          <div span='1'></div>
          <div span='11'>
            <Typography font='display2'>Progress</Typography>
            <p>
              Material Design offers a few different progress bars that you can use... Here I show
              the two that my library currently supports.
            </p>
            <Typography font='display1'>Determinate</Typography>
            <p>
              <TextField type='text' id='myid' placeholder='Enter number between 1-100'
                onChange={((event) => {
                  //alert(event.target.value);
                  this.setState({ value: event.target.value / 100 });
                })} />
            </p>
            <p>
              <Progress id='p1' reverse={false} type='determinate' value={this.state.value} />
            </p>
            <p>
              Using a custom style with height: '16px'
            </p>
            <p>
              <Progress id='p2' style={{ height: '16px' }} reverse={false} type='determinate' value={this.state.value} />
            </p>
            <Typography font='display1'>Indeterminate</Typography>
            <p>
              <Progress id='p3' color='secondary' reverse={false} type='indeterminate' />
            </p>
            <p>
              Using reverse=true
            </p>
            <p>
              <Progress id='p3' reverse={true} type='indeterminate' />
            </p>


          </div>
          <div span='1'></div>
          <div span='11'>

            <div style={{ marginTop: '12px' }}></div>
            <Typography font='display1'>Component Properties &rarr; <strong>Progress</strong></Typography>
            <div style={{ marginTop: '12px' }}></div>
            <Typography font='body1'>

              <table cellSpacing={5} style={{ borderSpacing: '0px', padding: '6px' }}>
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
                  <tr ><td >color</td><td>String</td><td>primary</td><td>Primary or secondary color? (You can always use a style override)</td></tr>
                  <tr ><td >type</td><td>String</td><td>none</td><td>determinate | indeterminate</td></tr>
                  <tr><td>reverse</td><td>Boolean</td><td>false</td><td>Show the progress in 'reverse' (right to left)</td></tr>

                </tbody>
              </table>
              <div style={{ marginTop: '24px' }}></div>
              This page can be viewed here <a href='https://github.com/jamesskyoung/material-design-for-react/blob/master/src/examples/ProgressEx.jsx' target='_blank'>Here</a>

              <p>
                <Typography font='headline'>Code example</Typography>
              </p>

              <pre style={{ fontFace: 'Roboto Mono, monospace', padding: '6px', background: '#eee', borderRadius: '6px' }}>
                <code>
                  {this.colourize(
                    "<TextField type='text' id='myid' "
                    + "\n\tplaceholder='Enter number between 1-100'"
                    + "\n\tonChange={((event) => {"
                    + "\n\t\tthis.setState( {value: event.target.value / 100 } );"
                    + "\n\t})} />"

                    + "\n\n<Progress id='p1' reverse={false}"
                    + "\n\ttype='determinate' value={this.state.value} />"
                    + "\n\n"
                    + "\n<Progress id='p2' reverse={false}"
                    + "\n\ttype='indeterminate' />"

                  )}"

                  </code>
              </pre>

            </Typography>
          </div>

        </Grid>

      </div >

    )
  }

}

export default ProgressEx;