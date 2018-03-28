import React from 'react';
import MUIBase from './MUIBase';

/**
 * Dialog
 * 
 * Props:
 * id: idToBeUsed
 * title: Title
 * body: Body text
 * buttons: An array of button objects that are placed in the dialogue footer
 * style={styleObject}
 */

class Dialog extends MUIBase {
  constructor(props) {
    super(props);

    this._dialog = null;
    this._show = false;

    this.state = {
      id: props.id
    }


  }

  componentDidMount() {
    this.injectMui().then(() => {
      //
    }).catch((err) => {
      alert('injection error ' + err);
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ id: nextProps.id, show: nextProps.show });
    this._show = nextProps.show;
  }

  /**
   * Show the dialog?  Or not?
   */
  shouldComponentUpdate() {

    if (!this._show) {
      return false;
    }

    if (this._dialog === null) {
      this._dialog = new mdc.dialog.MDCDialog(document.getElementById(this.state.id));
    }

    this._dialog.listen('MDCDialog:accept', () => {
      if (this._dialog === null) {
        return false;
      }
      this._dialog.close();
      this._dialog = null;
      this._show = false;
      this.props.onAccept();
      setTimeout(() => {
        // ff and ie bugs
        document.getElementById(this.state.id).classList.remove( 'mdc-dialog--animating');
      }, 100);

      return false;

    });
    this._dialog.listen('MDCDialog:cancel', () => {
      if (this._dialog === null) {
        return false;
      }
      this._dialog.close();
      this._dialog = null;
      this._show = false;
      this.props.onCancel();
      return false;

    });

    if (this._show) {
      this._dialog.show();
    }

    return true;
  }

  render() {

    
    return (
      <div style={{ display: 'inline-flex' }}>
        <aside id={this.props.id}
          className="mdc-dialog"
          role="alertdialog"
          aria-hidden="true"
          aria-labelledby="mdc-dialog-default-label"
          aria-describedby="mdc-dialog-default-description">
          <div className="mdc-dialog__surface">
            <header className="mdc-dialog__header">
              <h2 id="mdc-dialog-default-label" className="mdc-dialog__header__title">
                {this.props.title}
              </h2>
            </header>
            <section id="mdc-dialog-default-description" className="mdc-dialog__body">
              {this.props.body}
            </section>
            <footer className="mdc-dialog__footer">
              {this.props.declineText 
                ? <button value='dlgbuttoncancel' type="button" className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel">{this.props.declineText}</button>
                : <span />
              }
              
              <button value='dlgbuttonok' type="button" className="mdc-button mdc-dialog__footer__button mdc-button--raised mdc-dialog__footer__button--accept">{this.props.acceptText}</button>
            </footer>
          </div>
          <div className="mdc-dialog__backdrop"></div>
        </aside>

      </div>

    )
  }

}

export default Dialog;