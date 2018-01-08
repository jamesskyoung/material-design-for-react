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

class Drawer extends MUIBase {
  constructor(props) {
    super(props);
    this.state = {
      forceTemporary: (window.innerWidth < 760) ? true : false
    }

  }

  componentDidMount() {
    this.injectMui().then(() => {
      window.addEventListener('resize', this.doResize.bind(this));
      //<a href="#" className="mdc-toolbar__menu-icon rm-menu"><i className="material-icons">menu</i></a>
      let type = undefined === this.props.type ? '' : this.props.type;
      if (type.toLowerCase() === 'temporary') {
        let menu = document.querySelector('.rm-menu-container');
        if (menu === null) {
          return;
        } else {
          menu.innerHTML = '<a href="JavaScript:void(0);" class="mdc-toolbar__menu-icon rm-menu"><i class="material-icons">menu</i></a>';
        }
      }

      var drawerEl = document.querySelector('.mdc-temporary-drawer');
      if (drawerEl === null) {
        return;
      }

      var MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
      var drawer = new MDCTemporaryDrawer(drawerEl);
      document.querySelector('.rm-menu').addEventListener('click', function () {
        drawer.open = true;
      });
      drawerEl.addEventListener('MDCTemporaryDrawer:open', ((event) => {
        return;
      }));
      drawerEl.addEventListener('MDCTemporaryDrawer:close', ((event) => {
        return;
      }));
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.doResize);
  }

  doConstructTempDrawer() {


  }
  
  doResize() {
    if (this._resizing) {
      return;
    }
    this._resizing = true;
    let menu = document.querySelector('.rm-menu-container');
    //    console.log('Resize.  Width: ' + window.innerWidth + ' Height: ' + window.innerHeight);
   
    this._resizing = false;
  }

  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  getDrawer() {
    let type = undefined === this.props.type ? '' : this.props.type;
    if (this.state.forceTemporary) {
      type = 'temporary';
    }
    if (type.toLowerCase() === 'temporary') {
      return <div>
        <aside style={{fontSize: '0.1em'}} mdc-permanent-drawer className="mdc-drawer--temporary mdc-drawer__drawer">
          <nav className="mdc-temporary-drawer__drawer rm-menu">
            <header  className="mdc-temporary-drawer__header">
              <div className="mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary ">
                <h1 className="mdc-typography--display1">{this.props.title}</h1>
              </div>
            </header>   

            <nav className="mdc-temporary-drawer__content mdc-list-group" style={{zIndex:999}}>
              {this.props.children}
            </nav>
          </nav>
        </aside>
      </div>
    } else if (type.toLowerCase() === 'permanent') {
      if (this.props.aboveToolbar) {

      } else {
        return (
          // default to below toolbar
          <div style={{ minHeight: '100%', float: 'left' }} >
            <nav style={{ height: '100%' }} className="mdc-permanent-drawer">
              {this.props.children}
            </nav>
          </div>
        );
      }
    } else {
      return <div>Drawer type not specified.  Must be one of 'temporary' or 'permanent'</div>
    }

  }

  render() {
    return this.getDrawer();
  }

}

export default Drawer;