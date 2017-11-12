# Material Design for React
When I was looking for a new UX look and feel for a project at work, I came across
Material Design ("MD").  I found some very good libraries that implemented MD for React. I also found
that they differed somewhat between each other and also suffered inconsistencies from one
release to another.

I therefore took the approach of wrapping Material Design Components (WEB) inside React components.
That's all my library is.  A loose wrapper of MD components.  But, what you get is a true implementation
of Material Components. 

## Supported Components
* AppBar 
* Buttons 
* Card 
* Checkbox 
* Dialog 
* Drawer Permanent and Temporary)
* Grid (Responsive layout)
* Lists
* Menus
* Progress
* RadioButton 
* Select 
* Simple Menu 
* Slider
* Snackbar
* Switch 
* Tabs 
* Textfield
* Theme 
* Toolbar
* Typography

# Installation and Usage

```
npm install material-design-for-react
```

To use any component in your code...


```
// Import button and Grid components
import { Button, Grid } from 'material-design-for-react';

. . . .

render() {

    return (
        <Grid>
            <div span='4'>
                <Button type='primary'>Hi, I'm a button!</Button>
            </div>
        </Grid>
    );
}
```
# Running this code

* Download the repo
* ``` npm install ```
* ``` npm run startdev ```
* Point your browser to http://localhost:8080

Note: I use a simple node server to serve the app... Not required for your app :-)

View DEMO <a href=https://reactmaterial.herokuapp.com/>HERE</a>

The DEMO page (which includes docs) was constructed using this library.