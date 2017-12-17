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
    arrowDiv.style.zIndex=999999;
    tooltip.classList.add('toolTip', 'tooltipText');

    let rect = thisObj.getBoundingClientRect();
    let position = undefined === this.props.position
      ? 'below' // default is below
      : this.props.position.toLowerCase();
    console.log('position is: ' + position);
    if (position === 'left') {
      this.doTTLeft(arrowDiv, tooltip, rect);
    } else if (position === 'right') {
      this.doTTRight(arrowDiv, tooltip, rect);
    } else if (position === 'above') {
      this.doTTAbove(arrowDiv, tooltip, rect);
    } else if (position === 'below') {
      this.doTTBelow(arrowDiv, tooltip, rect);
    }


    // use timeout of props
    if (this.props.timeout) {
      setTimeout(() => {
        console.log('remvoing');
        //this.removeInjectedToolTips();
      }, this.props.timeout);
    }

    return <span />
  }

  /**
   * Tooltip Left
   * @param {*} arrowDiv 
   * @param {*} tooltip 
   * @param {*} rect 
   */
  doTTLeft(arrowDiv, tooltip, rect) {
    //arrowDiv.style.marginLeft = '15px';
    arrowDiv.style.position = 'absolute';
    arrowDiv.classList.add('arrow-right');


    //tooltip.style.right = (rect.left - 0) + 'px';


    document.body.appendChild(arrowDiv);
    document.body.appendChild(tooltip);

    console.log(tooltip.style);
    console.log(tooltip.getBoundingClientRect().height);
    tooltip.style.left = (rect.left - tooltip.getBoundingClientRect().width - 10) + 'px';
    tooltip.style.top = (rect.top + window.pageYOffset) + 'px'; // - (tooltip.getBoundingClientRect().height / 1)) + 'px';
    //  console.log( ((tooltip.style.top - tooltip.getBoundingClientRect().height ) / 2) + 'px' );
    //  tooltip.style.top = ((tooltip.style.top - tooltip.getBoundingClientRect().height ) / 2) + 'px';
    arrowDiv.style.top = (rect.top + window.pageYOffset + (tooltip.getBoundingClientRect().height / 2 - 10)) + 'px';
    arrowDiv.style.left = (rect.left - 12) + 'px';

    console.log(tooltip.style.top);

  }

  doTTRight(arrowDiv, tooltip, rect) {

  }

  doTTAbove(arrowDiv, tooltip, rect) {
    arrowDiv.style.marginLeft = '15px';
    arrowDiv.style.position = 'absolute';
    arrowDiv.classList.add('arrow-down');

    tooltip.style.left = rect.left + 'px';
    //arrowDiv.style.left = rect.left + 'px';

    document.body.appendChild(arrowDiv);
    document.body.appendChild(tooltip);

    arrowDiv.style.top = (rect.top + window.pageYOffset - (arrowDiv.getBoundingClientRect().height )) + 'px';
    arrowDiv.style.left = (rect.left + ( tooltip.getBoundingClientRect().width - 48 ) / 2 ) + 'px';
    tooltip.style.top = (rect.top + window.pageYOffset - (tooltip.getBoundingClientRect().height + 10)) + 'px';

  }


  /**
   * Tooltip Below
   * @param {*} arrowDiv 
   * @param {*} tooltip 
   * @param {*} rect 
   */
  doTTBelow(arrowDiv, tooltip, rect) {

    arrowDiv.style.marginLeft = '15px';
    arrowDiv.style.position = 'absolute';
    arrowDiv.classList.add('arrow-up');

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

    arrowDiv.style.left = (rect.left + ( tooltip.getBoundingClientRect().width - 48 ) / 2 ) + 'px';

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