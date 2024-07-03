function firstWord(s) {
  // your code here
	let str=s.split(" ");
	 let temp=str[0];
	let i=0;
	while(temp[i]==" ")
		{
			i++;
}
	let ans= temp.substring(i,temp.length);
	return ans;
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
