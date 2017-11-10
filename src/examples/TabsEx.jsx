import React from 'react';
import Button from '../lib/Button';
import Card from '../lib/Card';
import Grid from '../lib/Grid';
import MainHeader from '../app/MainHeader.jsx';
import Typography from '../lib/Typography';
import Tabs from '../lib/Tabs';
import TabDetail from '../lib/TabDetail';


class TabsEx extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div>

        <MainHeader />
        <Grid>
          <div span='1'></div>
          <div span='11'>
            <Typography font='display2'>Tabs</Typography>

            <Tabs id='myTabsnew' panelsId='myPanels' scroll={true}>
              <a role="tab" aria-controls="panel-1"
                className="mdc-tab mdc-tab--active" href="#panel-1">Tab 1</a>
              <a role="tab" aria-controls="panel-2"
                className="mdc-tab" href="#panel-2">Tab 2</a>
              <a role="tab" aria-controls="panel-3"
                className="mdc-tab" href="#panel-3">Tab 3</a>
              <a role="tab" aria-controls="panel-4"
                className="mdc-tab " href="#panel-4">Tab 4</a>
              <a role="tab" aria-controls="panel-5"
                className="mdc-tab" href="#panel-5">Tab 5</a>
              <a role="tab" aria-controls="panel-6"
                className="mdc-tab" href="#panel-6">Tab 6</a>
              <a role="tab" aria-controls="panel-7"
                className="mdc-tab " href="#panel-7">
                <i className="material-icons mdc-tab__icon" aria-label="Phone">phone</i>
                <span className="mdc-tab__icon-text">Phone</span>
              </a>
              <a role="tab" aria-controls="panel-8"
                className="mdc-tab" href="#panel-8">Tab 8</a>
              <a role="tab" aria-controls="panel-9"
                className="mdc-tab" href="#panel-9">Tab 9</a>

            </Tabs>

            <TabDetail>
              <div id='myPanels'>
                <p className="mdc-panel active" id="panel-1" role="tabpanel" aria-hidden="false">Item One</p>
                <p className="mdc-panel" id="panel-2" role="tabpanel" aria-hidden="true">Item Two</p>
                <p className="mdc-panel" id="panel-3" role="tabpanel" aria-hidden="true">Item Three </p>
                <p className="mdc-panel" id="panel-4" role="tabpanel" aria-hidden="true">

                <div style={{ margin: '64px' }}>
                  <Card style={{ width: '320px' }} title='Horizontal Card Title' subtitle='This is a subtitle' orientation='horizontal'
                    image={"images/16-9.jpg"}>
                    <Button raised={true}> Action 1</Button>
                    <Button> Action 2</Button>
                  </Card>
                </div>
                </p>
                <p className="mdc-panel" id="panel-5">
                <div style={{ margin: '64px' }}>
                  <Card style={{ width: '320px' }} title='Your IP Address' subtitle='is 10.1.2.32'
                    headerStyle={{ backgroundImage: 'url("images/ip1.jpg")', backgroundSize: 'cover', maxWidth: '100%', height: '120px' }}>
                    <Button raised={true}> Action 1</Button>
                    <Button> Action 2</Button>

                  </Card>
                </div>
                </p>

                <p className="mdc-panel" id="panel-6" role="tabpanel" aria-hidden="true">Item 6 </p>
                <p className="mdc-panel " id="panel-7" role="tabpanel" aria-hidden="false">Item 7</p>
                <p className="mdc-panel" id="panel-8" role="tabpanel" aria-hidden="true">Item 8</p>
                <p className="mdc-panel" id="panel-9" role="tabpanel" aria-hidden="true">Item 9 </p>
              </div>
            </TabDetail>
          </div >
        </Grid>
      </div>

    )
  }

}

export default TabsEx;