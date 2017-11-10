import React from 'react';
import Button from '../lib/Button';
import Grid from '../lib/Grid';
import Menus from '../lib/Menus';
import Theme from '../lib/Theme';
import MainHeader from '../app/MainHeader.jsx';
import Typography from '../lib/Typography';

class MenusEx extends React.Component {
  constructor(props) {
    super(props);

  }

  onSelect(index, text) {
    alert('Menu selected index is: ' + index + ' Text: ' + text);
  }

  render() {

    return (
      <div>
        <MainHeader />
        <Grid>
          <div span='2'></div>
          <div style={{ textAlign: 'left', }} span='10'>
            <Typography font='display2'>Menus</Typography>

            <p className="mdc-typography--body1">
              Menu will be shown when you click the button... The Menus component has a trigger property that contains the ID of the element that when clicked,
            will show the menu.
          </p>

            <div style={{ margin: '32px' }}>
              <Button id="menuTrigger" raised={true} >Show menu</Button>

              <Menus onSelect={this.onSelect.bind(this)} trigger='menuTrigger' id='menuSimple'>
                <ul className="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
                  <li className="mdc-list-item" role="menuitem" tabIndex="0">Back</li>
                  <li className="mdc-list-item" role="menuitem" tabIndex="0">Forward</li>
                  <li className="mdc-list-item" role="menuitem" tabIndex="0">Reload</li>
                  <li className="mdc-list-divider" role="separator"></li>
                  <li className="mdc-list-item" role="menuitem" tabIndex="0">Save As...</li>
                </ul>
              </Menus>
            </div>
          </div>

        </Grid >
      </div >

    )
  }

}

export default MenusEx;