import React from 'react';
import Grid from '../lib/Grid';
import MainHeader from '../app/MainHeader.jsx';
import Typography from '../lib/Typography';

class TypographyEx extends React.Component {
  constructor(props) {
    super(props);

  }
  /*
  
  mdc-typography--headline	Sets font properties as Headline
  mdc-typography--title	Sets font properties as Title
  mdc-typography--subheading2	Sets font properties as Subheading 2
  mdc-typography--subheading1	Sets font properties as Subheading 1
  mdc-typography--body2	Sets font properties as Body 2
  mdc-typography--body1	Sets font properties as Body 1
  mdc-typography--caption	Sets font properties as Caption
  mdc-typography--button	Sets font properties as Button
  mdc-typography--adjust-margin
  
  */

  render() {

    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid>
          <div span='2'></div>
          <div span='10' style={{textAlign: 'left'}}>
            <h2>Typography Example</h2>
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