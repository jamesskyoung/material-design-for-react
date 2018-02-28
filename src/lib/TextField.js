import React from 'react';
import MUIBase from './MUIBase';

/**
 * TextField
 * 
 * Props:
 * id: idToBeUsed
 * placeholder=Placeholder (Hint text)
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

      var tfRoot = document.querySelectorAll('.mdc-text-field');

      for (var i = 0; i < tfRoot.length; i++) {
        var tf = tfRoot[i];
        mdc.textField.MDCTextField.attachTo(tf);
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

  /** Add mdc-text-field--invalid to show help text in red */
  render() {
    let helpText = this.props.helpText;
    if (undefined !== helpText) {
      helpText = <p className="mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg"
        id={this.props.id + '-helpText-Inner'}>
        {this.props.helpText}
      </p>;
    }
  
    let inputStyle = this.getStyle(this.props);
    
    let newStyle = JSON.stringify( inputStyle );
    let newStyleObj = JSON.parse( newStyle );
    newStyleObj.width='100%';
    let className = 'mdc-text-field__input ' + (undefined === this.props.className ? '' : this.props.className);
   
    return (
      <section style={this.getStyle(this.props)}>
        <div style={inputStyle} className="mdc-text-field">
          <input 
            className={className}
            disabled={this.props.disabled}
            id={this.props.id}
            maxLength={this.props.maxLength} 
            minLength={this.props.minLength} 
            required={this.props.required} 
            value={undefined === this.props.value ? '' : this.props.value}
            onBlur={((event) => { if ( undefined !== this.props.onBlur ) this.props.onBlur( event ) })}
            onChange={((event) => { if ( undefined !== this.props.onChange ) this.props.onChange( event ) })}
            onClick={((event) => { if ( undefined !== this.props.onClick ) this.props.onClick( event ) })}
            onFocus={((event) => { if ( undefined !== this.props.onFocus ) this.props.onFocus( event ) })}
            onPaste={((event) => { if ( undefined !== this.props.onPaste ) this.props.onPaste( event ) })}
            style={newStyleObj} type={this.props.type}
              />
          
          <label className="mdc-text-field__label" htmlFor={this.props.id}>{this.props.placeholder}</label>
          <div className="mdc-text-field__bottom-line"></div>
        </div>
        <span id={this.props.id + '_helpText'}>{helpText}</span>
      </section>
    )
  }

}

export default TextField;