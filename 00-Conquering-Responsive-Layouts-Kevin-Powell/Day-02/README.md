More on video learning
- Learned when to use em or rem, and why use it over pixels
- [Day 2](https://courses.kevinpowell.co/view/courses/conquering-responsive-layouts/349964-day-2-getting-familiar-with-relative-units)link

<br/>

# Some Notes

### Em
- Font size is related to parent
- 1 em defaults to 16px
	- 2 em = 30 px
		- 2 em = 64px (since parents is 2em/30px)
- em coumpounds to each other (parent -> child ->grandchild) so be careful kaya ginawa ang **rem** for this reason

### Rem
- looks at the parents and is more consistent
	- using em in margin looks at the font-size 
```
font-size: 4em
margin-bottom: 1em
```
margin bottom equals to 5 em kaya rem is consistent cause it looks only to its parents