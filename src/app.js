// DEBUG: Allows cors access to the api without uploading to gibson
// https://www.npmjs.com/package/cors-anywhere
jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
    options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});

require([
      'util/EventLogger',
      'controllers/toolbar',
      'controllers/about',
      'controllers/graduate',
      'controllers/undergraduate',
      'controllers/minors',
      'controllers/employment',
      'controllers/people',
      'controllers/research',
      'controllers/resources'
      // 'controllers/news',
      // 'controllers/courses'
    ],
    function(logger,
      ToolbarController,
      AboutController,
      GraduateController,
      UndergraduateController,
      MinorsController,
      EmploymentController) {
      logger.log("App Ready")
    })
