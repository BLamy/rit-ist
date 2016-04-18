define(['model/degrees'], function(degrees){
  return degrees.map(function(data) {
    return data.graduate.filter(function(item){
      return (item.title !== undefined);
    });
  });
});
