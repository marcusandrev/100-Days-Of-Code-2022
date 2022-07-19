# 100 Days Of Code - Log

<br/>
<br/>
### Day []: Date, Week
**Today's Progress**: <br/>
- *Self Learning:* 
- *Project:* 

**Thoughts** <br/>
- *Self Learning:* 
- *Project:* 

**Some Notes**

**Links**


<br/>
<br/>
### Day 19: July 19, Tuesday
**Today's Progress**: <br/>
- *Self Learning: * Learned about MVC architecture which was so cool cause now you're able to understand the kada structure. Additionally, finally understand the "Don't set a fixed width but have a max-width" saying! 

**Thoughts** <br/>
- *Self Learning:* Cool Stuff and Really Learned a lot. Damn the MVC was an unexpected learning but really learned a lot!!


<br/>
<br/>
### Day 2: July 18, Monday
**Today's Progress**: <br/>
- *Self Learning:* Learned a lot about the backend (API, HTTP Request, JSON, Rest API). Additionally, learned on why it's better to use REM and EM over pixels.
- *Project:* None

**Thoughts** <br/>
- *Self Learning:* Finally understand the Swagger documentations! Also, some clarification of why use EM and REM
- *Project:* None

**Some Notes**
- Check Backend folder of Obsidian since it's quite lengthy
- **Em**
	- Font size is related to parent
	- 1 em defaults to 16px
		- 2 em = 30 px
			- 2 em = 64px (since parents is 2em/30px)
	- em coumpounds to each other (parent -> child ->grandchild) so be careful kaya ginawa ang **rem** for this reason
- **Rem**
	- looks at the parents and is more consistent
		- using em in margin looks at the font-size 
```
font-size: 4em
margin-bottom: 1em
```
- margin bottom equals to 5 em kaya rem is consistent cause it looks only to its parents


<br/>
<br/>
### Day 1: July 17, Sunday

**Today's Progress**: <br/>
- *Self Learning:* Day 1/21 Challenge of Conquering Responsive Layouts by Kevin Powell 
- *Project:* Created themes and installed styled components for Foodify project

**Thoughts** <br/>
- *Self Learning:* Learned that CSS is Responsive by default. You did something to make it not responsive.
- *Project:* Storybook is kinda iffy at first when you did it but realized you haven't installed styled components yet

**Some Notes**
1. For responsive layouts, use percentages. Using Pixels make it use several media queries
	- By default, CSS are responsive (width of 100%)

2. **Don't use heights;** only widths
	- When screen is small, the text will be overflowed
