import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import Main from './src/app/Main.jsx';
import Splash from './src/app/Splash.jsx';
import Theme from './src/lib/Theme';

// Examples
import AppBarEx from './src/examples/AppBarEx.jsx';
import ButtonEx from './src/examples/ButtonEx.jsx';
import CardEx from './src/examples/CardEx.jsx';
import ChartsEx from './src/examples/ChartsEx.jsx';
import CheckboxEx from './src/examples/CheckboxEx.jsx';
import DialogEx from './src/examples/DialogEx.jsx';
import DrawerTemp from './src/app//DrawerTemp.jsx';
import LayoutEx from './src/examples/LayoutEx.jsx';
import ListEx from './src/examples/ListEx.jsx';
import MenusEx from './src/examples/MenusEx.jsx';
import PickersEx from './src/examples/PickersEx.jsx';
import ProgressEx from './src/examples/ProgressEx.jsx';
import RadioEx from './src/examples/RadioEx.jsx';
import SelectEx from './src/examples/SelectEx.jsx';
import SliderEx from './src/examples/SliderEx.jsx';
import SnackbarEx from './src/examples/SnackbarEx.jsx';
import SwitchEx from './src/examples/SwitchEx.jsx';
import TabsEx from './src/examples/TabsEx.jsx';
import Template from './src/examples/Template.jsx';
import Test from './src/examples/Test.jsx';
import TextFieldEx from './src/examples/TextFieldEx.jsx';
import ThemeEx from './src/examples/ThemeEx.jsx';
import TypographyEx from './src/examples/TypographyEx.jsx';

/**
 * React router 
 */
const browserHistory = createBrowserHistory();

ReactDOM.render(
  <div>
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path='/appbar' component={AppBarEx} />
        <Route path='/button' component={ButtonEx} />
        <Route path='/card' component={CardEx} />
        <Route path='/charts' component={ChartsEx} />
        <Route path='/checkbox' component={CheckboxEx} />
        <Route path='/dialog' component={DialogEx} />
        <Route path="/drawertemp" component={DrawerTemp} />
        <Route path='/layout' component={LayoutEx} />
        <Route path='/list' component={ListEx} />
        <Route path='/menus' component={MenusEx} />
        <Route path='/pickers' component={PickersEx} />
        <Route path='/progress' component={ProgressEx} />
        <Route path='/radio' component={RadioEx} />
        <Route path='/select' component={SelectEx} />
        <Route path='/slider' component={SliderEx} />
        <Route path='/snackbar' component={SnackbarEx} />
        <Route path='/switch' component={SwitchEx} />
        <Route path='/tabs' component={TabsEx} />
        <Route path='/template' component={Template} />
        <Route path='/test' component={Test} />
        <Route path='/textfield' component={TextFieldEx} />
        <Route path='/theme' component={ThemeEx} />
        <Route path='/typography' component={TypographyEx} />
        <Route exact path="/welcome" component={Main} />
      </Switch>
    </Router>
    <Theme primaryColor='#003087' secondaryColor='#0072ce' />
  </div>,

  document.getElementById('app'));