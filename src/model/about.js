define(function(){
  return $.ajaxAsObservable({
    url: 'http://www.ist.rit.edu/api/about'
  }).map(function(payload) {
    return payload.data;
  });
});
