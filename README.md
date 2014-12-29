# gfm.css

Styles for github flavored markdown.

## Usage

```
npm install gfm.css
```

*..do whatever you're into, then..*

```html
<link rel="stylesheet" href="gfm.css">
```

All styles are scoped to `.markdown-body`, as on github.

### Sass

You can also use this as a Sass library.

```scss
@import '../node_modules/gfm.css/source/gfm.scss'
```

Sass Bonus: the following variables can be overridden:

```
$mdb-font-size
$mdb-code-font-size
$mdb-font-family
$mdb-code-font-family
$mdb-input-font-family
$mdb-header-font-family
```

This way you can take gfm.scss as a base set of styles and go from there with your own style flavor, e.g. *normalize.css + gfm.css + your kewl fonts*.

Github's octicon anchors and syntax highlighting styles are not included in the default build, but they're available in `source/` if you need them.

## Development

### Install

Install dependencies with `npm install`.

### Develop

Edit `scss` source files in `source/`.

### Build

Build `gfm.css` from `source/` by running `npm run build`.

## License

[ISC](LICENSE)

The source is a cleaned and modified version of [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) which was scraped by @sindresorhus. Original credit for the style itself is of course due to github.
