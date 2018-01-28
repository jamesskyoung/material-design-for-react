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
    let oddStyle = { backgroundColor: '#fff', color: '#222', padding: '6px' };
    let evenStyle = { backgroundColor: '#fff', color: '#222', padding: '6px' };
    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid style={{ display: 'flex', }}>
          <div span='1'></div>
          <div span='11'>
            <Typography font='display2'>Latest Changes</Typography>

            <List style={{ marginTop: '12px', borderBottom: '1px solid #aaa', borderTop: '1px solid #aaa', backgroundColor: '#fff' }}>
              <ListItem style={oddStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{ color: 'lime' }} className="material-icons">new_releases</i></span>
                <span className="mdc-list-item__text">
                  Jan.28.2018 TextField -- add custom linewidth to Ring chart
                </span>
              </ListItem>
              <ListItem style={oddStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{ color: 'lime' }} className="material-icons">new_releases</i></span>
                <span className="mdc-list-item__text">
                  Jan.28.2018 TextField -- single fill, double fill Ring chart chart
                </span>
              </ListItem>
              <ListItem style={oddStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{ color: 'lime' }} className="material-icons">new_releases</i></span>
                <span className="mdc-list-item__text">
                  Jan.19.2018 TextField -- add onBlur and onFocus events
                </span>
              </ListItem>
              <ListItem style={oddStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{ color: 'lime' }} className="material-icons">new_releases</i></span>
                <span className="mdc-list-item__text">
                  Jan.9.2018 TextField -- allow maxLength property
                </span>
              </ListItem>
              <ListItem style={evenStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{ color: 'lime' }} className="material-icons">new_releases</i></span>
                <span className="mdc-list-item__text">
                  Jan.9.2018 Select allow id on each value
                </span>
              </ListItem>
              <ListItem style={oddStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{ color: 'lime' }} className="material-icons">new_releases</i></span>
                <span className="mdc-list-item__text">
                  Jan.4.2018 TextField -- allow 'help text' to be changed programmatically.
                </span>
              </ListItem>
              <ListItem style={evenStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{ color: 'lime' }} className="material-icons">new_releases</i></span>
                <span className="mdc-list-item__text">
                  Jan.2.2018 Tooltip -- added ArrowPosition property
                </span>
              </ListItem>
              <ListItem style={oddStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{ color: 'red' }} className="material-icons">bug_report</i></span>
                <span className="mdc-list-item__text">
                  Jan.2.2018 Various -- removed unwanted console.log statements
                </span>
              </ListItem>
              <ListItem style={evenStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{ color: 'lime' }} className="material-icons">new_releases</i></span>
                <span className="mdc-list-item__text">
                  Dec.29.2017 TextField -- added Required and HelpText attributes.
                </span>
              </ListItem>
              <ListItem style={oddStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{ color: 'lime' }} className="material-icons">new_releases</i></span>
                <span className="mdc-list-item__text">
                  Dec.28.2017 TextField -- added minLength attribute
                </span>
              </ListItem>
              <ListItem style={evenStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{ color: 'red' }} className="material-icons">bug_report</i></span>
                <span className="mdc-list-item__text">
                  Dec.21.2017 Grid defect when only 1 child is used.
                </span>
              </ListItem>
              <ListItem style={oddStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{ color: 'red' }} className="material-icons">bug_report</i></span>
                <span className="mdc-list-item__text">
                  Dec.19.2017 Select issue.  Multiple click events firing on non-selected drop downs.
                </span>
              </ListItem>
              <ListItem style={evenStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{ color: 'lime' }} className="material-icons">new_releases</i></span>
                <span className="mdc-list-item__text">
                  Dec.17.2017 Tooltip initial commit.  Still a WIP.
                </span>
              </ListItem>
              <ListItem style={oddStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{ color: 'lime' }} className="material-icons">new_releases</i></span>
                <span className="mdc-list-item__text">
                  Dec.14.2017 Accordion Component
                </span>
              </ListItem>
              <ListItem style={evenStyle}>
                <span className="mdc-list-item__start-detail " role="presentation"><i style={{ color: 'lime' }} className="material-icons">new_releases</i></span>
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