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

    if ( this.props.event ) {
      console.log( this.props.event );
      console.log( 'x: ' + this.props.event.clientX + ' y: ' + this.props.event.clientY );
    }

    this.removeInjectedToolTips();

    let thisObj = document.getElementById(this.props.forId);
    if (thisObj === null) {
      console.log('hmm not there yet?');
      return <span />
    }
    let tooltip = document.createElement('div');

    //tooltip.style.transition = "all 5s";

    //    let charsEntered = thisObj.value.length;

    tooltip.innerHTML = this.props.text;
    tooltip.style.position = 'absolute';
    // tooltip.style.top = '42px';

    //  tooltip.style.height = '32px';
    /*
      tooltip.style.lineHeight = '4px';
      tooltip.style.backgroundColor = 'var(--mdc-theme-secondary)';
      tooltip.style.color = '#fff';
      tooltip.style.boxShadow = '1px 5px 10px 0px rgba(138,133,138,1)';
      tooltip.style.zIndex = 100;
      tooltip.style.padding = '18px';
      tooltip.style.width = 'auto';
      tooltip.style.textAlign = 'center';
      */

    let arrowDiv = document.createElement('div');
    arrowDiv.style.marginLeft = '15px';
    arrowDiv.style.position = 'absolute';
    // arrowDiv.style.top = '32px';


    arrowDiv.classList.add('arrow-up');
    tooltip.classList.add('toolTip', 'tooltipText');

    let rect = thisObj.getBoundingClientRect();
    console.log(rect);
    //tooltip.style.top = (rect.top + window.pageYOffset + (rec.bottom - rect.top) + 26) + 'px';
    tooltip.style.top = (rect.top + window.pageYOffset + (rect.bottom - rect.top) + 10) + 'px';

    tooltip.style.left = rect.left + 'px';
    tooltip.style.left = this.props.event.clientX + 'px';
    tooltip.style.top = ( this.props.event.clientY + 10 )  + 'px';
//    arrowDiv.style.top = (rect.top + window.pageYOffset + 16) + 'px';
    arrowDiv.style.top = (rect.top + window.pageYOffset + (rect.bottom - rect.top)) + 'px';
    console.log( 'orig top ' + arrowDiv.style.top );
    arrowDiv.style.top = ( this.props.event.clientY )  + 'px';
     console.log( 'new top ' + arrowDiv.style.top );
    
    arrowDiv.style.left = rect.left + 'px';
    console.log( 'orig left ' + arrowDiv.style.left );
   
    arrowDiv.style.left = this.props.event.clientX + 'px';
    console.log( 'new left ' + arrowDiv.style.left );

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