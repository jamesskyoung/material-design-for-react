import React from 'react';
import MUIBase from './MUIBase';

class Menus extends MUIBase {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }


  }

  componentDidMount() {
    this.injectMui().then(() => {
      var menuEl = document.querySelector('#' + this.props.id);
      var menu = new mdc.menu.MDCSimpleMenu(menuEl);
      var toggle = document.querySelector('#' + this.props.trigger);
      
      toggle.addEventListener('click', function () {
        menu.open = !menu.open;
       
      });

      menuEl.addEventListener('MDCSimpleMenu:selected', ((evt) => {
        var detail = evt.detail;
        // alert(detail.item.textContent.trim() + '" at index ' + detail.index);
        this.props.onSelect(detail.index, detail.item.textContent.trim());
      }));
    }).catch((err) => {
      alert('injection error ' + err.stack);
    });
  }

  render() {
    return (
      <div>

        <div className="mdc-simple-menu" style={{ position: 'absolute' }} tabIndex="-1" id={this.props.id}>
          {this.props.children}
        </div>

      </div>

    )
  }

}

export default Menus;