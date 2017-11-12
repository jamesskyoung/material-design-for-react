import React from 'react';
import Button from '../lib/Button';
import Card from '../lib/Card';
import Colourizer from '../lib/Colourizer';
import Grid from '../lib/Grid';
import MainHeader from '../app/MainHeader.jsx';
import Typography from '../lib/Typography';
import Tabs from '../lib/Tabs';
import TabDetail from '../lib/TabDetail';


class TabsEx extends React.Component {
  constructor(props) {
    super(props);

  }


  colourize(element) {
    return Colourizer.colourize(element);
  }

  render() {

    return (
      <div className='mdc-typography--body1'>

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
            The example above is a scrollable tab bar.  Tabs 4 and 5 contain Card components.
            <div className="mdc-list-divider" role="separator"></div>
          </div >

          <div span='1'></div>
          <div style={{ textAlign: 'left' }} span='11'>
            <Typography font='display1'>About &rarr; <strong>Tabs</strong></Typography>
            <p>
              The Tabs component is very flexible. I tis made up of th eTabs
              component itself and a TabDetail component.  The Tabs can
              be scrollable which is useful if you have a lot of tabs
              that could potentially be off screen because of width.
            </p>
            <p>
              Tabs do not wrap.
            </p>

            <table cellSpacing={5} style={{ width: '100%', borderSpacing: '0px', padding: '6px' }}>
              <thead style={{ padding: '6px' }}>
                <tr >
                  <th style={{ borderBottom: '1px solid #eee' }}>Name</th>
                  <th style={{ borderBottom: '1px solid #eee' }}>Type</th>
                  <th style={{ borderBottom: '1px solid #eee' }}>Default</th>
                  <th style={{ borderBottom: '1px solid #eee' }}>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr ><td >id</td><td>id</td><td>none</td><td>The ID of this component</td></tr>
                <tr ><td >panelsId</td><td>String</td><td>none</td><td>The Id of a div containing the tabs details.</td></tr>
                <tr ><td >scroll</td><td>Boolean</td><td>false</td><td>Do the tabs scroll?</td></tr>
              </tbody>
            </table>
            <div style={{ marginTop: '24px' }}></div>
            This page can be viewed here <a href='https://github.com/jamesskyoung/material-design-for-react/blob/master/src/examples/TabsEx.jsx' target='_blank'>Here</a>

            <p>
              <Typography font='headline'>Code example</Typography>
            </p>

            <pre style={{
              fontFace: 'Roboto Mono, monospace', padding:
              '6px', background: '#eee',
              borderRadius: '6px'
            }}>
              <code>
                {this.colourize(
                  "<<Tabs id='myTabsnew' panelsId='myPanels' scroll={true}>"
                  + "\n    <a role='tab' aria-controls='panel-1'"
                  + "\n       className='mdc-tab mdc-tab--active' href='#panel-1'>Tab 1</a>"
                  + "\n    <a role='tab' aria-controls='panel-2'"
                  + "\n       className='mdc-tab' href='#panel-2'>Tab 2</a>"
                  + "\n    <a role='tab' aria-controls='panel-3'"
                  + "\n       className='mdc-tab' href='#panel-3'>Tab 3</a>"
                  + "\n    <a role='tab' aria-controls='panel-4'"
                  + "\n       className='mdc-tab ' href='#panel-4'>Tab 4</a>"
                  + "\n    <a role='tab' aria-controls='panel-5'"
                  + "\n       className='mdc-tab' href='#panel-5'>Tab 5</a>"
                  + "\n    <a role='tab' aria-controls='panel-6'"
                  + "\n       className='mdc-tab' href='#panel-6'>Tab 6</a>"
                  + "\n    <a role='tab' aria-controls='panel-7'"
                  + "\n       className='mdc-tab ' href='#panel-7'>"
                  + "\n    <i className='material-icons mdc-tab__icon' aria-label='Phone'>phone</i>"
                  + "\n    <span className='mdc-tab__icon-text'>Phone</span>"
                  + "\n    </a>"
                  + "\n    <a role='tab' aria-controls='panel-8'"
                  + "\n       className='mdc-tab' href='#panel-8'>Tab 8</a>"
                  + "\n    <a role='tab' aria-controls='panel-9'"
                  + "\n       className='mdc-tab' href='#panel-9'>Tab 9</a>"
                  + "\n </Tabs>"
                  + "\n <TabDetail>"
                  + "\n    <div id='myPanels'>"
                  + "\n       <p className='mdc-panel active' id='panel-1' role='tabpanel' aria-hidden='false'>Item One</p>"
                  + "\n       <p className='mdc-panel' id='panel-2' role='tabpanel' aria-hidden='true'>Item Two</p>"
                  + "\n       <p className='mdc-panel' id='panel-3' role='tabpanel' aria-hidden='true'>Item Three </p>"
                  + "\n       <p className='mdc-panel' id='panel-4' role='tabpanel' aria-hidden='true'>"
                  + "\n          <div style={{ margin: '64px' }}>"
                  + "\n          <Card style={{ width: '320px' }} "
                  + "\n            title='Horizontal Card Title' "
                  + "\n            subtitle='This is a subtitle' orientation='horizontal'"
                  + "\n            image={'images/16-9.jpg'}>"
                  + "\n           <Button raised={true}> Action 1</Button>"
                  + "\n           <Button> Action 2</Button>"
                  + "\n          </Card>"
                  + "\n    </div>"
                  + "\n    </p>"
                  + "\n    <p className='mdc-panel' id='panel-5'>"
                  + "\n       <div style={{ margin: '64px' }}>"
                  + "\n       <Card style={{ width: '320px' }} "
                  + "\n         title='Your IP Address' subtitle='is 10.1.2.32'"
                  + "\n         headerStyle={{ backgroundImage: 'url('images/ip1.jpg')', "
                  + "\n         backgroundSize: 'cover', maxWidth: '100%', height: '120px' }}>"
                  + "\n         <Button raised={true}> Action 1</Button>"
                  + "\n        <Button> Action 2</Button>"
                  + "\n       </Card>"
                  + "\n    </div>"
                  + "\n    </p>"
                  + "\n    <p className='mdc-panel' id='panel-6' role='tabpanel' aria-hidden='true'>Item 6 </p>"
                  + "\n    <p className='mdc-panel ' id='panel-7' role='tabpanel' aria-hidden='false'>Item 7</p>"
                  + "\n    <p className='mdc-panel' id='panel-8' role='tabpanel' aria-hidden='true'>Item 8</p>"
                  + "\n    <p className='mdc-panel' id='panel-9' role='tabpanel' aria-hidden='true'>Item 9 </p>"
                  + "\n    </div>"
                  + "\n </TabDetail>")}

              </code>
            </pre>
          </div>
        </Grid>
      </div>

    )
  }

}

export default TabsEx;