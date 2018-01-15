import React from 'react';
import MUIBase from './MUIBase';

/**
 * Checkbox
 * 
 * Props:
 * 
 */

class Checkbox extends MUIBase {
  constructor(props) {
    super(props);

  }

  //background-color: var(--mdc-theme-secondary,#ff4081);

  render() {

    return (
      <div style={{display: 'inline-flex'}} className='mdc-form-field'>
        <div className="mdc-checkbox">
          <input type="checkbox"
            checked={this.props.isChecked}
            disabled = {this.props.disabled}
            id={this.props.id}
            
            onClick={((event) => {
              this.props.onClick(event, this.props.id, !this.props.isChecked);
            })}
            className="mdc-checkbox__native-control" />
          <div className="mdc-checkbox__background">
            <svg className="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
              <path className="mdc-checkbox__checkmark__path"
                fill="none"
                stroke="white"
                d="M1.73,12.91 8.1,19.28 22.79,4.59" />
            </svg>
            <div className="mdc-checkbox__mixedmark"></div>
          </div>
        </div>

        <label htmlFor={this.props.id}>{this.props.label}</label>
      </div>

    )
  }

}

export default Checkbox;

