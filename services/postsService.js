var fs = require('fs');

var postFilePath = 'db/posts.json'



var getPosts = function() {
  var fieData = fs.readFileSync(postFilePath, 'utf8');
  var posts = JSON.parse(fileData);

  return posts;
}

module.exports = {
  getPosts: getPosts
}