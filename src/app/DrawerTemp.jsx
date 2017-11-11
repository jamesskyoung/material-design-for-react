import React from 'react';
import { Link } from 'react-router-dom';
import MUIBase from '../lib/MUIBase';
import Colourizer from '../lib/Colourizer';
import Grid from '../lib/Grid'
import DrawerTempHeader from './DrawerTempHeader.jsx';
import List from '../lib/List';
import ListItem from '../lib/ListItem';
import Theme from '../lib/Theme';
import Typography from '../lib/Typography';


class DrawerTemp extends MUIBase {
  constructor(props) {
    super(props);

  }

  colourize(element) {
    return Colourizer.colourize(element);
  }


  componentDidMount() {
    this.injectMui().then(() => {

    }).catch((err) => {
      alert('injection error ' + err);
    });
  }

  render() {
    return (
      <div  className='mdc-typography--body1'>
        <DrawerTempHeader />
        <Grid >
          <div span='1'></div>
          <div style={{ textAlign: 'left', }} span='11'>
            <h1><Typography font='display2'>Welcome!</Typography></h1>
            <p className="mdc-typography--body1">
              This page uses a header with a type of temporary which
              is why the burger menu appears.
            </p>
            <p>
              It contains the same items as the pages you have been viewing.
            </p>
            <p>
              Click the burger menu and select Overview.
            </p>
          </div >

          <div span='1'></div>
          <div style={{ textAlign: 'left', }} span='11'>

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
                  + "\n       ** NOTE ** Type of temporary vs type of permanent\n"
                  + "\n       <Drawer style={{marginTop: '12px'}} title='My drawer menu' type='temporary'>"
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

export default DrawerTemp;