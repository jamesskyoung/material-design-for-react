import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '../lib/AppBar';
import Drawer from '../lib/Drawer';
import Theme from '../lib/Theme';
import Toolbar from '../lib/Toolbar';
import Typography from '../lib/Typography';

class MainHeader extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div>
        <AppBar >
          <Toolbar title='Material Design for React' fixed={true}>

            <a href="JavaScript:alert('Example code only');" title='View on Github' 
              className="material-icons mdc-toolbar__icon" aria-label="code" alt="Github">code</a>

            <a href="JavaScript:alert('Example code only');" className="material-icons mdc-toolbar__icon" aria-label="Settings" alt="Settings">settings</a>
            <a href="JavaScript:alert('Example code only');" className="material-icons mdc-toolbar__icon" aria-label="Bookmark this page" alt="Bookmark this page">bookmark</a>
          </Toolbar>

          <Drawer style={{ marginTop: '12px' }} title='My drawer menu' type='permanent'>
            <div className="mdc-list">
              <Link to='/welcome' className="mdc-list-item">
                <Typography font='display1'>Overview</Typography>
              </Link>

              <div className="mdc-list-divider" role="separator"></div>
              
              <Link to='/accordion' className="mdc-list-item">Accordion</Link>
              <Link to='/appbar' className="mdc-list-item">AppBar</Link>
              <Link to='/button' className="mdc-list-item">Button</Link>
              <Link to='/card' className="mdc-list-item">Card</Link>
              <Link to='/charts' className="mdc-list-item">Charts</Link>
              <Link to='/checkbox' className="mdc-list-item">Checkbox</Link>
              <Link to='/dialog' className="mdc-list-item">Dialog</Link>
              <Link to='/layout' className="mdc-list-item">Layouts</Link>
              <Link to='/list' className="mdc-list-item">Lists</Link>
              <Link to='/menus' className="mdc-list-item">Menus</Link>
              <Link to='/pickers' className="mdc-list-item">Pickers (Date/Time)</Link>
              <Link to='/progress' className="mdc-list-item">Progress</Link>
              <Link to='/radio' className="mdc-list-item">Radio</Link>
              <Link to='/select' className="mdc-list-item">Select</Link>
              <Link to='/slider' className="mdc-list-item">Slider</Link>
              <Link to='/snackbar' className="mdc-list-item">Snackbar</Link>
              <Link to='/switch' className="mdc-list-item">Switch</Link>
              <Link to='/tabs' className="mdc-list-item">Tabs</Link>
              <Link to='/textfield' className="mdc-list-item">Textfield</Link>
              <Link to='/tooltip' className="mdc-list-item">Tooltip</Link>
              <Link to='/theme' className="mdc-list-item">Theme</Link>
              <Link to='/typography' className="mdc-list-item">Typography</Link>
            </div>
          </Drawer>
        </AppBar>
      </div >
    )
  }

}

export default MainHeader;