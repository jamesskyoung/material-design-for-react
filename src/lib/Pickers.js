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

  selected(event) {
    alert(this._dtp);
    let value = this._dtp.time.toString();
    alert('selected..' + value);
    this._dtp.trigger.removeEventListener('onOk', this.selected);
  }

  render() {

    if (document.body === undefined) {
      return <span />;
    }
    this._dtp = new mdDateTimePicker({
      type: undefined === this.props.type 
            ? 'date' 
            : this.props.type,
      trigger: document.body
    });

    this._dtp.trigger.addEventListener('onOk', this.selected.bind(this) );
    require('md-date-time-picker/dist/css/mdDateTimePicker.css');
    return (
      <div style={{ display: 'inline-flex' }}>
        Pickers
            {this._dtp.toggle()}
      </div>
    )
  }

}

export default Pickers;

