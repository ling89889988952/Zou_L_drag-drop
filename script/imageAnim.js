(() => {
	console.log('fired');

	const theButton = document.querySelector('#buttonHolder img')


	function changeHeadline(){
		document.querySelector("h1").textContent = 'Hello there from JS!';
		// note - using this way to change the h1 when load
		document.querySelector('p').textContent = 'This is subhead';
		// note - using this way to change the subhead when load
		
	}
	// set up the puzzle pieces and boards
	//
	
	//window.addEventListener('load', changeHeadline);
	// note - through loading the windown change the ha and subhead(means give the 'load' action a function)

	theButton.addEventListener('click', changeHeadline);
	// note - through click the first img to change the h1 and subhead (means give the first buttonHolder img a function)
})();

