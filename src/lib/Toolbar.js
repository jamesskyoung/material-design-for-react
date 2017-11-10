import React from 'react';
import MUIBase from './MUIBase';

/**
 * Button
 * 
 * Props:
 * id: idToBeUsed
 * raised: true | false.  Default is false
 * style={styleObject}
 */

class Toolbar extends MUIBase {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }

  }

  componentDidMount() {
    this.injectMui().then(() => {
      // if FIXED Header
      if (this.props.fixed) {
        var toolbar = mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
        toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
      } else {
        document.querySelector('.mdc-toolbar-fixed-adjust').style.display='none';
      }

    }).catch((err) => {
      alert('injection error ' + err);
    });

  }

  render() {
    let className = 'mdc-toolbar';
    if (this.props.fixed) {
      className += ' mdc-toolbar--fixed';
    }

    return (
      <div style={this.getStyle(this.props)}>
        <header className={className}>
          <div className="mdc-toolbar__row">
            <section style={{ alignItems: 'center' }} className="mdc-toolbar__section mdc-toolbar__section--align-start">
              <span className="catalog-back rm-menu-container">

              </span>
              <span className="mdc-toolbar__title catalog-title">{this.props.title}</span>
              <section className="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar">
                <a href="#" className="material-icons mdc-toolbar__icon" aria-label="Settings" alt="Settings">settings</a>
                <a href="#" className="material-icons mdc-toolbar__icon" aria-label="Download" alt="Download">file_download</a>
                <a href="#" className="material-icons mdc-toolbar__icon" aria-label="Print this page" alt="Print this page">print</a>
                <a href="#" className="material-icons mdc-toolbar__icon" aria-label="Bookmark this page" alt="Bookmark this page">bookmark</a>
              </section>
            </section>
          </div>
        </header>
        <main className='mdc-toolbar-fixed-adjust'>

          <span />

        </main>
      </div>
    )
  }

}

export default Toolbar;
