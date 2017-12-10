import React from 'react';
import Button from './Button';
import MUIBase from './MUIBase';

/**
 * Button
 * 
 * Props:
 * id: idToBeUsed
 * raised: true | false.  Default is false
 * style={styleObject}
 */

class Card extends MUIBase {
  constructor(props) {
    super(props);


  }

  /**
   * We support 2 types of cards.  Horizontal and Vertical.
   * 
   * Return what the caller wants.
   */
  getCardMarkup() {

    let headerStyle = undefined === this.props.headerStyle ? '' : this.props.headerStyle;
    let orientation = undefined === this.props.orientation ? 'vertical' : this.props.orientation;
    let style = undefined === this.props.style ? '' : this.props.style;
    if (this.props.shadow) {
      style.boxShadow = '1px 10px 50px 0px rgba(138,133,138,1)';
    }

    let mdcCardStyle = {};
    if (undefined !== this.props.showBorder) {
      if (!this.props.showBorder) {
        mdcCardStyle.boxShadow = '0px 0px 0px 0px';
        mdcCardStyle.borderStyle = 'none';
      }
    }

    if (orientation.toLowerCase() === 'horizontal') {
      let image = undefined === this.props.image ? '' : this.props.image;
      let imagePosition = undefined === this.props.imagePosition ? 'right' : this.props.imagePosition;
      //1px 10px 50px 0px rgba(138,133,138,1) if props.shadow is true
      if (imagePosition.toLowerCase() === 'left') {
        return (
          <div style={style}>
            <div style={mdcCardStyle} className="mdc-card ">
              <div className='mdc-card__horizontal-block'>
                <img className="mdc-card__media-item" src={image} style={{ textAlign: 'right' }} />
                <section className="mdc-card__primary">
                  <h1 className="mdc-card__title mdc-card__title--large">{this.props.title}</h1>
                  <h2 className="mdc-card__subtitle">{this.props.subtitle}</h2>
                </section>

              </div>
              <section className="mdc-card__actions">
                {this.props.children}
              </section>
            </div>
          </div>

        );
      } else {
        return (
          <div style={style}>
            <div style={mdcCardStyle} className="mdc-card ">
              <div className='mdc-card__horizontal-block'>
                <section className="mdc-card__primary">
                  <h1 className="mdc-card__title mdc-card__title--large">{this.props.title}</h1>
                  <h2 className="mdc-card__subtitle">{this.props.subtitle}</h2>
                </section>
                <img className="mdc-card__media-item" src={image} />
              </div>
              <section className="mdc-card__actions">
                {this.props.children}
              </section>
            </div>
          </div>

        );

      }


    } else {
      // Vertical card
      return (
        <div style={style}>
          <div style={mdcCardStyle} className="mdc-card ">
            <section style={headerStyle}></section>
            <section className="mdc-card__primary">
              <h1 className="mdc-card__title mdc-card__title--large">{this.props.title}</h1>
              <h2 className="mdc-card__subtitle">{this.props.subtitle}</h2>
            </section>
            <section className="mdc-card__actions">
              {this.props.children}
            </section>
          </div>
        </div>
      );

    }

  }

  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    return this.getCardMarkup();
  }
}

Card.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName]

    let error = null
    React.Children.forEach(prop, function (child) {

      if (child.type !== Button) {
        error = new Error('`' + componentName + '` children should be of type `Button`.');
      }
    })
    return error
  }
}

export default Card;