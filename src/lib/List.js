import React from 'react';
import MUIBase from './MUIBase';

/**
 * Switch
 * 
 * Props:
 * 
 */

class List extends MUIBase {
  constructor(props) {
    super(props);

    this._snackbar = null;
    this._show = false;

  }


  render() {
    return (
      <ul style={this.getStyle()} className="mdc-list">
        {this.props.children}
      </ul>
    )
  }

}

export default List;

