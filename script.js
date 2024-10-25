function firstWord(s) { 
	
  // your code here
	let trimmedString = s.trim();
    let spaceIndex = trimmedString.indexOf(" "); 

	if (spaceIndex === -1) return trimmedString; 

	return trimmedString.substring(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
