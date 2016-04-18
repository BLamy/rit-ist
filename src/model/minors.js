define(function(){
  return $.ajaxAsObservable({
    url: 'http://www.ist.rit.edu/api/minors'
  }).map(function(payload) {
    return payload.data;
  });
});
