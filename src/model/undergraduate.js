define(['model/degrees'], function(degrees){
  return degrees.map(function(data) {
    return data.undergraduate;
  });
});
