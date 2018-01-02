import React from 'react';
import MUIBase from './MUIBase';

/**
 * ListItem
 * 
 * Props:
 * 
 */

class ListItem extends MUIBase {
  constructor(props) {
    super(props);


  }

  //mdc-list-item__start-detail  and mdc-list-item__end-detail

  render() {
    let className = (undefined === this.props.align ? 'mdc-list-item__start-detail' 
      : 'mdc-list-item mdc-list-item mdc-list-item__' + this.props.align.toLowerCase() + '-detail');

    return (
      <li style={this.getStyle()} className={'mdc-list-item'}>
        {this.props.children}
      </li>
    )
  }

}

export default ListItem;

