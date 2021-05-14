function write() {
  return this.name.toUpperCase();
}

function presentation() {
  var text = `i am ${write.call(this)}`;
  console.log(text);
}
var me = {
  name: 'saeed rezaei'
}

var you = {
  name: 'mohammad nasiri'
}

console.log(write.call(me));
console.log(write.call(you));

presentation.call(me);
presentation.call(you);