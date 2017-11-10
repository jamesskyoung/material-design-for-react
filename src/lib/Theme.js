import React from 'react';
import MUIBase from './MUIBase';

class Theme extends MUIBase {
  constructor(props) {
    super(props);
  }

  /**
   * Set up theme.  SUpported properties
   * 
   * primaryColor -> mdc-theme-primary
   */
  componentDidMount() {
    console.log('will inject theme!!!!!!!!')
    const styleNode = document.createElement('style');

    styleNode.type = "text/css";
    styleNode.id = 'reactMaterialTheme';

    let bodyStyle = 'body { margin: 0px; min-height: 100%; }';
    let primaryStyle = (undefined === this.props.primaryColor ? ''
      : ':root { --mdc-theme-primary: ' + this.props.primaryColor + ';}');
    let secondaryStyle = (undefined === this.props.secondaryColor ? ''
      : ':root { --mdc-theme-secondary: ' + this.props.secondaryColor + ';}');

    let style = bodyStyle + ' ' + primaryStyle + ' ' + secondaryStyle;
    console.log( style );
    if (!!(window.attachEvent && !window.opera)) {
      styleNode.styleSheet.cssText = style;
    } else {
      var styleText = document.createTextNode(style);
      styleNode.appendChild(styleText);
    }
    
    document.getElementsByTagName('head')[0].appendChild(styleNode);
    let obj = document.getElementById( 'reactMaterialTheme').innerHTML;
    console.log( obj)
    //obj.innerHTML = ':root { --mdc-theme-primary: #ff8000;}';
  }

  render() {

    return (
      <span />
    )
  }

}

export default Theme;