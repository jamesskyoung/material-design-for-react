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
      <div className="mdc-typography">
        <MainHeader />
        <Grid >
          <div span='1'></div>
          <div style={{ textAlign: 'left', borderRight: 'solid 1px lightgrey' }} span='5'>
            <Typography font='display2'>Card</Typography>
            <div style={{ marginTop: '12px' }}></div>
            <Typography font='body1'>
              The Card component gives you a nice presentation vehicle to show details of a particular point of interest.  Whether this is a person,
              a status and so on.  You can also attach buttons that fire actions.  These are standard <code>Button</code> objects.  Therefore,
              you can use the onClick event handler to capture events.
              <p>
                In addition, you can use the <code>orientation</code> property to have vertical or horizontal cards.
              </p>
            </Typography>
            <div style={{ marginTop: '12px' }}></div>
            <div style={{ margin: '64px' }}>
              <Card style={{ width: '320px' }} banner='This is a banner' title='Your IP Address' subtitle='is 10.1.2.32'
                headerStyle={{ backgroundImage: 'url("images/ip1.jpg")', backgroundSize: 'cover', maxWidth: '100%', height: '120px' }}>
                <Button raised={true} onClick={(() => alert('Hello from an action on a card!'))}> Action 1 &rarr; Click me </Button>
                <Button> Action 2</Button>

              </Card>
            </div>
            <div style={{ margin: '64px' }}>
              <Card style={{ width: '320px' }} title='Sample Card Title' subtitle='This card has a shadow!'
                shadow={true}
                headerStyle={{ backgroundImage: 'url("images/1-1.jpg")', backgroundSize: 'cover', width: '100%', height: '120px' }}>
                <Button raised={true}> Action 1</Button>
                <Button> Action 2</Button>

              </Card>
            </div>

            <div style={{ margin: '64px' }}>
              <Card style={{ width: '320px' }} title='Horizontal Card Title' 
                subtitle='Image on the right' orientation='horizontal'
                image={"images/16-9.jpg"}>
                <Button raised={true}> Action 1</Button>
                <Button> Action 2</Button>
              </Card>
            </div>

           <div style={{ margin: '64px' }}>
              <Card style={{ width: '320px' }} title='Horizontal Card Title' 
                subtitle='Image on the left' orientation='horizontal'
                image={"images/16-9.jpg"} imagePosition='left'>
                <Button raised={true}> Action 1</Button>
                <Button> Action 2</Button>
              </Card>
            </div>
          </div>

          <div style={{ textAlign: 'left', }} span='5'>

            <div style={{ marginTop: '12px' }}></div>
            <Typography font='display1'>Component Properties &rarr; <strong>Card</strong></Typography>
            <div style={{ marginTop: '12px' }}></div>
            <Typography font='body1'>

              <table cellSpacing={5} style={{ borderSpacing: '0px', padding: '6px', color: 'white', backgroundImage: 'url("images/16-9.jpg")' }}>
                <thead style={{ padding: '6px' }}>
                  <tr >
                    <th style={{ borderBottom: '1px solid #eee'}}>Name</th>
                    <th style={{ borderBottom: '1px solid #eee'}}>Type</th>
                    <th style={{ borderBottom: '1px solid #eee'}}>Default</th>
                    <th style={{ borderBottom: '1px solid #eee'}}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr ><td >orientation</td><td>string</td><td>vertical</td><td>Orientation</td></tr>
                  <tr><td>headerStyle</td><td>Object</td><td>none</td><td>Style object to provide background image url (primarily) or other style overrides.)
                    This is only used for <strong>VERTICAL</strong> cards.</td></tr>
                  <tr><td>image</td><td>Object</td><td>none</td><td>The image to display for <strong>HORIZONTAL</strong> cards.</td></tr>
                  <tr><td>imagePosition</td><td>String</td><td>right</td><td>Image position (left | right) for <strong>HORIZONTAL</strong> cards.</td></tr>
                  <tr><td>shadow</td><td>Boolean</td><td>false</td><td>Add a shadow around the card?</td></tr>
                  <tr><td>style</td><td>Object</td><td>none</td><td>Style object to provide other style overrides.)</td></tr>
                  <tr><td>title</td><td>String</td><td>none</td><td>The title text</td></tr>
                  <tr><td>subtitle</td><td>String</td><td>none</td><td>The sub-Title text</td></tr>
                  <tr><td>actions</td><td>Button objects</td><td>none</td><td>Provide any Buttons after the closing Card tag</td></tr>
                </tbody>
              </table>
              <div style={{ marginTop: '24px' }}></div>
              This page can be viewed here <a href='https://github.com/jamesskyoung/reactmaterial/blob/development/src/examples/CardEx.jsx' target='_blank'>Here</a>

              <p>
                <Typography font='headline'>Code examples</Typography>
              </p>

              <pre style={{ fontFace: 'Roboto Mono, monospace', padding: '6px', background: '#eee', borderRadius: '6px' }}>
                <code>
                  {this.colourize(
                    "<Card style={{ width: '320px' }}"
                      + "\n\tshadow={true}"
                      + "\n\ttitle='Your IP Address'" 
                      + "\n\tsubtitle='is 10.1.2.32'"
                      + "\n\theaderStyle={{ backgroundImage: 'url(\"images/ip1.jpg\")'," 
                      + "\n\tbackgroundSize: 'cover', maxWidth: '100%', height: '120px' }}>"
                      + "\n\t<Button raised={true} "
                      + "\n\t\tonClick={(() => alert('Hello from an action!'))}> "
                      + "\n\t\tAction 1 -> Click me "
                      + "\n\t</Button>"
                      + "\n\t<Button> Action 2</Button>"
                      + "\n</Card>")}

                </code>
              </pre>

              <pre style={{ fontFace: 'Roboto Mono, monospace', padding: '6px', background: '#eee', borderRadius: '6px' }}>
                <code>
                  {this.colourize("<Card style={{ width: '320px' }} "
                    + "\n\ttitle='Sample Card Title' subtitle='Image on the left'"
                    + "\n\tshadow={false}"
                    + "\n\torientation='horizontal'"
                    + "\n\timage={\"images/16-9.jpg\"} imagePosition='left'> "
                    + "\n\t<Button raised={true}> Action 1</Button>"
                    + "\n\t<Button> Action 2</Button>"
                    + "\n</Card>")}
                </code>
              </pre>
            </Typography>
          </div>
        </Grid>
      </div>
    )
  }

}

export default CardEx;