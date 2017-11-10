<style>
code {
    font-family: monospace;
} 
</style>

# EZReact Layouts

EZReact Layouts allow you to specify multiple column layouts that are response in nature. The underlying technology used is React Bootstrap which has a 'grid' of 12 columns.  EZReact simplifies the use of Bootstrap while allowing you to use as much React Bootstrap as you wish.

The main component of EZLayouts are:

* EZLayout wrapper
* EZRow which stats a new row
* EZCol which specifies the column weight(s).  Your column weights must add up to 12

## EZReact Column Weights

You can specify weights that are based on the device that is being used to render your application. For example, on a device with a 'desktop' type display size, you probably want a different layout than if your app is being rendered on a smarthone, or tablet etc.

The weights therefore are simply the number of columns that you want to span.  Keep in mind that the display is split into 12 columns.  

So, a weight of '3' takes up 3 of the 12 columns of the display (25%).  Let's look at some examples.

**The Layout example shows various configurations.**




```
import safajs djffrom 
<EZLayout cols=3>
<Col weight='1'>
... Content  A navBar? ...
</Col>

<Col weight='10'>
... Main content ...
</Col>

<Col weight='1'>
.. Right hand column.  Advertising?
</Col>

```