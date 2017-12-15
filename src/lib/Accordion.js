import React from 'react';
import MUIBase from './MUIBase';

class Accordion extends MUIBase {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.injectMui().then(() => {



    }).catch((err) => {
      alert('injection error ' + err);
    });

  }

  render() {

    let style = this.getStyle(this.props);

    if ( this.props.show ) {
      style.maxHeight= undefined === this.props.maxHeight ? '100em' : this.props.maxHeight;
      style.overflow = 'hidden';
    } else {
      style.maxHeight='0';
      style.overflow = 'hidden'
    }
    style.transition = 'all 1s';
    

    let transitionTime = undefined === this.props.transitionTime
      ? 0
      : this.props.transitionTime;

    let innerStyle = { opacity: '0', transition: 'all ' + transitionTime + 's' };
    console.log(innerStyle);
   
    return (
     
      <div id={this.props.id} style={style} >
        <div id={this.props.id + '_accordion'} xstyle={{overflow: 'hidden'}}>
          {this.props.children}
        </div>
      </div>
    

    )
  }

}

export default Accordion;