define(function(){
  return $.ajaxAsObservable({
    url: 'http://www.ist.rit.edu/api/research'
  }).map(function(payload) {
    return payload.data;
  });
});
