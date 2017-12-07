import React from 'react';
import MUIBase from './MUIBase';
import moment from 'moment';
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

  showPicker() {
    this._dtp = new mdDateTimePicker({
      orientation: undefined === this.props.orientation // PORTRAIT || LANDSCAPE
        ? 'PORTRAIT'
        : this.props.orientation,
      type: undefined === this.props.type
        ? 'date'
        : this.props.type,
      future: moment('2018-02-01', 'YYYY-MM-DD'),
      trigger: document.body
    });

    this._dtp.onChange = this.props.onChange;
   // this._dtp.toggle();
    this._dtp.show();

    this._dtp.trigger.addEventListener('onOk', this.selected.bind(this));

  }

  selected(event) {
    alert(this._dtp.trigger);
    this._dtp.hide();
    var old_element = this._dtp.trigger;
   // var new_element = old_element.cloneNode(true);
   // old_element.parentNode.replaceChild(new_element, old_element); I
    this._dtp.onChange(this._dtp.time);
    this._dtp = null;
  }

  render() {
    if (!this.props.show) {
      return <span />
    }
    require('md-date-time-picker/dist/css/mdDateTimePicker.css');
    this.showPicker();
    return (
      <span />
    )
  }

}

export default Pickers;

