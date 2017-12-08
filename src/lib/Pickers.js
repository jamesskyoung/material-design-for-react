import React from 'react';
import MUIBase from './MUIBase';
import moment from 'moment';
import DateTimePicker from './DateTimePicker.js'
require('./css/DateTimePicker.css');
/**
 * Pickers
 * 
 * Props:
 * 
 */

class Pickers extends MUIBase {
  constructor(props) {
    super(props);

    this._dtpDate = new DateTimePicker({
      orientation: undefined === this.props.orientation // PORTRAIT || LANDSCAPE
        ? 'PORTRAIT'
        : this.props.orientation,
      type: 'date',
      future: undefined === this.props.dateUntil
        ? moment(new Date(), 'YYYY-MM-DD')
        : moment(this.props.dateUntil, 'YYYY-MM-DD'),
      onCancel: this.cancel.bind(this),
      onChange: this.selected.bind(this),
      trigger: document.body
    });

    this._dtpTime = new DateTimePicker({
      orientation: undefined === this.props.orientation // PORTRAIT || LANDSCAPE
        ? 'PORTRAIT'
        : this.props.orientation,
      type: 'time',
      onCancel: this.cancel.bind(this),
      onChange: this.selected.bind(this),
      trigger: document.body
    });

    document.getElementById('mddtp-picker__date').style.display = 'none'
    document.getElementById('mddtp-picker__time').style.display = 'none'
  }

  showPicker() {
    if (document.getElementById('mdfr-backgroundCover') === null) {
      this._bgChild = document.createElement('div');
      this._bgChild.id = 'mdfr-backgroundCover';
      this._bgChild.style = 'z-Index: 20;position: fixed;top:0; left:0;background: rgba(0,0,0,.6);width:100%;height:100%;)';
      document.body.appendChild(this._bgChild);
    } else {
      document.getElementById('mdfr-backgroundCover').style.display = 'block';
    }
    if (undefined === this.props.type) {
      this.props.type = 'date';
    }
    if (this.props.type.toLowerCase() === 'time') {
      this._dtpTime.onChange = undefined === this.props.onChange ? this.noop : this.props.onChange;
      this._dtpTime.onCancel = undefined === this.props.onCancel ? this.noop : this.props.onCancel;
      document.getElementById('mddtp-picker__time').style.display = 'block'
      this._dtpTime.show();
    } else {
      this._dtpDate.onChange = undefined === this.props.onChange ? this.noop : this.props.onChange;
      this._dtpDate.onCancel = undefined === this.props.onCancel ? this.noop : this.props.onCancel;
      document.getElementById('mddtp-picker__date').style.display = 'block'
      this._dtpDate.show();

    }

  }

  noop() {

  }

  cancel(event) {

    if (this.props.type.toLowerCase() === 'time') {
      this._dtpTime.hide();
      if (this._dtpTime.onCancel) {
        this._dtpTime.onCancel();
      }
    }
    else {
      this._dtpDate.hide();
      if (this._dtpDate.onCancel) {
        this._dtpDate.onCancel();
      }
    }
    this.removeBackground();
  }

  selected(event) {

    if (this.props.type.toLowerCase() === 'time') {
      this._dtpTime.hide();
      this._dtpTime.onChange(this._dtpTime.time);
    } else {
      this._dtpDate.hide();
      this._dtpDate.onChange(this._dtpDate.time);
    }

    try {
      // this._bgChild.remove();
    } catch (err) {
      alert(err);
    }
    this.removeBackground();
  }

  removeBackground() {
    this._bgChild.remove();
    document.getElementById('mddtp-picker__date').style.display = 'none'
    document.getElementById('mddtp-picker__time').style.display = 'none'
}

render() {
  if (!this.props.show) {
    return <span />;
  }

  this.showPicker();
  return (
    <span />
  )
}

}

export default Pickers;

