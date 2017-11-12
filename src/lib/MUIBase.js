import React from 'react';

/**
 * Our BASE CLass.
 * Inject MDC if required
 */
class MUIBase extends React.Component {
  constructor(props) {
    super(props);

  }

  /**
   * Inject after we are mounted
   */
  componentDidMount() {
    this.injectMui();
  }

  /**
   * Check if we need to inject.. and if so, do it
   */
  injectMui() {
    // Check if mui instantiated
    return new Promise((resolve, reject) => {
      if (undefined === window.mdc) {
        this.doInject(
          'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js',
          'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css',
          'https://fonts.googleapis.com/icon?family=Material+Icons').then(() => {
            document.body.style.display = 'block';
            resolve();
          })
      } else {
        resolve();
      }
    }).catch((err) => {
      reject(err);
    });

  }

  /**
   * Inject the MDC resources.
   * 
   * @todo Make it generic...with an array of resources etc...
   * 
   * @param {*} src 
   * @param {*} link1 
   * @param {*} link2 
   */
  doInject(src, link1, link2) {

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.async = true;
      script.src = src;
      script.addEventListener('load', resolve);
      script.addEventListener('error', () => reject('Error loading script.'));
      script.addEventListener('abort', () => reject('Script loading aborted.'));
      document.head.appendChild(script);

      const l1 = document.createElement('link');
      l1.rel = 'stylesheet';
      l1.href = link1;
      document.head.appendChild(l1);

      const l2 = document.createElement('link');
      l2.rel = 'stylesheet';
      l2.href = link2;
      document.head.appendChild(l2);
    });
  }

  /**
   * Return style prop... Every component needs this
   * @param {*} props 
   */
  getStyle(props) {
    return undefined === this.props.style ? {} : this.props.style;
  }

  /**
   * Dummy render.. just return span.
   */
  render() {
    return (
      <span />
    )
  }
}

export default MUIBase;