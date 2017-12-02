import React from 'react';
let _mdc_injected = false;
/**
 * Our BASE CLass.
 * Inject MDC if required
 */
class MUIBase extends React.Component {
  constructor(props) {
    super(props);
    this.injectMui();
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
    if (document.getElementById('muibase') !== null) {
      if (!window.mdc) {
        return new Promise((resolve, reject) => {
          this.waitForMDC(resolve);
        });
      }
    }

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
      console.trace();
      reject(err);
    });

  }

  waitForMDC(resolve) {
    if (window.mdc) {
      resolve(true);
    } else {
      setTimeout(() => { this.waitForMDC(resolve) }, 1);
    }

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
      script.id = 'muibase';
      script.addEventListener('load', resolve);
      script.addEventListener('error', () => reject('Error loading script.'));
      script.addEventListener('abort', () => reject('Script loading aborted.'));
      document.head.appendChild(script);

      const l1 = document.createElement('link');
      l1.rel = 'stylesheet';
      l1.href = link1;
      l1.id = 'muibaselink1';
      document.head.appendChild(l1);

      const l2 = document.createElement('link');
      l2.rel = 'stylesheet';
      l2.href = link2;
      l2.id = 'muibaselink2';
      document.head.appendChild(l2);

      // inject firefox link if needed
      let firefox = navigator.userAgent.search("Firefox");
      if (firefox > 0) {
        const l3 = document.createElement('link');
        l3.rel = 'stylesheet';
        l3.href = 'https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700&subset=latin,cyrillic';
        document.head.appendChild(l3);

      }
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