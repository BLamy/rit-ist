(function(){
  const opts = { url: 'http://www.ist.rit.edu/api/news' };
  define(() => $.ajaxAsObservable(opts).map(payload => payload.data));
})();
