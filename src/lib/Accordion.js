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

  updateComponent() {

    setTimeout(() => {
      console.log('Show accordion? ' + this.props.show);
      if (this.props.show) {
       // document.getElementById(this.props.id + '_accordion').style.top = '0px';
       // document.getElementById(this.props.id + '_accordion').style.height = 'auto';
        document.getElementById(this.props.id + '_accordion').style.opacity = '1';
      } else {
        document.getElementById(this.props.id + '_accordion').style.opacity = '0';
       // document.getElementById(this.props.id + '_accordion').style.top = '-2000px';
        //document.getElementById(this.props.id + '_accordion').style.height = '0px';
        setTimeout(() => {
          document.getElementById(this.props.id).style.visibility = false;
        }, this.props.transitionTime ? 1000 : this.props.transitionTime );
      }

    }, 1);


  }

  render() {
    this.updateComponent();
    let style = this.getStyle(this.props);
   
    if (this.props.show) {
      style.display= 'block';
    } else {
      style.display = 'none';
    }
        console.log( style );

    let transitionTime = undefined === this.props.transitionTime
      ? 0
      : this.props.transitionTime;

    let innerStyle = { opacity: '0', transition: 'all ' + transitionTime + 's' };
    console.log(innerStyle);
   
    return (
      <div id={this.props.id} style={style} >
        <div id={this.props.id + '_accordion'} style={innerStyle}>
          {this.props.children}
        </div>
      </div>

    )
  }

}

export default Accordion;