// Generated by CoffeeScript 1.9.1
(function() {
  var fs, removeImages;

  fs = require('fs-extra');

  removeImages = function() {
    console.log("Remove images");
    return fs.removeSync('images');
  };

  removeImages();

}).call(this);
