import React from 'react';
import MUIBase from './MUIBase';
import Menus from '../lib/Menus';
import TextField from '../lib/TextField';
import Theme from '../lib/Theme';

// Examples
import HeaderEx from '../examples/HeaderEx.jsx';

class TabDetail extends MUIBase {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div>
        {this.props.children}
      </div >

    )
  }

}

export default TabDetail;