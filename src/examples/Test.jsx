import React from 'react';
import MUIBase from '../lib/MUIBase';
import Grid from '../lib/Grid';
import Tabs from '../lib/Tabs';
import TabDetail from '../lib/TabDetail';
import Typography from '../lib/Typography';


// Examples
import MainHeader from '../app/MainHeader.jsx';

class Template extends MUIBase {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.injectMui().then(() => {

    }).catch((err) => {
      alert('injection error ' + err);
    });
  }

  render() {
    return (
      <div >
        <MainHeader />
          <div >
            <Typography font='display2'>Dialog</Typography>
            <p>
            </p>
          </div>
      </div >

    )
  }

}

export default Template;