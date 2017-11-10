import React from 'react';
import AppBar from '../lib/AppBar';
import Drawer from '../lib/Drawer';
import Theme from '../lib/Theme';
import Toolbar from '../lib/Toolbar';

class HeaderEx extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div>
        <AppBar >
          <Toolbar title='ReactMaterial v 0.1 Examples'>
            <a href="#" className="material-icons mdc-toolbar__icon" aria-label="Settings" alt="Settings">settings</a>
            <a href="#" className="material-icons mdc-toolbar__icon" aria-label="Download" alt="Download">file_download</a>
            <a href="#" className="material-icons mdc-toolbar__icon" aria-label="Print this page" alt="Print this page">print</a>
            <a href="#" className="material-icons mdc-toolbar__icon" aria-label="Bookmark this page" alt="Bookmark this page">bookmark</a>
          </Toolbar>


    
          <Drawer title='My drawer menu' type='temporary'>
            <div className="mdc-list">
              <a className="mdc-list-item mdc-temporary-drawer--selected" href="#">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>Inbox - updated2
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
            </div>

            <hr className="mdc-list-divider" />

            <div className="mdc-list">
              <a className="mdc-list-item" href="#">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">email</i>All Mail
                  </a>
              <a className="mdc-list-item" href="#">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">delete</i>Trash
                  </a>
              <a className="mdc-list-item" href="#">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">report</i>Spam
                  </a>
            </div>
          </Drawer>
        </AppBar>
       
      </div >

    )
  }

}

export default HeaderEx;