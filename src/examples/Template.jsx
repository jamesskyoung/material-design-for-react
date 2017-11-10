import React from 'react';
import MUIBase from '../lib/MUIBase';
import Grid from '../lib/Grid';
import Tabs from '../lib/Tabs';
import TabDetail from '../lib/TabDetail';
import Typography from '../lib/Typography';


// Examples
import MainHeader from '../app/MainHeader.jsx';

class Template extends MUIBase {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.injectMui().then(() => {

    }).catch((err) => {
      alert('injection error ' + err);
    });
  }

  render() {
    return (
      <div>
        <header className="mdc-toolbar mdc-toolbar--fixed">
          <div className="mdc-toolbar__row">
            <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
              <span className="catalog-back">
                <a href="/" className="mdc-toolbar__menu-icon"><i className="material-icons">&#xE5C4;</i></a>
              </span>
              <span className="mdc-toolbar__title catalog-title">Permanent Drawer Below Toolbar</span>
            </section>
          </div>
        </header>

        <div className="demo-content mdc-toolbar-fixed-adjust">
          <nav className="mdc-permanent-drawer">
            <div className="mdc-list-group">
              <nav className="mdc-list">
                <a className="mdc-list-item mdc-permanent-drawer--selected" href="#">
                  <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>Inbox
            </a>
                <a className="mdc-list-item" href="#">
                  <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>Star
            </a>
                <a className="mdc-list-item" href="#">
                  <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">send</i>Sent Mail
            </a>
                <a className="mdc-list-item" href="#">
                  <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">drafts</i>Drafts
            </a>
              </nav>

              <hr className="mdc-list-divider" />

              <nav className="mdc-list">
                <a className="mdc-list-item" href="#">
                  <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">email</i>All Mail
            </a>
                <a className="mdc-list-item" href="#">
                  <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">delete</i>Trash
            </a>
                <a className="mdc-list-item" href="#">
                  <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">report</i>Spam
            </a>
              </nav>
            </div>
          </nav>
          <main className="demo-main">
            <h1 className="mdc-typography--display1">Permanent Drawer</h1>
            <p className="mdc-typography--body1">It sits to the left of this content.</p>
            <div className="extra-content-wrapper">
              <button id="toggle-wide">Toggle extra-wide content</button>
              <div id="extra-wide-content" className="mdc-elevation--z2">&nbsp;</div>
            </div>
            <div className="extra-content-wrapper">
              <button id="toggle-tall">Toggle extra-tall content</button>
              <div id="extra-tall-content" className="mdc-elevation--z2">&nbsp;</div>
            </div>
          </main>
        </div>
      </div>

    )
  }

}

export default Template;