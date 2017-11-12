import React from 'react';
import Button from '../lib/Button';
import Colourizer from '../lib/Colourizer';
import Grid from '../lib/Grid';
import Theme from '../lib/Theme';
import MainHeader from '../app/MainHeader.jsx';
import Typography from '../lib/Typography';

class ThemeEx extends React.Component {
  constructor(props) {
    super(props);

  }

  colourize(element) {
    return Colourizer.colourize(element);
  }

  /**
   * Just switch primary colours... EXTREMLY simplistic!!!
   */
  changeTheme() {
    let theme = document.getElementById('reactMaterialTheme');
    if (theme.innerHTML.indexOf('#ff8000') > 0) {
      // swap back to default :root { --mdc-theme-primary: #003087;} :root { --mdc-theme-secondary: #0072ce;}
      theme.innerHTML = ':root { --mdc-theme-primary: #003087; --mdc-theme-secondary: #0072ce;}';
    } else {
      // make it orange
      theme.innerHTML = ':root { --mdc-theme-primary: #ff8000; --mdc-theme-secondary: #ee4000;}';
    }
  }

  render() {

    return (
      <div className="mdc-typography">
        <MainHeader />
        <Grid >
          <div span='1'></div>
          <div style={{ textAlign: 'left', borderRight: 'solid 1px lightgrey' }} span='11'>
            <Typography font='display2'>Theme</Typography>
            <p><Typography font='headline'>Overriding the default theme</Typography></p>
            <p><Typography font='body1'>
              <div style={{ marginTop: '12px' }}></div>
              You can set the theme in your main js file by simply having the Theme component defined with your preferred
                primary and secondary colours.  Like this...

              <pre style={{ fontFace: 'Roboto Mono, monospace', padding: '6px', background: '#eee', borderRadius: '6px' }}>
                <code>
                  {this.colourize(
                    "<Theme primaryColor='#003087' secondaryColor='#0072ce' />")}
                </code>
              </pre>

              <p><Typography font='headline'>Programmatically changing the theme</Typography></p>
              <p>
                When the theme is defined, it sets an id on the style of 'reactMaterialTheme'. You can retrieve this and update it.  CLicking the button below
                will toggle between the default colours and orange.  
                <strong>If you go to any other 'page', the theme will persist.</strong>
              </p>
              <Button raised={true} onClick={this.changeTheme.bind(this)}>Toggle theme</Button>

              <pre style={{ fontFace: 'Roboto Mono, monospace', padding: '6px', background: '#eee', borderRadius: '6px' }}>
                <code>
                  {this.colourize(
                      "\n/**"
                    + "\n * Just switch primary colours... EXTREMLY simplistic!!!"
                    + "\n */"
                    + "\nchangeTheme() {"
                    + "\n\tlet theme = document.getElementById( 'reactMaterialTheme');"
                    + "\n\tif ( theme.innerHTML.indexOf( '#ff8000') > 0 ) {"
                    + "\n\t// swap back to default"
                    + "\n\t\ttheme.innerHTML = ':root { --mdc-theme-primary: #003087; --mdc-theme-secondary: #0072ce;}';"
                    + "\n\t} else {"
                    + "\n\t// make it orange"
                    + "\n\t\ttheme.innerHTML = ':root { --mdc-theme-primary: #ff8000; --mdc-theme-secondary: #ee4000;}';"
                    + "\n\t}"
                    + "\n})}"
                    + "\n")}

                    . . . . .

                    {this.colourize( "\n<Button raised={true} onClick={this.changeTheme.bind(this)}>Toggle theme</Button>\n")}
                    
                </code>
              </pre>







            </Typography>
            </p>
          </div>
        </Grid>
      </div >

    )
  }

}

export default ThemeEx;