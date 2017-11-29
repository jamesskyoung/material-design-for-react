import React from 'react';
import Button from '../lib/Button';
import Card from '../lib/Card';
import Colourizer from '../lib/Colourizer';
import Grid from '../lib/Grid';
import MainHeader from '../app/MainHeader.jsx';
import Typography from '../lib/Typography';

class CardEx extends React.Component {
  constructor(props) {
    super(props);

  }

  colourize(element) {
    return Colourizer.colourize(element);
  }

  render() {

    //backgroundStyle={{ backgroundImage: 'url("images/1-1.jpg")', width: '100%', height: '10em' }}>
    return (
      <div >
        <Grid gutter='0px'>
          <div span='3'>&nbsp;</div>
          <div span='6' className='appTitle'>

            PlayStation Partner Application

        </div>
          <div span='3'>&nbsp;</div>
        </Grid>

        <Grid gutter='0px' style={{ color: 'white' }}>
          <div span='2'>&nbsp;</div>
          <div span='10'>

            <Grid gutter='0px' style={{ color: 'black', position: 'relative' }}>

              <div span='3' className='sideNav'>

                <div className='sideNavActive'>What are you making?</div>
                <div className='sideNavContent'>First steps</div>
                <div className='sideNavContent'>Distribution</div>
                <div className='sideNavContent'>Company Info</div>
                <div className='sideNavContent'>Company Address</div>
                <div className='sideNavContent'>Contacts..</div>
                <div className='sideNavContent'>Company Legal Status</div>
                <div className='sideNavContent'>Terms and Conditions</div>
                <div className='sideNavContent'>Summary Review</div>
                <div className='sideNavDisabled sideNavContent'>Submit</div>
              </div>
              <div span='7' style={{ width: '100%', backgroundColor: 'white' }}>
                <div style={{ backgroundColor: '#d6e1f6' }} className='contentHeader'>
                  App, Middleware, or Education
              </div>
                <Card showBorder={false} style={{ display: 'inline-flex', width: '50%', backgroundColor: 'white' }} banner='This is a banner'
                  title='Apps and Middleware'
                  subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus mauris non libero feugiat, sed pretium enim rutrum. Suspendisse dignissim semper lorem eget molestie. Nam sed metus ut diam porta ornare. Cras nec tincidunt velit. Suspendisse vel nunc auctor, vehicula eros in, consequat purus. Vivamus felis nisl, tempor et est id, blandit vestibulum diam. Nam convallis mauris eget cursus imperdiet. Vestibulum lacus eros, dictum dapibus mauris vel, aliquet tempus urna. Fusce interdum arcu sed lectus laoreet imperdiet. Aenean bibendum turpis vitae metus dictum, vitae auctor erat rutrum. Donec sit amet fermentum tellus. In hac habitasse platea dictumst.'
                  headerStyle={{ backgroundImage: 'url("images/16-9.jpg")', backgroundSize: 'cover', maxWidth: '100%', height: '120px' }}>

                </Card>

                <Card showBorder={false} style={{ display: 'inline-flex', width: '50%', backgroundColor: 'white', height: '100%' }} banner='This is a banner'
                  title='Education'
                  subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus mauris non libero feugiat, sed pretium enim rutrum. Suspendisse dignissim semper lorem eget molestie. Nam sed metus ut diam porta ornare. Cras nec tincidunt velit. Suspendisse vel nunc auctor, vehicula eros in, consequat purus. Vivamus felis nisl, tempor et est id, blandit vestibulum diam. Nam convallis mauris eget cursus imperdiet. Vestibulum lacus eros, dictum dapibus mauris vel, aliquet tempus urna. '

                  headerStyle={{ backgroundImage: 'url("images/1-1.jpg")', backgroundSize: 'cover', maxWidth: '100%', height: '120px' }}>

                </Card>
              </div>
              <div span='2'></div>

              <div span='3' className='sideNav'></div>
              <div span='7' >
                <Button raised={true} style={{width:'45%'}}>B1</Button>
                <div style={{display: 'inline-flex', width:'10%', height:'1px'}}>&nbsp;</div>
                <Button raised={true} style={{width:'45%'}}>B2</Button>
              </div>
              <div span='2'></div>


            </Grid>
          </div>
        </Grid>

      </div>
    )
  }

}

export default CardEx;