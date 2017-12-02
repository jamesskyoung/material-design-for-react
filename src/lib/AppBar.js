import React from 'react';
import MUIBase from './MUIBase';

/**
 * AppBar
 * 
 * Props:
 * title
 * 
 * 
 */
class AppBar extends MUIBase {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
      ;

  }

  componentDidMount() {
    this.injectMui().then(() => {
     
      this.setState({ render: true });
    }).catch((err) => {
      alert('appbar injection error ' + err);
    });
  }

  render() {

    return (
      <div>
        
          {this.props.children}
       
      </div>

    )
  }

}

export default AppBar;