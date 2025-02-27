# Feb. 27th Notes

## Navigation Bar
horizontal
```html 
{
    display: inline
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: pink;


}

li{
    float: left;
}

li a: hover{
    
}
```

Example of nav bar design
```html
ul{
    position: fixed;
    top: 0;
    text-decoration: none
}
```
### Floating List items: creating a horizontal navigation bar to float the elements

float: helps elements to 'float' next to each other
display: block; allows specific padding & margin

## The Box Model
- falls under Info Architecture
- proportions and how a user interprets visually on their display
- affects all visual content (margin, border, padding)

-content box: area where content is displayed, properties include size an height
padding box: area that sits around the content
-border box: border properties

Span function: used to color part of text

```html
<p>
    I am <span class=:"block">another</span>student.</p>

```