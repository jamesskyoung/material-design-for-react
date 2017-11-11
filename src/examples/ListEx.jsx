import React from 'react';
import Button from '../lib/Button';
import Colourizer from '../lib/Colourizer';
import Grid from '../lib/Grid';
import List from '../lib/List';
import ListItem from '../lib/ListItem';
import MainHeader from '../app/MainHeader.jsx';
import Typography from '../lib/Typography';

class ListEx extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }

  }


  colourize(element) {
    return Colourizer.colourize(element);
  }


  render() {

    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid>
          <div span='1'></div>
          <div style={{ textAlign: 'left', borderRight: 'solid 1px lightgrey', padding: '6px' }} span='11'>
            <Typography font='display2'>Lists</Typography>
            <p>
              The List allow you display items in a grid format.  Lists items
              can be a single or multi-line.
            </p>
            <p>
              You can add icons to left or the right, control the width and add custom stylings.
            </p>
            <List style={{ background: '#222', color: '#eee', padding: '12px', width: '320px' }}>
              <ListItem >
                <span className="mdc-list-item__start-detail " role="presentation">
                  <i style={{ color: 'red' }} className="material-icons" aria-hidden="true">backup</i>
                </span>
                <span className="mdc-list-item__text">
                  Backup to the Cloud
                  <span style={{ color: 'red' }}
                    className=" mdc-list-item__text__secondary">Your last back was Dec 7, 2015!</span>
                </span>

              </ListItem>

              <ListItem >
                <span className="mdc-list-item__start-detail " role="presentation">
                  <i style={{ color: '#eee' }} className="material-icons" aria-hidden="true">network_wifi</i>
                </span>
                <span className="mdc-list-item__text">
                  Change network settings</span>
              </ListItem>

              <ListItem >
                <span className="mdc-list-item__start-detail " role="presentation">
                  <i style={{ color: 'yellow' }} className="material-icons" aria-hidden="true">data_usage</i>
                </span>

                <span >Data Usage</span>
              </ListItem>

              <ListItem >
                <span className="mdc-list-item__start-detail " role="presentation">
                  <i style={{ color: 'orange' }} className="material-icons" aria-hidden="true">settings</i>
                </span>

                <span >Settings</span>
                <span className="mdc-list-item__end-detail material-icons"
                  aria-label="More info" title="More info"
                  onClick={((event) => {
                    //"event.preventDefault();"
                    event.preventDefault();
                    alert('Click!!!!');
                  })}>
                  info_outline
                   </span>
              </ListItem>

              <ListItem >
                <span className="mdc-list-item__start-detail " role="presentation">
                  <i style={{ color: 'orange' }} className="material-icons" aria-hidden="true">bluetooth</i>
                </span>
                <span >Bluetooth</span>
              </ListItem>
            </List>
          </div>
          <div span='1'></div>
          <div style={{ textAlign: 'left' }} span='11'>


            <div style={{ marginTop: '12px' }}></div>
            <Typography font='display1'>About &rarr; <strong>List</strong></Typography>
            <div style={{ marginTop: '12px' }}></div>
            <p>
              The List component is a combination of two components. List and ListItem.

            </p>

            <table cellSpacing={5} style={{ width: '100%', borderSpacing: '0px', padding: '6px', color: 'xwhite' }}>
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
                <tr ><td >style</td><td>Object</td><td>none</td><td>Style overrides for either List or ListItem</td></tr>

              </tbody>
            </table>
            <div style={{ marginTop: '24px' }}></div>
            This page can be viewed here <a href='https://github.com/jamesskyoung/reactmaterial/blob/development/src/examples/CardEx.jsx' target='_blank'>Here</a>

            <p>
              <Typography font='headline'>Code example</Typography>
            </p>

            <pre style={{
              fontFace: 'Roboto Mono, monospace', padding: '6px', background: '#eee',
              whiteSpace: 'pre-wrap',
              borderRadius: '6px'
            }}>
              <code>
                {this.colourize(
                  ""
                  + "<List style= {{ background: '#222', color: '#eee', padding: '12px', width: '320px' }}>"
                  + "\n <ListItem >"
                  + "\n    <span className='mdc-list-item__start-detail ' role='presentation'>"
                  + "\n    <i style={{ color: 'red' }} className='material-icons' aria-hidden='true'>backup</i>"
                  + "\n    </span>"
                  + "\n    <span className='mdc-list-item__text'>"
                  + "\n    Backup to the Cloud"
                  + "\n    <span style={{ color: 'red' }}"
                  + "\n    className=' mdc-list-item__text__secondary'>Your last back was Dec 7, 2015!</span>"
                  + "\n    </span>"
                  + "\n </ListItem>"
                  + "\n <ListItem >"
                  + "\n    <span className='mdc-list-item__start-detail ' role='presentation'>"
                  + "\n    <i style={{ color: '#eee' }} className='material-icons' aria-hidden='true'>network_wifi</i>"
                  + "\n    </span>"
                  + "\n    <span className='mdc-list-item__text'>"
                  + "\n    Change network settings</span>"
                  + "\n </ListItem>"
                  + "\n <ListItem >"
                  + "\n    <span className='mdc-list-item__start-detail ' role='presentation'>"
                  + "\n    <i style={{ color: 'yellow' }} className='material-icons' aria-hidden='true'>data_usage</i>"
                  + "\n    </span>"
                  + "\n    <span >Data Usage</span>"
                  + "\n </ListItem>"
                  + "\n <ListItem >"
                  + "\n    <span className='mdc-list-item__start-detail ' role='presentation'>"
                  + "\n    <i style={{ color: 'orange' }} className='material-icons' aria-hidden='true'>settings</i>"
                  + "\n    </span>"
                  + "\n    <span >Settings</span>"
                  + "\n    <span className='mdc-list-item__end-detail material-icons'"
                  + "\n       aria-label='More info' title='More info'"
                  + "\n       onClick={((event) => {"
                  + "\n    //'event.preventDefault();'"
                  + "\n    event.preventDefault();"
                  + "\n    alert('Click!!!!');"
                  + "\n    })}>"
                  + "\n    info_outline"
                  + "\n    </span>"
                  + "\n </ListItem>"
                  + "\n <ListItem >"
                  + "\n    <span className='mdc-list-item__start-detail ' role='presentation'>"
                  + "\n    <i style={{ color: 'orange' }} className='material-icons' aria-hidden='true'>bluetooth</i>"
                  + "\n    </span>"
                  + "\n    <span >Bluetooth</span>"
                  + "\n </ListItem>"
                  + "\n </List>")}

              </code>
            </pre>
          </div>

        </Grid>
      </div >

    )
  }

}

export default ListEx;