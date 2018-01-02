import React from 'react';
import MUIBase from './MUIBase';

/**
 * Checkbox
 * 
 * Props:
 * 
 */

class Progress extends MUIBase {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.injectMui().then(() => {

      this.setState({ update: true });

    }).catch((err) => {
      alert('injection error ' + err);
    });
  }

  /**
   * TODO do I need to detach existing bars?
   */
  componentDidUpdate() {
    var determinates = document.querySelectorAll('.mdc-linear-progress');
    for (var i = 0, determinate; determinate = determinates[i]; i++) {
      if ( determinate.classList.contains( 'indeterminate') ) {
        continue;
      }
      var linearProgress = mdc.linearProgress.MDCLinearProgress.attachTo(determinate);
      linearProgress.progress = this.props.value;
      if (determinate.dataset.buffer) {
        linearProgress.buffer = 0.75;
      }

    }

  }

  //background-color: var(--mdc-theme-secondary,#ff4081);

  render() {
    let className = '';
    if (undefined === this.props.type) {
      return <span>You must supply a type property for this progress bar</span>;
    } else if (this.props.type === 'determinate') {
      className = 'mdc-linear-progress';
    } else if (this.props.type === 'indeterminate') {
      className = 'mdc-linear-progress mdc-linear-progress--indeterminate';
    } else {
      return <span>Invalid progress bar type (or none) supplied.</span>;
    }

    if ( undefined !== this.props.reverse ) {
      className += ' ' + (this.props.reverse ? 'mdc-linear-progress--reversed' : '' );
    }

    if ( undefined !== this.props.color ) {
      className += ' ' + (this.props.color === 'secondary' ? 'mdc-linear-progress--accent' : '' );
    }

    return (
        <div id={this.props.id} style={this.getStyle(this.props)} role="progressbar" className={className}>
          <div className="mdc-linear-progress__buffering-dots"></div>
          <div  className="mdc-linear-progress__buffer"></div>
          <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
            <span style={{backgroundColor: 'rrrred'}} className="mdc-linear-progress__bar-inner"></span>
          </div>
          <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
            <span className="mdc-linear-progress__bar-inner"></span>
          </div>
        </div>
    )
  }
}

export default Progress;

