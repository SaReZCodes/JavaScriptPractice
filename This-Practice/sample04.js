//default binding in strinct mode
function foo() {
	"use strict";

	console.log( this.a );
}

var a = 2;

foo(); // TypeError: `this` is `undefined`


function foo2() {
	console.log( this.a2 );
}

var a2 = 2;

(function(){
	"use strict";

	foo2(); // 2
})();