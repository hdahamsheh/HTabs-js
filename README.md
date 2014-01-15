HTabs-js
========

JQuery plugin to render Tabs and navigation content by applying it to div.

### Demo

a demo hosted in [http://hdahamsheh.github.io/HTabs-js](http://hdahamsheh.github.io/HTabs-js) of two tabs; one is default and another applying custom options.

### HTML

at first we must add references to "htabs.js" and "htabs.css" as below.

```html
<script type="text/javascript" src="scripts/htabs.js"></script>

<link href='styles/HTabs.css' rel='stylesheet' type='text/css' />
```


HTML is as simple as having a container div contains an un-ordered list, and another div with the class 'tabs_container' contains content divs with the class 'htabs-cont' as below.

to set selected tab add class 'htabs-selec' to the anchor element.

```html

<div id='tabDiv' style="width: 400px">
    <ul>
        <li><a href="#exp1" class='htabs-selec'>tab1</a></li>
        <li><a href="#exp2">tab2</a></li>
        <li><a href="#exp3">tab3</a></li>
        <li><a href="#exp4">tab4</a></li>
    </ul>
    <div id="tabs_container" class='htabs-container'>
        <div id='exp1' class='htabs-cont'>
            content tab 1
        </div>
        <div id='exp2' class='htabs-cont'>
            content tab 2
        </div>
        <div id='exp3' class='htabs-cont'>
            content tab 3
        </div>
        <div id='exp4' class='htabs-cont'>
            content tab 4
        </div>
    </div>
</div>

```


###Javascript

the javascript is as below

```js
$('#tabDiv').HTabs();
```

the plugin is provided with options as below

```js
$('#tabDiv').HTabs({
    slideSpeed: 600,
    hoverClass: "hoverTest",
    tabClass: "defaultTest",
    selectedTabClass: "selectedTest",
    contentFixedHeight: true,
    contentHeight: '150px'
});
```

###CSS

the css is included in the plugin, and a default style is provided.
you can always change the style by passing three main css classes like the optiones provided in the js example above.

