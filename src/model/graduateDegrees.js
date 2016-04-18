define(['model/degrees'], degrees => degrees.map(data => {
  return data.graduate.filter(item => (item.title !== undefined));
}));
