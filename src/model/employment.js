define(function(){
  return $.ajaxAsObservable({
    url: 'http://www.ist.rit.edu/api/employment'
  }).map(function(payload) {
    return payload.data;
  });
});
