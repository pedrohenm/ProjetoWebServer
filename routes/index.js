var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');
var projectsService = require('../services/projectsService');
var executivesService = require('../services/executivesService');

/* GET home page. */
router.get('/', function(req, res, next) {
  var posts = postsService.getPosts();
  var projects = projectsService.getProjects();
  var executives = executivesService.getExecutives();

  res.render('index', { title: 'Blog', posts: posts, projects:projects });
});

router.get('/posts/:postId', function(req, res, next) {
  var postId = req.params.postId;

  var posts = postsService.getPosts();

  var post = posts.filter((post) => post.id == postId)[0];

  res.render('post_detail', { title: post.title, post: post });

});

router.get('/posts', function(req, res, next){

  var posts = postsService.getPosts();

  res.render('post', { title: 'Blog', posts: posts });

});

router.get('/projects', function(req, res, next){

  var projects = projectsService.getProjects();

  res.render('project', { title: 'Projects', projects: projects });

});

router.get('/executives', function(req, res, next){

  var executives = executivesService.getExecutives();

  res.render('executive', { title: 'Executives', executives: executives });

});



router.get('/projects/:projectId', function(req, res, next) {
  var projectId = req.params.projectId;

  var projects = projectsService.getProjects();

  var project = projects.filter((project) => project.id == projectId)[0];

  res.render('project_detail', { title: project.title, project: project });

});

module.exports = router;
