import React from 'react';
import MUIBase from './MUIBase';

/**
 * Switch
 * 
 * Props:
 * 
 */

class Snackbar extends MUIBase {
  constructor(props) {
    super(props);

    this._snackbar = null;
    this._show = false;

  }

  componentDidMount() {
    this.injectMui().then(() => {
      var MDCSnackbar = mdc.snackbar.MDCSnackbar;
      this._snackbar = new MDCSnackbar(document.getElementById('mdc-js-snackbar'));
     // this.show();
    }).catch((err) => {
      alert('injection error ' + err);
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ id: nextProps.id, show: nextProps.show });
    this._show = nextProps.show;
    console.log( 'cwrp: ' + this._show );
  }

  shouldComponentUpdate() {

    if (!this._show) {
      return false;
    } else {

      this.show();
      return true;

    }
  }

  show() {

    this._snackbar.dismissesOnAction = (undefined === this.props.dismissOnAction ? true : this.props.dismissOnAction);
    var data = {
      message: this.props.message,
      actionOnBottom: (undefined === this.props.actionOnBottom ? false : this.props.actionOnBottom), //multilineInput.checked,
      multiline: (undefined === this.props.multiline ? false : this.props.multiline), //multilineInput.checked,
      timeout: (undefined === this.props.timeout ? 2750 : this.props.timeout)
    };
    if (true) {
      data.actionText = this.props.actionText;
      data.actionHandler = () => {
        console.log(data);
        if (undefined !== this.props.onClick) {
          this.props.onClick();
        }
      }
    }
    this._snackbar.show(data);
  }


  //mdc-snackbar--align-start
  //

  render() {
    let position = '';
    if (undefined !== this.props.position) {
      if (this.props.position.toLowerCase() === 'left') {
        position = 'mdc-snackbar--align-start';
      }
    }
    return (
      <div id="mdc-js-snackbar"
        className={"mdc-snackbar " + position}
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden="true">
        <div className="mdc-snackbar__text"></div>
        <div className="mdc-snackbar__action-wrapper">
          <button type="button" className="mdc-snackbar__action-button"></button>
        </div>
      </div>

    )
  }

}

export default Snackbar;

