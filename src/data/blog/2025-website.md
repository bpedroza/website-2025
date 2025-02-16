---
slug: 2025-website-journey-react-to-astro
title: "Creating My New Website"
subTitle: "A Journey to The Right Tool"
description: "I decided to build a new website for 2025. This post describes the journey from wild imagination to a practical end point, which tools I tried along the way, and what worked best."
datePublished: "2025-01-12T18:38:39Z"
---

### Time for a change
With 2025 approaching fast, a couple things became obvious to me:

1. I'm getting old. I'm actually going to be 40 years old this year. Woah!
2. I haven't updated my website in 10 years. Literally.

Not much I can do about number 1. Time seems to only move in one direction. 

Let's focus on what I can change. With a little over a week for holiday vacation, I was reasonably certain I could get a new website up and running.
With that in mind I started looking for inspiration from other developer's portfolios, watching a few youtube videos
on some really slick techniques for new technology, and generally started getting myself amped to create something new
to represent myself online. I was excited for something new and ready to get to it.

### Illusions of Grandeur

It's easy to see clearly in retrospect, and I can be honest with myself now. I set the bar pretty high for such a
limited timeline. I started learning about 3D models, spent about 10 hours building a few tutorial sites with react-three
and framer-motion with all kinds of fun animations and 3D model interactivity. I built a 3D model of myself on ready player
me, got some animations from mixamo that always seemed to make my avatar's shoulders shrug. I was really making some progress
towards what I had imagined. Then it hit me. I'm not much of a designer and while the idea was cool, it just wasn't coming together. 

I was struggling to make a cohesive design that didn't feel like a playground. While I did have a lot of fun learning about
the 3D modeling and all of the really amazing open source software available, I was on a time crunch. There was an end game here,
and it wasn't to play around and have fun. I needed an updated, professional online presence. Time to switch gears.

### Settling on Something Practical

With a new and clearly focused goal, I switched gears. I had learned a couple of neat techniques and had some react components I could reuse. My time spent playing around wasn't a total loss. While some of the things I learned were just for fun, I also picked up on some ideas to take with me. I was still using react, and with a few tweaks they could be easily integrated into the new design.

As I said before, I'm not much of a designer. Along the way I came across a few really nice UI frameworks. From the start I decided I needed to give tailwind a real shot with this project, and I wasn't going to move away from that. Here's where daisyUI comes along to make my life much easier. I started going through all of the themes, picked the dark theme I liked best and ran with it. Maybe next year I'll really dive into design theory, it's never too late to learn, right? For now, this was great and things were moving in the right direction.

I made a few custom components, put together a slick animation idea I got from some of the inspirational sites I had been looking at and nailed down a simple algorithm to smoothly update the transition on scroll. This was actually starting to feel like I might get it done within the constraints of a holiday vacation. I shared the final version with my wife and a few friends and I felt like I was ready to deploy.

### Pivoting to The Correct Technology for My Use Case

Feeling pretty happy with myself, the design, and functionality; it was time to start focusing on the most practical aspects. Page load speed, SEO, accessibility. The boring, but arguably, most important parts of any website. Especially one you want to use as a showcase for your work and online presence.

Up to this point I had been using react. React is surprisingly performant, and does great with lighthouse scoring. Did I really need react though? Originally I had a lot of interactivity and state going on for my 3D models and animations. That was all but gone now. Additionally, I wanted the content to be available statically. I haven't really been in the SEO world for the better part of a decade, but that used to be a big deal. So what else is there? I like the idea of having independent chunks of code separated into components. I like that vite pretty much takes care of everything for the deployed bundles and removes code I'm not using. How can I serve static pages and keep this functionality?

Along comes Astro. I had seen it mentioned a few times while I was doing research and learning about all the new tech people are using. What exactly is it though? Time to have a look. The more I read the docs, the more I though "This is perfect!". Seriously, this was exactly the thing I was looking for. Static site generation, components, great build tooling with vite. It even has functionality to serve up markdown files you can define as a collection for a listing page (this blog). I'm sold.

## The Results
Although the actual performance numbers aren't that different, I took the full download size of all resources required to render my site from ~220kb to about ~120kb. Not insignificant in perspective. I'm happy with the end result, and the functionality to create a blog with very minimal work was the cherry on top. Setting up this blog template and the listing page took all of 15 minutes, including reading the docs. I know it's nothing fancy, but I don't need a CMS, or a database. It just works. This also makes the deployment a whole lot simpler. Speaking of deployments, I used GH Pages and astro makes this incredibly simple as well.

At the end of this project I have come away very impressed with the new technologies I hadn't even heard of before I decided to start. I learned a great deal about what is possible with modern web development, even after doing it professionally for over a decade. I'm still not sure how I feel about tailwind, but daisyUI took away a bit of the ick I get from what is essentially inline styles littering my markup. Maybe I'll write about my feeling there next.

If you've made it this far, I genuinely appreciate it. Follow me, or just say hello on any of my socials. I would love to hear from you!