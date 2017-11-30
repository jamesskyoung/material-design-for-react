import React from 'react';
import { Link } from 'react-router-dom';
import MUIBase from '../lib/MUIBase';
import Button from '../lib/Button'
import MainHeader from './MainHeader.jsx';
import List from '../lib/List';
import ListItem from '../lib/ListItem';
import Theme from '../lib/Theme';
import Typography from '../lib/Typography';


class Splash extends MUIBase {
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
    return (
      <div style={{ backgroundSize: 'cover', height: '100vh', backgroundImage: 'url("images/16-9.jpg")' }}>
        <div style={{
          margin: '0 auto',
          padding: (window.innerHeight / 2 - 200) + 'px 0',
          textAlign: 'center'
        }}>
          <div>
            <Typography
              className='mdc-theme--text-primary-on-secondary'

              font='display4'>
              Material Design for React
            </Typography>
          </div>
          <div>
            <Typography font='display1' style={{ color: 'lightgrey' }}>
              React components that implement Material Components for the WEB
            </Typography>
          </div>
          <div>
            <Typography font='display1'>
              
               <div>
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/welcome'>
                  <Button style={{ height: '2em', marginTop: '32px', fontSize: '1em', color: 'white' }}raised={true}>GET STARTED</Button>
                </Link>
                </div>
            </Typography>
            <div style={{
              color: 'lightGrey', textAlign: 'center',
              position: 'absolute', width: '100%', bottom: '10px'
            }}>
              <Typography font='body1'>
                Site built with Material Design for React &copy; 2017
              </Typography>
            </div>
          </div>
        </div>
      </div>

    )
  }

}

export default Splash;