import React from 'react';
import MUIBase from './MUIBase';

/**
 * Button
 * 
 * Props:
 * id: idToBeUsed
 * raised: true | false.  Default is false
 * style={styleObject}
 */

class Button extends MUIBase {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }

  }

  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  adjustLineheight(pros) {

  }

  render() {

    let className = (undefined === this.props.raised || !this.props.raised) ? 'mdc-button' : 'mdc-button mdc-button--raised';
    if (undefined !== this.props.type) {
      if (this.props.type.trim() === 'secondary') {
        className += ' mdc-theme--secondary-bg mdc-theme--text-primary-on-secondary ';
      } else if (this.props.type.trim() === 'flat') {
        className += ' problem    ';
      } else {
        className += ' mdc-theme--primary-bg mdc-theme--text-primary-on-secondary ';
      }
    } else {
      className += '  ';
    }

    console.log(className);

    let children = [];
    let childArray = [];

    if (Array.isArray(this.props.children)) {
      childArray = this.props.children;
    } else {
      childArray.push(this.props.children);
    }


    childArray.map((child, index) => {
      if (undefined === child.props) {

        //child,props.style.lineHeight = '36px';

        children.push(child);
        return;
      }

      let classNames = undefined === child.props.className ? '' : child.props.className;
      if (classNames.toLowerCase().indexOf('button__icon') > 0) {
        let childStyle = undefined === child.props.style ? {} : child.props.style;
        childStyle.lineHeight = '36px';
        children.push(React.cloneElement(child, { key: index, style: childStyle }));
      } else {
        children.push(React.cloneElement(child, { key: index }));
      }
    });


    /*
    this.props.children.map((child, index) => {
      let classNames = undefined === child.props.className ? '' : child.props.classNames;
      if (classNames.toLowerCase().indexOf('button__icon') > 0) {
        let childStyle = undefined === child.props.style ? {} : child.props.style;
        childStyle.lineHeight = '36px';
        children.push(React.cloneElement(child, { key: index, style: childStyle }));
      } else {
        children.push(React.cloneElement(child, { key: index }));
      }
    });
*/
    let style = this.getStyle(this.props);

    return (


      <button disabled={this.props.disabled} className={className} id={this.props.id}
        onClick={this.onClick.bind(this)}
        style={this.getStyle(this.props)}  >
        {children}
      </button>


    )
  }

}

export default Button;