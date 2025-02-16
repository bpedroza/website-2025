---
slug: tailwind-css-new-way-forward-or-blast-from-the-past
title: "Tailwind CSS"
subTitle: "A New Way Forward or a Blast From The Past?"
description: "My take on CSS libraries and frameworks, how they work in practice, and my personal preference."
datePublished: "2025-02-16T18:38:39Z"
---

### Preface
I decided to finally give Tailwind CSS a real chance after sitting on the sidelines for the past few years. I recently used it to style my new website as well as a few practice projects leading up to it. Like everyone else who criticizes tailwind, or any other CSS class utility library, my main complaints are tight coupling of styling with markup and messy markup. I'm going to go in depth about my feelings around these items, but I think it is relevant and interesting to discuss the way separation of concerns came to be in web development, and how this idea has changed over time. 


### A Brief History
Before there were javascript frameworks coming out every other week, animation libraries, and 3D models embedded in web pages; web developers had a limited toolset for creating maintainable, functional, and beautiful websites. It used to be that a webpage was literally a single html document, possibly thousands of lines long, with a style sheet, and maybe some javaScript if you wanted to do something fancy. Most of the layout was done with tables and frames. The web was a utilitarian place. It went on like this for a while, sure things got a little better and best practices started to emerge, but the web was mostly an ugly place.

Then something happened. Designers started to find a place building websites, they would make a PSD(PhotoShop Document) and a developer would make a 'pixel perfect' version of the design with careful use of margins, fixed widths and absolute positioning. Websites started to get more attractive, and it wasn't very difficult to do when almost everyone rocked the same 800x600 resolution on their CRT monitors. What a time to be alive! Those were simpler days.

### A Paradigm Shift
Almost overnight everything changed. Monitors were getting higher resolutions, mobile devices started becoming capable of viewing web pages. Everyone was scrambling to keep up. We did our best with percentage based fluid layouts, floats, and separate applications for mobile and desktop with user agent sniffers to send you to the right place. Then, some time around 2012, we got media queries and bootstrap 2. By the time bootstrap 3 was released a year later, it was everywhere. The idea of mobile first, responsive grid based layouts was exploding. Creating websites that worked on both mobile and desktop browsers was getting easier, and the developer experience improved massively. While structure and layouts of documents were starting to normalize, javaScript was also getting more powerful, jQuery was taking over the world, and code started getting sloppier than ever before.

Complexity was growing. Document sizes were increasing, there were inline styles everywhere, inline calls to javaScript functions, dynamic content rendering with `jQuery.load()`. Managing such things was nearly impossible without some sort of structure. So was born separation of concerns: Best practices to manage the ever increasing complexity of web documents was taking hold. Developers took notice and started training their teams to adhere to strict guidelines to keep projects maintainable and easy to reason about.

While reading to prepare to write this, I found an amazing time-capsule of a <a href="https://philipwalton.com/articles/decoupling-html-css-and-javascript/" target="_blank">blog post that expertly describes separation of concerns</a> in the year 2013. It's totally worth a side quest if you're interested.

I am writing this in 2025 though, and things have changed. Most modern front end is developed with some sort of component framework. The concerns have changed. The problem of finding and maintaining styles and javascript functionality in each component is orders of magnitude easier than it used to be in huge thousand line documents. For example, you might share a button component throughout your project, so you only have to change it in one place, and all the places using it should see whatever style or functional changes you applied.

### My First Experience With Tailwind, All the Good Stuff
I am not going to lie, it was incredible. The speed at which you can iterate on design changes is second to none. Tailwind provides some really great colors, it makes controlling styling on different screen sizes a breeze, and it all but removes any slow down from context shifting. Sure, I added a few rules in my CSS file, but it was a completely new and foreign experience. You can really just stay in the markup and never touch the CSS in the initial build phase.

Another great(or terrible) thing about Tailwind is that all of the classes are closely related to their CSS rule. This means the learning curve is really shallow if you are experienced with CSS. It also means new developers get to learn CSS, at least from a distance, while they learn Tailwind. It give the additional benefit of being able to recognize the basic styling of a component in the code without going to look for its styling rules somewhere else.

### What Makes Tailwind Different
Where Bootstrap is a framework, Tailwind is a library. 

Bootstrap, and other CSS component libraries, necessarily inform the structure of your document. If you want a card, you need divs nested in a particular fashion with particular class names. There are pre-defined layouts and components to work with. You add your own theme with CSS files that target colors, spacing, and break-points. This means less decisions and more baked-in functionality. It also means you're locked into an opinionated document structure when you opt-in to these components.

Tailwind has a different philosophy. It does't care about your document's shape, it doesn't provide any baked-in components. It's freedom... with helpers. A million little helpers. There is a class to match just about every CSS rule you can think of, and mostly named in an intuitive fashion. You also get a whole bunch of color palettes, sizing and spacing options, and gradients built right in. I think the most powerful and unique part of Tailwind is the breakpoint specific functionality. It really is better than anything I have ever used. Sure bootstrap has some of this, but with Tailwind, you can apply break point specific rules to EVERY class. I don't think the utility of this feature can be overstated.

