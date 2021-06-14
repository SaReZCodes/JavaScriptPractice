//Implicitly Lost

function foo() {
  console.log(this.a);
}

obj = {
  a: 10,
  foo: foo
}

var bar = obj.foo;
a = 'global';
bar(); //-->"global"


function foo1() {
	console.log( this.a );
}

function doFoo(fn) {
	// `fn` is just another reference to `foo`

	fn(); // <-- call-site!
}

var obj = {
	a: 2,
	foo: foo1
};

var a = "oops, global"; // `a` also property on global object

doFoo( obj.foo ); // "oops, global"