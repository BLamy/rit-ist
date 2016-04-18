define(function(){
  return $.ajaxAsObservable({
    url: 'http://www.ist.rit.edu/api/degrees'
  }).map(function(payload) {
    return payload.data;
  });
});
