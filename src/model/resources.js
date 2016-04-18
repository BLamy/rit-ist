define(function(){
  return $.ajaxAsObservable({
    url: 'http://www.ist.rit.edu/api/resources'
  }).map(function(payload) {
    return payload.data;
  });
});
