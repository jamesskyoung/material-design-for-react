import React from 'react';
import MUIBase from './MUIBase';

/**
 * TextField
 * 
 * Props:
 * type = text | password
 * label = SomeValue
 * style={styleObject}
 */
class TextField extends MUIBase {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }


  }

  componentDidMount() {
    this.injectMui().then(() => {

      var tfRoot = document.querySelectorAll('.mdc-textfield');
      console.log(tfRoot.length);
      for (var i = 0; i < tfRoot.length; i++) {
        var tf = tfRoot[i];
        new mdc.textfield.MDCTextfield(tf);
      }

      //var helptext = document.querySelector('.mdc-textfield-helptext');
      //var tf = new mdc.textfield.MDCTextfield(helptext);

      //document.getElementById('required').addEventListener('change', function (evt) {
      //  var target = evt.target;
      //  helptext.querySelector('.mdc-textfield__input').required = target.checked;
      //});
        /*
      document.getElementById('use-helptext').addEventListener('change', function (evt) {
        var target = evt.target;
        tf.helptextElement = target.checked ? helptext : null;
        helptext.style.display = target.checked ? 'block' : 'none';
        document.getElementById('persistent-help-text').disabled = !target.checked;
        document.getElementById('helptext-as-validation').disabled = !target.checked;
      });
      document.getElementById('persistent-help-text').addEventListener('change', function (evt) {
        var target = evt.target;
        helptext.classList[target.checked ? 'add' : 'remove'](
          'mdc-textfield-helptext--persistent'
        );
      });
      document.getElementById('helptext-as-validation').addEventListener('change', function (evt) {
        var target = evt.target;
        helptext.classList[target.checked ? 'add' : 'remove'](
          'mdc-textfield-helptext--validation-msg'
        );
      });
      */

    }).catch((err) => {
      alert('injection error ' + err);
    });
  }

  render() {
    return (
      <div>
        <div className="mdc-textfield">

          <input type="text" id="my-textfield" className="mdc-textfield__input" />
          <label className="mdc-textfield__label " htmlFor="my-textfield">Hint text</label>

          <div className="mdc-textfield__bottom-line"></div>
        </div>
        <br /><br /><br /><br />
        <div className="mdc-textfield">
          <input required pattern=".{8,}" type="password" className="mdc-textfield__input" id="pw"
            aria-controls="pw-validation-msg"
            autoComplete="current-password" />
          <label htmlFor="pw" className="mdc-textfield__label">Choose password</label>
          <div className="mdc-textfield__bottom-line"></div>
        </div>
        <p className="mdc-textfield-helptext mdc-textfield-helptext--persistent mdc-textfield-helptext--validation-msg"
          id="pw-validation-msg">
          Must be at least 8 characters long
        </p>

      </div>

    )
  }

}

export default TextField;