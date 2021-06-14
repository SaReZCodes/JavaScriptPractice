//Itself
function write(num) {
   console.log(num);
   this.count++;
}
write.count=0;
for(i =0 ;i<10;i++){
   if(i>5)
      write(i);
}


console.log(write.count);// 0 

function write(num) {
	console.log(  num );
	data.count++;
}

var data = {
	count: 0
};

for (i=0; i<10; i++) {
	if (i > 5) {
		write( i );
	}
}
console.log( data.count ); // 4

