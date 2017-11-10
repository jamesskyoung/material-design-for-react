import React from 'react';
import MUIBase from './MUIBase';

/**
 * Checkbox
 * 
 * Props:
 * 
 */

class Slider extends MUIBase {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.injectMui().then(() => {

      this.setState({ update: true });

    }).catch((err) => {
      alert('injection error ' + err);
    });
  }

  componentDidUnMount() {
    this._continuousSliderEl == null;
    console.log( 'slider unmount!!!');
  }

  /**
   * TODO do I need to detach existing bars?
   */
  componentDidUpdate() {
    if (this._continuousSliderEl != null) {
      return;
    }

    this._continuousSliderEl = document.getElementById('continuous-mdc-slider');
    if (this._continuousSliderEl === null) {
      return;
    }

    //alert( continuousSliderEl );
    this._continuousSlider = new mdc.slider.MDCSlider(this._continuousSliderEl);

    this._continuousSlider.listen('MDCSlider:change', this.changeEvent.bind(this));
    this._continuousSlider.listen('MDCSlider:input', this.inputEvent.bind(this));


    //continuousSlider.listen('MDCSlider:change', function () {
    //  console.log( 'change value from slider is: ' +  continuousSlider.value );
    //});

  }


  changeEvent() {
    if ( this.props.onChange ) {
      this.props.onChange( this._continuousSlider.value );
    }
  }

  inputEvent() {
    if ( this.props.onInput ) {
      this.props.onInput( this._continuousSlider.value );
    }
  }

  //background-color: var(--mdc-theme-secondary,#ff4081);

  render() {

    if (undefined === this.props.min) {
      return <span>Min is undefined</span>
    }

    if (undefined === this.props.max) {
      return <span>Max is undefined</span>
    }

    return (
      <div>
        <div id="continuous-mdc-slider" className="mdc-slider" tabIndex="0" role="slider"
          aria-valuemin={this.props.min} aria-valuemax={this.props.max} aria-valuenow={this.props.value}
          aria-label="Select Value">
          <div className="mdc-slider__track-container">
            <div className="mdc-slider__track"></div>
            
          </div>
          <div className="mdc-slider__thumb-container">
            <svg className="mdc-slider__thumb" width="21" height="21">
              <circle cx="10.5" cy="10.5" r="7.875"></circle>
            </svg>
            <div className="mdc-slider__focus-ring"></div>
          </div>
        </div>


      </div>
    )
  }
}

export default Slider;

