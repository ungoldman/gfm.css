var fs = require('fs');
var sass = require('node-sass');
var CleanCSS = require('clean-css');
var pkg = require('./package.json');

sass.render({
  file: './source/gfm.scss',
  success: buildStyle
});

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
