var { Hotkey } = require("sdk/hotkeys");
var { viewFor } = require("sdk/view/core");
var windows = require("sdk/windows").browserWindows;
var prefs = require("sdk/simple-prefs").prefs;

function toggle() {
  var domwindow = viewFor(windows.activeWindow);
  var navbar = domwindow.document.getElementById('nav-bar');
  var height = navbar.style.getPropertyValue('height');
  if (height && height == '0px') {
    navbar.style.removeProperty('height');
    navbar.style.removeProperty('overflow');
  } else {
    navbar.style.setProperty('overflow','hidden');
    navbar.style.setProperty('height', '0px');
  }
}

function create() {
  return Hotkey({
    combo: prefs.hotkey,
    onPress: toggle
  });
}

require("sdk/simple-prefs").on("hotkey", function(){
  toggleHotKey.destroy();
  toggleHotKey = create();
})

var toggleHotKey = create();

