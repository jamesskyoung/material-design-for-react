import React from 'react';


class MUIBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }


  }

  componentDidMount() {
    this.injectMui();
  }

  injectMui() {
    // Check if mui instantiated
    return new Promise((resolve, reject) => {
      if (undefined === window.mdc) {
        this.doInject('https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js',
          'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css',
          'https://fonts.googleapis.com/icon?family=Material+Icons').then(() => {

            resolve();
          })
      } else {
        resolve();
      }
  }).catch((err) => {
    reject(err);
  });

  }

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

getStyle(props) {
  return undefined === this.props.style ? {} : this.props.style;
}

render() {
  return (
    <span />

  )
}

}

export default MUIBase;