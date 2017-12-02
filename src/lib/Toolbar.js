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
       // toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
      } else {
        document.querySelector('.mdc-toolbar-fixed-adjust').style.display='none';
      }

    }).catch((err) => {
      alert('toolbar injection error ' + err);
    });

  }

  render() {
    let className = 'mdc-toolbar';
    let outerStyle=this.getStyle(this.props);
    if (this.props.fixed) {
      className += ' mdc-toolbar--fixed';
      outerStyle.marginTop = '64px';
    }

    return (
      <div style={outerStyle}>
        <header className={className}>
          <div className="mdc-toolbar__row">
            <section style={{ alignItems: 'center' }} className="mdc-toolbar__section mdc-toolbar__section--align-start">
              <span className="catalog-back rm-menu-container">

              </span>
              <span className="mdc-toolbar__title catalog-title">{this.props.title}</span>
              <section className="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar">
                {this.props.children}
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
