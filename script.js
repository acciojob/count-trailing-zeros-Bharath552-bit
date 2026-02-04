function trailingZeros(n) {
  //your JS code here. If required.
	let fact=1
	let count=0
	let str=n+''
	for(let i=1;i<=n;i++){
		fact*=i
	}
	for(let i=0;i<str.length;i++){
		if(str[i]==="0"){
			count++
		}
	}
	return count
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
