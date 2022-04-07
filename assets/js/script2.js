



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
		'X-RapidAPI-Key': '0360dc3017mshda93392b7cf7a9cp1789a3jsn2dc47382c53e'
	}
};

fetch('https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



	function userInputRetrieval(params) {

		// retrieves users input, then sends it to the correlating api function

	}


	function boxOfficeHits (params) {
		// displays api info
	}

	function top250Movies (params) {
		// displays api info
	}

	function top250TvShows (params) {
		// displays api info
	}

	function bottomLeft (params) {
		// displays api info
	}

	function bottomMiddle (params) {
		// displays api info
	}

	function bottomRight (params) {
		// displays api info
	}