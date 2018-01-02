import React from 'react';
import MUIBase from './MUIBase';

/**
 * Switch
 * 
 * Props:
 * 
 */

class Radio extends MUIBase {
  constructor(props) {
    super(props);

  }

  //background-color: var(--mdc-theme-secondary,#ff4081);

  render() {
    return (
        <div className='mdc-form-field'>
        <div className="mdc-radio">
          <input className="mdc-radio__native-control" value={this.props.value} type="radio" id={this.props.id} name={this.props.name} checked={this.props.isChecked} 
          
            onClick={((event) => {
              this.props.onClick( event, this.props.id, this.props.name, this.props.value );
            })}
          />
          <div className="mdc-radio__background ">
            <div className="mdc-radio__outer-circle "></div>
            <div className="mdc-radio__inner-circle "></div>
          </div>
        </div>
        <label id={"label_" + this.props.id} htmlFor={this.props.id}>{this.props.label}</label>
        </div>

    )
  }

}

export default Radio;

