# CSS Units vh, vw, vmin, vmax notes


### CSS Viewpoint Units

### VH vs VW
- viewport height and viewport width
- matching the view you can see
	- 100 vh is equal to filling out the whole screen
	- problem will be on mobile screen causes some elements may oveflow
- **Percentages are base on the parent, but VH and VW are based on the screen size**
	- Note to self: the difference between vw (or vh) and percentages is that vw and vh are relative to the viewport whereas percentages are relative to the parent element.

### Vmax and Vmin
- vmax looks at viewport maximum; which is bigger
- harder to use 
- Vmax on height
	- if 

## Use cases of:
- VH and VW: very responsive for fonts but would still use media queries. 
	- If used, mostly used on headings only
	- Kevin dont really suggest it though
	- If you'll be using this, checkout every possible situation (different sizes)
	- **Kevin use VH for heights occasionally though**



Ref: [CSS Units: vh, vw, vmin, vmax #css #responsive #design - YouTube](https://www.youtube.com/watch?v=IWFqGsXxJ1E&t=10s&ab_channel=KevinPowell)
