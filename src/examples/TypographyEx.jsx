import React from 'react';
import Colourizer from '../lib/Colourizer';
import Grid from '../lib/Grid';
import MainHeader from '../app/MainHeader.jsx';
import Typography from '../lib/Typography';

class TypographyEx extends React.Component {
  constructor(props) {
    super(props);

  }

  colourize(element) {
    return Colourizer.colourize(element);
  }

  render() {

    return (
      <div className="mdc-typography--body1">
        <MainHeader />
        <Grid style={{display: 'flex'}}>
          <div span='1'></div>
          <div span='11' style={{ textAlign: 'left' }}>
            <Typography font='display2'>Typography</Typography>
            <p>
              <Typography font='display1'>About &rarr; <strong>Typography</strong></Typography>
            </p>
            <p>
              A good way to use typography is to simply supply mdc-class-typography or
          mdc-class-typography--body1
          as the className of your outermost div.
          </p>
            <p>There is only one mandatory property
          passed to the Typography component. 'font'. For example:
          </p>
            <pre style={{
              fontFace: 'Roboto Mono, monospace', padding:
              '6px', background: '#eee',
              borderRadius: '6px'
            }}>
              <code>
                {this.colourize(
                  "<Typography font='display1'>This is the display 1 font</Typography>")}
              </code>
            </pre>
            <p>
              You can also pass an optional className(s) via
              <pre style={{
                fontFace: 'Roboto Mono, monospace', padding:
                '6px', background: '#eee',
                borderRadius: '6px'
              }}>
                <code>className='class1 class2 class3'</code>
              </pre>
              </p>
          </div>

            <div span='1'></div>
            <div span='11' style={{ textAlign: 'left' }}>
              <h2>Typography Examples</h2>
              <p><Typography font='display4'>display4</Typography></p>
              <p><Typography font='display3'>display3</Typography></p>
              <p><Typography font='display2'>display2</Typography></p>
              <p><Typography font='display1'>display1</Typography></p>

              <p><Typography font='headline'>headline</Typography></p>
              <p><Typography font='title'>title</Typography></p>
              <p><Typography font='subheading2'>subheading2</Typography></p>
              <p><Typography font='subheading1'>subheading1</Typography></p>

              <p><Typography font='body2'>body2</Typography></p>
              <p><Typography font='body1'>body1</Typography></p>
              <p><Typography font='caption'>caption</Typography></p>
              <p><Typography font='button'>button</Typography></p>
              <p><Typography font='adjust-margin'>adjust-margin</Typography></p>

            </div>

          

        </Grid>
      </div>

        );
  }

}

export default TypographyEx;