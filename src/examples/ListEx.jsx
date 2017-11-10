import React from 'react';
import Button from '../lib/Button';
import Grid from '../lib/Grid';
import List from '../lib/List';
import ListItem from '../lib/ListItem';
import MainHeader from '../app/MainHeader.jsx';

class ListEx extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }

  }

  actionHandler() {
    alert('Action from snackbar!');
    this.setState({ show: false });
  }

  show() {
    this.setState({ show: true });
  }

  render() {

    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid>
          <div span='2'></div>
          <div span='10' style={{ textAlign: 'left' }}>
            <h2>List Example</h2>
            <List style={{width: '320px'}}>
              <ListItem style={{ background: '#eee' }}>

                <span className="mdc-list-item__start-detail " role="presentation">
                  <i className="material-icons" aria-hidden="true">folder</i>
                </span>
                <span className="mdc-list-item__text">
                  Recipes
                  <span className="mdc-list-item__text__secondary">Jan 17, 2014</span>
                </span>
                <span className="mdc-list-item__end-detail material-icons"
                  aria-label="View more information" title="More info"
                  onclick="event.preventDefault();">
                  network_wifi
                   </span>
              </ListItem>

              <ListItem style={{background: '#ccc'}}>
                <i style={{ color: '#eee' }} className="material-icons" aria-hidden="true">network_wifi</i>
                <span style={{ margin: '16px' }} className="mdc-list-item__text">
                  Change network settings</span>
                <span className="mdc-list-item__end-detail material-icons"
                  aria-label="View more information" title="More info"
                  onclick="event.preventDefault();">
                  network_wifi
                   </span>
              </ListItem>

              <ListItem style={{ background: '#eee' }}>
                <i className=" material-icons" aria-hidden="true">data_usage</i>
                <span style={{ margin: '16px' }}>Data Usage</span>
              </ListItem>

              <ListItem style={{ background: '#ccc' }}>
                <i className=" material-icons" aria-hidden="true">network_wifi</i>
                <span style={{ margin: '16px' }}>xxxxxxxxx</span>
                <span style={{color: 'pink'}} className="mdc-list-item__end-detail material-icons"
                  aria-label="More info" title="More info"
                  onClick="event.preventDefault();">
                  settings
                   </span>
              </ListItem>

              <ListItem style={{ background: '#eee' }}>
                <i className=" material-icons" aria-hidden="true">bluetooth</i>
                <span style={{ margin: '16px' }}>Bluetooth</span>
                </ListItem>

              <ListItem style={{ background: '#ccc' }}>
                <i className=" material-icons" aria-hidden="true">data_usage</i>
                <span style={{ margin: '16px' }}>Data Usage</span>
              </ListItem>
            </List>
          </div>
        </Grid>
      </div >

    )
  }

}

export default ListEx;