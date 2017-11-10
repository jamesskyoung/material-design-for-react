import React from 'react';
import { Link } from 'react-router-dom';
import MUIBase from '../lib/MUIBase';
import Grid from '../lib/Grid'
import MainHeader from './MainHeader.jsx';
import List from '../lib/List';
import ListItem from '../lib/ListItem';
import Theme from '../lib/Theme';
import Typography from '../lib/Typography';


class Main extends MUIBase {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.injectMui().then(() => {

    }).catch((err) => {
      alert('injection error ' + err);
    });
  }

  render() {
    return (
      <div >
        <MainHeader />
        <Grid >
          <div span='1'></div>
          <div style={{ textAlign: 'left', }} span='11'>
            <h1><Typography font='display2'>Welcome!</Typography></h1>
            <p className="mdc-typography--body1">
              This project implements Material Design Components for React. This site was built
              using these components.
            </p>
            <h2><Typography font='display1'>About Material Design (From Google)</Typography></h2>
            <blockquote>
              <Typography font='body1'>
                <div style={{ padding: '6px' }}>Design is the art of continuous problem solving—an active cycle of investigating and validating needs, crafting and developing ideas, and creating solutions. Over the course of its life, a digital product is shaped by many hands. The effects of this collaboration can be seen in the quality of a product’s identity and implementation, as well as in the strength of the community it builds.
                <p>
                    We created Material Design as a metaphor to rationalize design and implementation, establishing a shared language to help teams unite style, branding, interaction, and motion under a cohesive set of principles.
                </p>
                  <a href='https://material.io/' target='_blank'>Link</a>
                </div>
              </Typography>
            </blockquote>
            <h2><Typography font='display1'>About these components</Typography></h2>
            <Typography font='body1'>
              <p>
                When I was looking for a new UX look and feel for a project at work, I came across
              Material Design ("MD").  I found some very good libraries that implemented MD for React. I also found
              that they differed somewhat between each other and also suffered inconsistencies from one
              release to another.
              </p>
              <p>
                I therefore took the approach of wrapping Material Design Components (WEB) inside React components.
              That's all my library is.  A loose wrapper of MD components.  But, what you get is a true implementation
              of Material Components.  This approach is endorsed by Google.
              <a target='_blank' href='https://material.io/components/web/docs/framework-integration/'>See this article</a>
              </p>
              <p>
                The links on the left side (which is a Material Permanent Drawer) show examples of each component complete
                with code snippets.
                </p>
            </Typography>
          </div >

        </Grid>
      </div>

    )
  }

}

export default Main;