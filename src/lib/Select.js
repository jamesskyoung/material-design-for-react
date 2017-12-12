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
      let selects = document.querySelectorAll('.mdc-select');
      for (let i = 0; i < selects.length; i++) {
        const select = new MDCSelect(selects[i]);
        select.listen('MDCSelect:change', () => {
          this.props.onClick(select.selectedIndex, select.value);
        });
      }



    });
  }

  //background-color: var(--mdc-theme-secondary,#ff4081);

  render() {

    this.props.options.map((option, index) => {
      console.log(option.label + ' ' + option.value + '' + option.enabled);
    });
    let style = this.getStyle(this.props);
    style.width = '100%';
    return (

      <div style={this.getStyle(this.props)} className='mdc-form-field'>
        <div id="hero-js-select" className="mdc-select" role="listbox" tabindex="0">
          <div className="mdc-select__surface">
            <div className="mdc-select__label">{this.props.title}</div>
            <div className="mdc-select__selected-text"></div>
            <div className="mdc-select__bottom-line"></div>
          </div>
          <div className="mdc-simple-menu mdc-select__menu">
            <ul className="mdc-list mdc-simple-menu__items">

              {
                this.props.options.map((option, index) => {
                  return (<li key={index} tabIndex='0'
                    aria-selected={option.selected}
                    className="mdc-list-item" role="option" aria-disabled={!option.enabled}>
                    {option.value}
                  </li>
                  )
                })
              }


            </ul>
          </div>
        </div>


      </div>


    )


  }

}

export default Select;

