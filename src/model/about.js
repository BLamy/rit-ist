(function(){
  const opts = { url: 'http://www.ist.rit.edu/api/about' };
  define(() => $.ajaxAsObservable(opts).map(payload => payload.data));
})();
