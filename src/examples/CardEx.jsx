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
        <Grid>
          <div span='3'></div>
          <div span='7'>

            <Card showBorder={false} style={{ display: 'inline-flex', width: '320px' }} banner='This is a banner'
              title='Your IP Address'
              subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus mauris non libero feugiat, sed pretium enim rutrum. Suspendisse dignissim semper lorem eget molestie. Nam sed metus ut diam porta ornare. Cras nec tincidunt velit. Suspendisse vel nunc auctor, vehicula eros in, consequat purus. Vivamus felis nisl, tempor et est id, blandit vestibulum diam. Nam convallis mauris eget cursus imperdiet. Vestibulum lacus eros, dictum dapibus mauris vel, aliquet tempus urna. Fusce interdum arcu sed lectus laoreet imperdiet. Aenean bibendum turpis vitae metus dictum, vitae auctor erat rutrum. Donec sit amet fermentum tellus. In hac habitasse platea dictumst.'
              headerStyle={{ backgroundImage: 'url("images/ip1.jpg")', backgroundSize: 'cover', maxWidth: '100%', height: '120px' }}>

            </Card>


            <Card showBorder={false} style={{ display: 'inline-flex', width: '320px' }} title='Sample Card Title'
              subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus mauris non libero feugiat, sed pretium enim rutrum. Suspendisse dignissim semper lorem eget molestie. Nam sed metus ut diam porta ornare. Cras nec tincidunt velit. Suspendisse vel nunc auctor, vehicula eros in, consequat purus. Vivamus felis nisl, tempor et est id, blandit vestibulum diam. Nam convallis mauris eget cursus imperdiet. '
              shadow={false}
              headerStyle={{ backgroundImage: 'url("images/1-1.jpg")', backgroundSize: 'cover', width: '100%', height: '120px' }}>

            </Card>

          </div>
          <div span='2'></div>

          <div span='3'></div>
          <div span='7'>
            <Button raised={true} style={{ width: '320px' }}>Button1</Button>&nbsp;<Button raised={true} style={{ width: '320px' }}>Button2</Button>
          </div>
          <div span='2'></div>
        </Grid>
      </div>
    )
  }

}

export default CardEx;