### Issues
While both Bootstrap and Tailwind have some form of tight coupling to you documents, I would argue one can be more of a problem. As with any technology, abusing the tools available to you can create a mess, and you have no one to blame but yourself. Bootstrap doesn't really give you the same kind of power to make a mess though. If you want to adjust something about a built in component and you use an inline style, it's immediately obvious you're doing something a bit hacky. And maybe you don't mind, but it's obvious. With Tailwind the tools to abuse are baked right in.

Consider the following Tailwinds classes - `bg-blue-400`, `py-[17px]`, `text-[#F2F2F2]`

Now consider you've littered colors and pixel sizes(or any unit you like) throughout your code base. The site has been up for 3 years now. It's starting to feel a bit stale. You get a new design and the base color changed from blue to pink. Big margins are in this year, give those elements some room to breathe! It should be no big deal right? Rewrite the landing page, change some base colors in the CSS, update the spacing configuration, send it! Oh man... why are all these buttons still blue? What's going on with the padding here. Uh oh. Now what do you do? Hop in the CSS file and do 
```css
.bg-blue-400{ background: pink !important;}
.py-\[17px\]{ padding-top: 2rem !important; padding-bottom: 2rem !important;}
.text-\[\#F2F2F2\]{ color: #000 !important; }
```
No, you wouldn't do that... right? ...RIGHT?

So we've met my first criticism. This is exactly the type of tight coupling that separation of concerns meant to destroy in the early 2010's. Now it's back with a vengeance. Tailwind CSS is everywhere and this class based inline style behavior gives me flashbacks, not good ones. Still, as I alluded to earlier, this is less of a problem now. In modern web development, you probably don't have the same blue button copy/pasted hundreds of times. It's probably a single component you change in one place. This doesn't alleviate the underlying problem though. Tight coupling.

When Bootstrap 4 was released, there was a fundamental change to the layout system. Floats were removed in favor of flexbox. The entire layout system used something different under the hood, but application layouts in legacy projects on Bootstrap 3 basically just worked in Bootstrap 4. This is because they used class names that were completely decoupled from their CSS rules. The nature of Tailwind is in opposition to this kind of flexibility. Your classes are necessarily coupled to their rules, or the class names cease to have meaning.

Alright, one final gripe before I wrap this all up. I'll keep it short and sweet. Just look at this(scroll):
```html
​<span class="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10 dark:bg-slate-800 dark:text-slate-400 dark:shadow-none dark:ring-0 dark:hover:bg-slate-700 dark:hover:text-slate-200">
</span>
```

I just pulled this randomly from the Tailwind CSS page source. Having this type of lengthy class names makes parsing a document much more difficult. When you start having this repeated over and over it becomes nearly impossible to traverse a document's structure visually, and makes finding other node attributes very frustrating.

### Do These Issues Really Matter
Ok, I've named the main gripes I have with Tailwind above, but are they even relevant in today's front end development ecosystem? I say emphatically yes. If I have to maintain a large project I know will see design changes in the future, I don't want to see these tightly coupled class names(at least with colors and spacing). The good thing here is, you don't have to do this. Just as discipline was required in the early days(following a sane rule set for separation of concerns), discipline is required now. The solution is to just don't do it. Tailwind provides configuration out of the box that allows you to use any name you like for specific colors, and any value you want for pre-defined spacing values. This is a place I think Bootstrap got it right from the start. Using class names like primary, warning, info, etc. make changing your entire site's color scheme so much easier. You can just implement some version of that in Tailwind. Any way you like. I used Daisy UI and highly recommend it.

Ok, but what about those insane class lists in the markup. I think this is the biggest drawback for me. Sure, you could use an editor extension to hide these hideous class name lists, but you lose a really valuable piece of Tailwind; The ability to visualize an element at a glance by seeing the style declarations. It's kind of the whole point. So what is the answer? I think a reasonable solution here is to just write your own CSS rules(roll your own or use @apply) in place of complex, reused class lists. If you have to use these giant lists here and there, I could live with it, I think this particular gripe will be at your discretion and per personal preference. My limit will be once an element starts wrapping in the editor simply because the class names list is too long.

### Conclusion
I'm no Tailwind expert, and I'm sure these things have been hashed to death before I got here, but this tool is popular for a reason. It feels like the trade-offs are worth it in some cases. If you're writing a one-off landing page, or custom homepage, I say install Tailwind and go crazy. Completely ignore the gripes and be as productive as possible. You're probably going to throw the whole thing away when it's time for a redesign anyways.

If you like the Tailwind philosophy and you want to use it on a huge application, I would caution you to be more thoughtful, and move slower until you have a solid plan for maintaining themes. Discipline will be required during PRs to not allow hacky class names to start infecting your code base (no square brackets might be a good place to start). Once you've created boundaries that make sense for maintainability and get your custom configuration dialed in, you can really ramp up and take advantage of the increased velocity made available by using Tailwind.