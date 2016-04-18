define(function(){
  return $.ajaxAsObservable({
    url: 'http://www.ist.rit.edu/api/people'
  }).map(function(payload) {
    return payload.data;
  });
});
