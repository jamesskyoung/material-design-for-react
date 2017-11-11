import React from 'react';
import Colourizer from '../lib/Colourizer';
import Grid from '../lib/Grid'
import List from '../lib/List';
import ListItem from '../lib/ListItem';
import MainHeader from '../app/MainHeader.jsx';
import Theme from '../lib/Theme';
import Typography from '../lib/Typography';

import { Link } from 'react-router-dom';

class AppBarEx extends React.Component {
  constructor(props) {
    super(props);

  }

  colourize(element) {
    return Colourizer.colourize(element);
  }


  render() {
   return (

      <div className='mdc-typography--body1'>
        <MainHeader />
        <Grid>
          <div span='1'></div>
          <div style={{ textAlign: 'left' }} span='11'>
            <Typography font='display2'>AppBar</Typography>
            <p className="mdc-typography--body1">
              The AppBar is a composable header component. Use it to provide a drop down 'burger' menu, page title, add icons
              and text to the right side for user options.

              <p>From the MDC web site...</p>

              <blockquote style={{ borderLeft: 'solid 4px #ccc', padding: '12px' }}>
                MDC Toolbar acts as a container for multiple rows containing items such as application title, navigation menu, and tabs, among other things. Toolbars scroll with content by default, but support fixed behavior as well.
              </blockquote>
              <p>The AppBar on this page contains 3 components.
                <List>
                  <ListItem>
                    <i style={{ color: 'slategrey', marginRight: '12px' }} className="material-icons" aria-hidden="true">check</i>
                    The AppBar container
                  </ListItem>
                  <ListItem>
                    <i style={{ color: 'slategrey', marginRight: '12px' }} className="material-icons" aria-hidden="true">check</i>
                    A permanent drawer component (This is the menu on the left side.)
                  </ListItem>
                  <ListItem>
                    <i style={{ color: 'slategrey', marginRight: '12px' }} className="material-icons" aria-hidden="true">check</i>
                    A toolbar component that holds the other icons that can be actionable.
                  </ListItem>
                </List>
              </p>
            </p>
          </div >

          <div span='1'></div>
          <div style={{ textAlign: 'left' }} span='11'>
            <Typography font='display1'>About &rarr; <strong>AppBar</strong></Typography>
            <p>
              AppBar is just a container for the Toolbar and Drawer components.  In order to use it,
            construct a compoent called something like 'Header.' Here's the code from this page that
            constructs the toolbar and permanent drawer.
            </p>
            <p>
              Note that by using 'temporary' in the drawer type, a burger menu containing the list items
              will be used. Click <Link to='/drawertemp'>HERE</Link> for an example.
            </p>

            <p>
              <Typography font='headline'>Code example</Typography>
            </p>

            <pre style={{
              fontFace: 'Roboto Mono, monospace', padding:
              '6px', background: '#eee',
              borderRadius: '6px'
            }}>
              <code>
                {this.colourize(
                  "render() {"
                  + "\n "
                  + "\n  return ("
                  + "\n  <div>"
                  + "\n    <AppBar >"
                  + "\n       <Toolbar  title='Material Design for React' fixed={true}>"
                  + "\n          <a href='#' className='material-icons mdc-toolbar__icon' aria-label='Settings' alt='Settings'>settings</a>"
                  + "\n          <a href='#' className='material-icons mdc-toolbar__icon' aria-label='Download' alt='Download'>file_download</a>"
                  + "\n          <a href='#' className='material-icons mdc-toolbar__icon' aria-label='Print this page' alt='Print this page'>print</a>"
                  + "\n          <a href='#' className='material-icons mdc-toolbar__icon' aria-label='Bookmark this page' alt='Bookmark this page'>bookmark</a>"
                  + "\n       </Toolbar>"
                  + "\n       ** NOTE ** Type of permanent vs type of temporary\n"
                  + "\n       <Drawer style={{marginTop: '12px'}} title='My drawer menu' type='permanent'>"
                  + "\n       <div className='mdc-list'>"
                  + "\n          <Link to='/welcome' className='mdc-list-item'>"
                  + "\n          <Typography font='display1'>Overview</Typography>"
                  + "\n          </Link>"
                  + "\n          <div className='mdc-list-divider' role='separator'></div>"
                  + "\n          <Link to='/appbar' className='mdc-list-item'>"
                  + "\n          AppBar</Link>"
                  + "\n          <Link to='/button' className='mdc-list-item'>"
                  + "\n          Button</Link>"
                  + "\n          <Link to='/card' className='mdc-list-item'>"
                  + "\n          Card</Link>"
                  + "\n          <Link to='/checkbox' className='mdc-list-item'>"
                  + "\n          Checkbox</Link>"
                  + "\n          <Link to='/dialog' className='mdc-list-item'>"
                  + "\n          Dialog</Link>"
                  + "\n          <Link to='/layout' className='mdc-list-item'>"
                  + "\n          Layouts</Link>"
                  + "\n          <Link to='/list' className='mdc-list-item'>"
                  + "\n          Lists</Link>"
                  + "\n          <Link to='/menus' className='mdc-list-item'>"
                  + "\n          Menus</Link>"
                  + "\n          <Link to='/progress' className='mdc-list-item'>"
                  + "\n          Progress</Link>"
                  + "\n          <Link to='/radio' className='mdc-list-item'>"
                  + "\n          Radio</Link>"
                  + "\n          <Link to='/select' className='mdc-list-item'>"
                  + "\n          Select</Link>"
                  + "\n          <Link to='/slider' className='mdc-list-item'>"
                  + "\n          Slider</Link>"
                  + "\n          <Link to='/snackbar' className='mdc-list-item'>"
                  + "\n          Snackbar</Link>"
                  + "\n          <Link to='/switch' className='mdc-list-item'>"
                  + "\n          Switch</Link>"
                  + "\n          <Link to='/tabs' className='mdc-list-item'>"
                  + "\n          Tabs</Link>"
                  + "\n          <Link to='/textfield' className='mdc-list-item'>"
                  + "\n          Textfield</Link>"
                  + "\n          <Link to='/theme' className='mdc-list-item'>"
                  + "\n          Theme</Link>"
                  + "\n          <Link to='/typography' className='mdc-list-item'>"
                  + "\n          Typography</Link>"
                  + "\n       </div>"
                  + "\n       </Drawer>"
                  + "\n    </AppBar>"
                  + "\n </div >")}

              </code>
            </pre>
          </div>
        </Grid>
      </div>
    )
  }

}

export default AppBarEx;