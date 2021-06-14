function foo(aa, b, c) {
  console.log(this.a + aa + b + c);
  return this.a + +aa + b + c;
}

obj = {
  a: 2
}

var bar = function() {
  return foo.apply(this, arguments)
}

console.log(bar.call(obj, 3, 3, 4));
