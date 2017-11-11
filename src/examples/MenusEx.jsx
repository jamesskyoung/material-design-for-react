import React from 'react';
import Button from '../lib/Button';
import Grid from '../lib/Grid';
import Menus from '../lib/Menus';
import Colourizer from '../lib/Colourizer';
import Theme from '../lib/Theme';
import MainHeader from '../app/MainHeader.jsx';
import Typography from '../lib/Typography';

class MenusEx extends React.Component {
  constructor(props) {
    super(props);

  }

  colourize(element) {
    return Colourizer.colourize(element);
  }

  onSelect(index, text) {
    alert('Menu selected index is: ' + index + ' Text: ' + text);
  }

  render() {

    return (
      <div>
        <MainHeader />
        <Grid>
          <div span='1'></div>
          <div style={{ textAlign: 'left', }} span='11'>
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

          <div span='1'></div>
          <div style={{ textAlign: 'left' }} span='11'>
            <Typography font='display1'>About &rarr; <strong>Menus</strong></Typography>
            <div style={{ marginTop: '12px' }}></div>


            <table cellSpacing={5} style={{ width: '100%', borderSpacing: '0px', padding: '6px' }}>
              <thead style={{ padding: '6px' }}>
                <tr >
                  <th style={{ borderBottom: '1px solid #eee' }}>Name</th>
                  <th style={{ borderBottom: '1px solid #eee' }}>Type</th>
                  <th style={{ borderBottom: '1px solid #eee' }}>Default</th>
                  <th style={{ borderBottom: '1px solid #eee' }}>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr ><td >id</td><td>id</td><td>none</td><td>The ID of this component</td></tr>
                <tr ><td >trigger</td><td>id</td><td>none</td><td>Id of element that will fire a click event that the Menu will listen to.</td></tr>
              </tbody>
            </table>
            <div style={{ marginTop: '24px' }}></div>
            This page can be viewed here <a href='https://github.com/jamesskyoung/reactmaterial/blob/development/src/examples/CardEx.jsx' target='_blank'>Here</a>

            <p>
              <Typography font='headline'>Code examples</Typography>
            </p>

            <pre style={{
              fontFace: 'Roboto Mono, monospace', padding:
              '6px', background: '#eee',
              borderRadius: '6px'
            }}>
              <code>
                {this.colourize(
                   "onSelect(index, text) { "
                  + "\n  alert('Menu selected index is: ' + index + ' Text: ' + text);"
                  + "\n}"

                  + "\n\n<Button id='menuTrigger' raised={true} >Show menu</Button>"
                  + "\n\n<Menus onSelect={this.onSelect.bind(this)} trigger='menuTrigger' id='menuSimple'>"
                  + "\n    <ul className='mdc-simple-menu__items mdc-list' role='menu' aria-hidden='true'>"
                  + "\n       <li className='mdc-list-item' role='menuitem' tabIndex='0'>Back</li>"
                  + "\n       <li className='mdc-list-item' role='menuitem' tabIndex='0'>Forward</li>"
                  + "\n       <li className='mdc-list-item' role='menuitem' tabIndex='0'>Reload</li>"
                  + "\n       <li className='mdc-list-divider' role='separator'></li>"
                  + "\n       <li className='mdc-list-item' role='menuitem' tabIndex='0'>Save As...</li>"
                  + "\n    </ul>"
                  + "\n </Menus>")}

              </code>
            </pre>
          </div>


        </Grid >
      </div >

    )
  }

}

export default MenusEx;