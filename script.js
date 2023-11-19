//your JS code here. If required.

function mapLetters(str){
	str=str.toLowerCase();
	let lettermap={};
	
	for(let i=0; i<str.length; i++){
		let letter=str[i];
		if(!lettermap[letter]){
			lettermap[letter]=[];
		}
			lettermap[letter].push(i);
		
	}
	
	return lettermap;
}


let value=prompt("enter a value");
alert(JSON.stringify(mapLetters(value)));