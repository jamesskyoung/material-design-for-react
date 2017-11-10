import React from 'react';
import MUIBase from './MUIBase';

/**
 * Switch
 * 
 * Props:
 * 
 */

class Switch extends MUIBase {
  constructor(props) {
    super(props);

  }

  //background-color: var(--mdc-theme-secondary,#ff4081);

  render() {

    return (
      <div >
        <div className="mdc-switch">
          <input type="checkbox"
            id={this.props.id}
            checked={this.props.isChecked ? this.props.isChecked : false}
            className="mdc-switch__native-control"
            onChange={((event)=> {
              this.props.onClick( event.target.checked, this.props.value );
            })}
            value={this.props.value}

            disabled={this.props.disabled}
          />
          <div className="mdc-switch__background " >
            <div className="mdc-switch__knob mdc-theme--background" ></div>
          </div>
        </div>
        &nbsp;
            <label htmlFor={this.props.id} className="mdc-switch-label">{this.props.label}</label>


            
      </div>
    )
  }

}

export default Switch;

