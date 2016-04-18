(function(){
  const opts = { url: 'http://www.ist.rit.edu/api/resources' };
  define(() => $.ajaxAsObservable(opts).map(payload => payload.data));
})();
