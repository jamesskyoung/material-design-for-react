import React from 'react';
import MUIBase from './MUIBase';

/**
 * Switch
 * 
 * Props:
 * 
 */

class Typography extends MUIBase {
  constructor(props) {
    super(props);

  }

  //background-color: var(--mdc-theme-secondary,#ff4081);

  render() {

    return (
      <span style={this.props.style} className={'mdc-typography--' + this.props.font}>{this.props.children}</span>
    );
  }

}

export default Typography;

