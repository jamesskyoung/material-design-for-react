import React from 'react';
import MUIBase from './MUIBase';
import mdDateTimePicker from 'md-date-time-picker/dist/js/mdDateTimePicker.js'

/**
 * Pickers
 * 
 * Props:
 * 
 */

class Pickers extends MUIBase {
  constructor(props) {
    super(props);


  }

  showDatePicker( onChange) {
    this._dtp = new mdDateTimePicker({
      orientation: 'PORTRAIT',
      type: undefined === this.props.type
        ? 'date'
        : this.props.type,
      trigger: document.body
    });

    this._dtp.onChange = onChange;
    this._dtp.toggle();

    this._dtp.trigger.addEventListener('onOk', this.selected.bind(this));

  }

  selected(event) {
   
    this._dtp.trigger.removeEventListener('onOk', this.selected);
    this._dtp.onChange( this._dtp.time );
  }

  render() {
    if ( !this.props.show ) {
      return <span />
    }
    require('md-date-time-picker/dist/css/mdDateTimePicker.css');
    this.showDatePicker( this.props.onChange);
    return (
      <span />
    )
  }

}

export default Pickers;

