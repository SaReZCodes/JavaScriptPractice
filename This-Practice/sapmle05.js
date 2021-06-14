//Implicit Binding

function foo() {
  console.log(this.a)
}

obj = {
  a: 1,
  foo: foo //
}

obj.foo();

//-----top/last level 
function fooT() {
  console.log(this.a)
}

obj1 = {
  a: 1,
  foo: fooT
}

obj2 = {
  a: 200,
  obj1: obj1
}

obj1.foo();
obj2.obj1.foo();
