import React from 'react';
import { Link } from 'react-router-dom';
import MUIBase from '../lib/MUIBase';
import Button from '../lib/Button'
import MainHeader from './MainHeader.jsx';
import Grid from '../lib/Grid';
import List from '../lib/List';
import ListItem from '../lib/ListItem';
import Theme from '../lib/Theme';
import Typography from '../lib/Typography';


class Changes extends MUIBase {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.injectMui().then(() => {

    }).catch((err) => {
      alert('injection error ' + err);
    });
  }

  render() {
    let oddStyle={backgroundColor: '#333', color: '#eee', padding:'6px'};
    let evenStyle={backgroundColor: '#222', color: '#eee', padding:'6px'};
    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid style={{ display: 'flex' }}>
          <div span='1'></div>
          <div span='11'>
            <Typography font='display2'>Latest Changes</Typography>
            
            <List style={{marginTop: '12px', boxShadow: '1px 0px 50px 0px rgba(138,133,138,1)', backgroundColor: '#222'}}>
               <ListItem style={oddStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{color:'lime'}}className="material-icons">new_releases</i></span>
                <span className="mdc-list-item__text">
                  Dec.29.2017 TextField -- added Required and HelpText attributes.  
                </span>
              </ListItem>
               <ListItem style={evenStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{color:'lime'}}className="material-icons">new_releases</i></span>
                <span className="mdc-list-item__text">
                  Dec.28.2017 TextField -- added minLength attribute  
                </span>
              </ListItem>
              <ListItem style={oddStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{color:'red'}}className="material-icons">bug_report</i></span>
                <span className="mdc-list-item__text">
                  Dec.21.2017 Grid defect when only 1 child is used.  
                </span>
              </ListItem>
              <ListItem style={evenStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{color:'red'}}className="material-icons">bug_report</i></span>
                <span className="mdc-list-item__text">
                  Dec.19.2017 Select issue.  Multiple click events firing on non-selected drop downs.
                </span>
              </ListItem>
              <ListItem style={oddStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{color:'lime'}} className="material-icons">new_releases</i></span>
                <span className="mdc-list-item__text">
                  Dec.17.2017 Tooltip initial commit.  Still a WIP.
                </span>
              </ListItem>
              <ListItem style={evenStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{color:'lime'}} className="material-icons">new_releases</i></span>
                <span className="mdc-list-item__text">
                  Dec.14.2017 Accordion Component
                </span>
              </ListItem>
              <ListItem style={oddStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{color:'lime'}} className="material-icons">new_releases</i></span>
                <span className="mdc-list-item__text">
                  Dec.10.2017 Ring chart
                </span>
              </ListItem>
            </List>
          </div>
        </Grid>

      </div >

    )
  }

}

export default Changes;