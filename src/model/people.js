(function(){
  const opts = { url: 'http://www.ist.rit.edu/api/people' };
  define(() => $.ajaxAsObservable(opts).map(payload => payload.data));
})();
