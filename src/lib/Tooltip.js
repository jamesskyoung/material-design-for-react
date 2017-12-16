import React from 'react';
import MUIBase from './MUIBase';

class Tooltip extends MUIBase {
  constructor(props) {
    super(props);
    require('./css/main.css');
  }

  componentDidMount() {
    this.injectMui().then(() => {



    }).catch((err) => {
      alert('injection error ' + err);
    });

  }

  /**
  * Inject a tooltip.  Ensure all tooltips have been removed first.
  * 
  * Right now, I'm simply using an up arrow.  
  * 
  * @see main.css for styling info
  * @param {*} event - event object.  get id from this 
  * @param {*} tooltipText - Tooltip text 
  */
  injectToolTip(id, tooltipText, isRelative) {
    if (!this.props.show) {
      this.removeInjectedToolTips();
      return <span />
    }

    this.removeInjectedToolTips();

    let thisObj = document.getElementById(this.props.forId);
    if (thisObj === null) {
      return <span />
    }

    let tooltip = document.createElement('div');

    tooltip.innerHTML = this.props.text;
    tooltip.style.position = 'absolute';
   
    let arrowDiv = document.createElement('div');
    arrowDiv.style.marginLeft = '15px';
    arrowDiv.style.position = 'absolute';
    // arrowDiv.style.top = '32px';


    arrowDiv.classList.add('arrow-up');
    tooltip.classList.add('toolTip', 'tooltipText');

    let rect = thisObj.getBoundingClientRect();

    tooltip.style.top = (rect.top + window.pageYOffset + (rect.bottom - rect.top) + 10) + 'px';
    tooltip.style.left = rect.left + 'px';

    if (this.props.event) {
      tooltip.style.left = this.props.event.clientX + 'px';
      tooltip.style.top = (this.props.event.clientY + 10) + 'px';
    }

    arrowDiv.style.top = (rect.top + window.pageYOffset + (rect.bottom - rect.top)) + 'px';
    arrowDiv.style.left = rect.left + 'px';

    if (this.props.event) {
      arrowDiv.style.left = this.props.event.clientX + 'px';
      arrowDiv.style.top = (this.props.event.clientY) + 'px';
    }

    document.body.appendChild(arrowDiv);
    document.body.appendChild(tooltip);
    // use timeout of props
    if (this.props.timeout) {
      setTimeout(() => {
        this.removeInjectedToolTips();
      }, this.props.timeout);
    }

    return <span />
  }

  removeInjectedToolTips() {
    let classNames = ['.toolTip', '.arrow-up'];
    classNames.map((className, index) => {
      let allToolTips = document.querySelectorAll(className);
      for (var i = 0; i < allToolTips.length; i++) {
        allToolTips[i].parentNode.removeChild(allToolTips[i]);
      }
    });
  }

  render() {
    /*
    let style = this.getStyle(this.props);

    if (this.props.show) {
      style.maxHeight = undefined === this.props.maxHeight ? '100em' : this.props.maxHeight;
      style.overflow = 'hidden';
    } else {
      style.maxHeight = '0';
      style.overflow = 'hidden'
    }
    style.transition = 'all 1s';


    let transitionTime = undefined === this.props.transitionTime
      ? 0
      : this.props.transitionTime;

    let innerStyle = { opacity: '0', transition: 'all ' + transitionTime + 's' };
    console.log(innerStyle);
    let display = { display: 'none' };
    */

    return this.injectToolTip();

  }

}

export default Tooltip;