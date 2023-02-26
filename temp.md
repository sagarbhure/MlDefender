---
title: 'Project Name'
date: YYYY-MM-DD
excerpt: 'Short excerpt describing your project.'
author: ['Principal Investigator Name']
coverImage: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
tags: ['Hackfest', 'region', 'list', 'technologies', 'here']
team: ['FirstName LastName', '', '']
sponsor: []
mentor: ['FirstName LastName']
---
## Project Description

description here

## Key Hypothesis

key hypothesis here

## How It Works

how it works here

## Business Value

business value here

## Technologies Used

technologies used here

## Presentations

#### VIDEO EXAMPLE:

Update the src link with the embedded link of your video.

<iframe width="560" height="315" src="https://web.microsoftstream.com/embed/video/471816ec-fc92-4488-aab7-6654b4714b2f?autoplay=false&showinfo=true" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### POWERPOINT EXAMPLE:

Update the src link with the embedded link provided by powerpoint under the share option.

<iframe src="https://f5.sharepoint.com/sites/InnovateF5/_layouts/15/Doc.aspx?sourcedoc={789714ca-7a34-4b77-b781-4a66dad0f7c3}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="476px" height="288px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>

## Interested? Come join us!

Reach out to the principal researchers if you are interested in supporting this project.

| Role   | Skills                                                               |
| ------ | ------------------------------------------------------------------------- |
| example role  | example skills |

Note: you are free to add other sections as you'd like.

BELOW ARE EXAMPLES OF HOW TO DISPLAY TEXT ON THE MARKDOWN PAGE

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

---

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,, -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Code

Inline `code`

Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js:fileName.js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ 'title text!')

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O

==Marked text==

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
_here be dragons_
:::

Fluctuations requires an enormous amount of energy, and there would be a remnant of that energy in that space afterwards if the fluctuations were flushed out, plus an unstable environment (1veritasium). Even on computers, deleted data is not actually tossed away, by rather written over. The fact that there can never be nothingness means the universe, and anything possibly beyond it, is eternal, as something has always been around. Whatever we consider to be before the Big Bang—God.

The fact that there can never be nothingness means the universe, and anything possibly beyond it, is eternal, as something has always been around. Whatever we consider to be before the Big Bang—God, the universe in infinitesimal form, or both—one thing is certain: it was there.

## Custom Components

import Demo from '../../components/Demo';

Here's a **neat** demo, click me:

<Demo />

Here's an avatar component:

<Avatar />

<br />
<Callout emoji="🚀">Callout component to draw attention!</Callout>

<br />
<ListCard
  title="Why this list is great..."
  list={['Because its React', 'it looks great', 'and can be any color']}
/>

<ListCard
  title="All the color options for this list..."
  list={[
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose'
  ]}
  color="cyan"
/>

---

## Images

Markdown syntax example

![](images/InnovateF5/texture.jpg)

HTML img tag component example

<img
  src={`https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500`}
/>

Image component example

<Image
  alt={`Example`}
  src={`images/InnovateF5/texture.jpg`}
  width={608}
  height={608}
/>

Theme controlled image example

<ImageWithTheme
  alt={`Theme image example`}
  light={`https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987`}
  dark={`https://images.unsplash.com/photo-1653038337841-3945ada02f59?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927`}
  width={608}
  height={608}
/>
