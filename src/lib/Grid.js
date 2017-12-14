import React from 'react';
import MUIBase from './MUIBase';

class Grid extends MUIBase {
  constructor(props) {
    super(props);

  }


  render() {
//mdc-layout-grid__cell--span-4
    let children = [];
    this.props.children.map((child, index) => {
      let classNames = undefined === child.props.className ? '' : child.props.className;
      classNames += ' mdc-layout-grid__cell ';
      classNames += (undefined === child.props.span) ? '' : ' mdc-layout-grid__cell--span-' + child.props.span + ' ';
      children.push(React.cloneElement(child, { key: index, className: classNames }));
    });

    let style = this.getStyle(this.props);
    if ( this.props.gutter ) {
      style['--mdc-layout-grid-gutter-desktop'] = this.props.gutter;
    }

    return (
      <div  id={this.props.id} style={style} className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          {children}
        </div>
      </div>

    )
  }

}

export default Grid;