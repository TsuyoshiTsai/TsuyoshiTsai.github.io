---
title: CSS Specificity Summary
date: 2017-04-09 23:40:54
tags:
    - CSS
    - Specificity
categories:
    - CSS
---
CSS 權重的概要與使用時需特別注意的地方。

<!-- more -->

1. `!important` ( never use ) > inline styles > IDs > classes, attributes and pseudo-classes > elements and pseudo-elements
2. `a#id` > `a[id="id"]` ( ID > attribute )
3. the rule that has a more specific selector with `!important` wins.
4. universal selector ( * ) > inherited values ( both specificity are 0, 0, 0, 0, but custom style > user agent style. )
5. `*, +, >, ~, ' ', :not()` have no effect on specificity. ( The selectors declared inside :not() do, however. )
6. contextual selectors > single selector ( [example](https://jsfiddle.net/fe8myvx3/) )
7. embedded stlye > external style
8. last rule > previous rule ( only overrides same properties )
9. LVHA: link-visited-hover-active

---

# Reference
1. [CSS Specificity: Things You Should Know] [Ref 01]
2. [Specifics on CSS Specificity] [Ref 02]
3. [meyerweb.com - Specificity] [Ref 03]
4. [Calculating a selector's specificity] [Ref 04]
5. [Relationship between !important and CSS specificity] [Ref 05]
[Ref 01]: https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/ "CSS Specificity: Things You Should Know"
[Ref 02]: https://css-tricks.com/specifics-on-css-specificity/ "Specifics on CSS Specificity"
[Ref 03]: http://meyerweb.com/eric/css/link-specificity.html "meyerweb.com - Specificity"
[Ref 04]: https://www.w3.org/TR/CSS22/cascade.html#specificity "Calculating a selector's specificity"
[Ref 05]: http://stackoverflow.com/questions/5805040/relationship-between-important-and-css-specificity "Relationship between !important and CSS specificity"

## Image
1. [cssspecificity.com] [imgRef 01]
2. [specificity wars] [imgRef 02]
[imgRef 01]: http://cssspecificity.com/ "cssspecificity.com"
[imgRef 02]: https://stuffandnonsense.co.uk/archives/images/specificitywars-05v2.jpg "specificity wars"

---

# Tool
1. [Specificity Calculator] [toolRef 01]
[toolRef 01]: http://specificity.keegan.st/ "Specificity Calculator"