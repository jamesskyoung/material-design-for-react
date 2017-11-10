import React from 'react';
import Grid from '../lib/Grid'
import List from '../lib/List';
import ListItem from '../lib/ListItem';
import MainHeader from '../app/MainHeader.jsx';
import Theme from '../lib/Theme';
import Typography from '../lib/Typography';



class AppBarEx extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (

      <div>
        <MainHeader />
        <Grid>
          <div span='2'></div>
          <div style={{ textAlign: 'left' }} span='10'>
            <Typography font='display2'>AppBar</Typography>
            <p className="mdc-typography--body1">
              The AppBar is a composable header component. Use it to provide a drop down 'burger' menu, page title, add icons
              and text to the right side for user options.

              <p>From the MDC web site...</p>

              <blockquote style={{ borderLeft: 'solid 4px #ccc', padding: '12px' }}>
                MDC Toolbar acts as a container for multiple rows containing items such as application title, navigation menu, and tabs, among other things. Toolbars scroll with content by default, but support fixed behavior as well.
              </blockquote>
              <p>The AppBar on this page contains 3 components.
                <List>
                  <ListItem>
                    <i style={{ color: 'slategrey', marginRight: '12px' }} className="material-icons" aria-hidden="true">check</i>
                    The AppBar container
                  </ListItem>
                  <ListItem>
                    <i style={{ color: 'slategrey', marginRight: '12px' }} className="material-icons" aria-hidden="true">check</i>
                    A temporary drawer component (This is the menu that is activated when the burger menu is clicked.)
                  </ListItem>
                  <ListItem>
                    <i style={{ color: 'slategrey', marginRight: '12px' }} className="material-icons" aria-hidden="true">check</i>
                    A toolbar component that holds the other icons that can be actionable.
                  </ListItem>
                </List>
              </p>
              <pre>
                <code>



                </code>
              </pre>
            </p>

          </div >

        </Grid>
      </div>
    )
  }

}

export default AppBarEx;