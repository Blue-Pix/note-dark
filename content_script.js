const cssFile = chrome.extension.getURL('note-dark.css');
const css = '<link rel="stylesheet" type="text/css" href="' + cssFile + '">'
$('head').append(css);

window.addEventListener('load', replaceLogo, false);

const logoFile = chrome.extension.getURL('images/logo_White.png')
function replaceLogo(e) {
  var img = $('#note-logo')
  if(img.length > 0) {
    img[0].src = logoFile;
  }
  $('h2.logo').css('background-image', 'url(' + logoFile + ')');
}

