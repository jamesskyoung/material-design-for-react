import React from 'react';
import MUIBase from '../lib/MUIBase';
import Grid from '../lib/Grid';
import MainHeader from '../app/MainHeader.jsx';
import Typography from '../lib/Typography';
import TextField from '../lib/TextField';


class TextFieldEx extends MUIBase {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid>
          <div span='2'></div>
          <div span='10'>
            <Typography font='display2'>Textfield</Typography>
            <p>
              <TextField type='text' id='myid' placeholder='Hover above' />
            </p>
          </div>
        </Grid>
      </div >

    )
  }

}

export default TextFieldEx;