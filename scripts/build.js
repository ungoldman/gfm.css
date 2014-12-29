var fs = require('fs');
var sass = require('node-sass');
var CleanCSS = require('clean-css');
var pkg = require('../package.json');
var md = require('markdown-it')('full', {
  html: true,
  linkify: true,
  typographer: true
});

sass.render({
  file: './source/gfm.scss',
  success: buildStyle
});

buildSite();

function buildSite () {
  var header = renderMd('./site/header.md');
  var readme = renderMd('./README.md');
  var guide = renderMd('./site/guide.md');
  var footer = renderMd('./site/footer.md');
  fs.writeFile('index.html', header + readme + guide + footer, function (err) {
    if (err) { throw err; }
    console.log('built index.html');
  });
}

function renderMd (filepath) {
  return md.render(fs.readFileSync(filepath, { encoding: 'utf8' }));
}

function buildStyle (result) {
  var minified = new CleanCSS().minify(result.css).styles;
  var banner = '/* ' + pkg.name + ' v' + pkg.version  + ' - ' +
                getDate() + ' - ' + pkg.homepage + ' */\n';
  fs.writeFile('gfm.css', banner + minified, function (err) {
    if (err) { throw err; }
    console.log('built gfm.css');
  });
}

function getDate () {
  var d = new Date();
  var dd = d.getDate();
  var mm = d.getMonth()+1;
  var yyyy = d.getFullYear();

  if (dd<10) { dd='0'+dd; }
  if (mm<10) { mm='0'+mm; }

  return mm+'/'+dd+'/'+(''+yyyy).substr(2);
}
