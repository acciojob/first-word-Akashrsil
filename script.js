function firstWord(s) {
  // your code here
	let temp=s.trim();
	let ans=temp.split(" ")[0];
	return ans;

	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
