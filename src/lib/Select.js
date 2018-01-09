import React from 'react';
import MUIBase from './MUIBase';

/**
 * Checkbox
 * 
 * Props:
 * 
 */

class Select extends MUIBase {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.injectMui().then(() => {
      var MDCSelect = mdc.select.MDCSelect;
      let root = document.getElementById(this.props.id);
      let select = new MDCSelect(root);

      root.addEventListener('MDCSelect:change', () => {
        let value = this.props.options[select.selectedIndex].value;
        this.props.onClick(select.selectedIndex, value);
      });

      if (this.props.value) {
        // add hover class...
        // Framework does not listen to direct setting of value.. so need to add class
        let obj = document.getElementById(this.props.id + '_selectLabel');
        if (obj !== null) {
          obj.classList.add('mdc-select__label--float-above');
        }
      }
    });
  }

  //background-color: var(--mdc-theme-secondary,#ff4081);

  render() {

    let style = this.getStyle(this.props);
    // style.width = '100%';

    return (

      <div style={this.getStyle(this.props)} className='mdc-form-field'>
        <div id={this.props.id} style={this.getStyle(this.props)} className="mdc-select" role="listbox" tabIndex="0">
          <div className="mdc-select__surface">
            <div id={this.props.id + '_selectLabel'} className="mdc-select__label">{this.props.title}</div>
            <div className="mdc-select__selected-text"></div>
            <div className="mdc-select__bottom-line"></div>
          </div>
          <div className="mdc-simple-menu mdc-select__menu">
            <ul className="mdc-list mdc-simple-menu__items">

              {
                this.props.options.map((option, index) => {
                  let isSelected = 'false';
                  if (option.value === this.props.value) {
                    return (<li key={index} tabIndex='0' id={option.id}
                      role='option'
                      aria-selected
                      className="mdc-list-item" role="option" aria-disabled={!option.enabled}>
                      {option.value}
                    </li>
                    )

                  } else {

                    return (<li key={index} tabIndex='0' id={option.id}
                      role='option'
                      className="mdc-list-item" role="option" aria-disabled={!option.enabled}>
                      {option.value}
                    </li>
                    )
                  }
                })}


            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Select;

