




var category = localStorage.getItem('category')
console.log(category)

// these see's what the user puts in and based off of that, runs the correlating function 
if (category === 'Box Office Hits') {
	boxOfficeHits();
} else if (category === 'Top 250 Movies') {
	top250Movies();
} else if (category === 'Top 250 TV Shows') {
	top250TvShows();
} else if (category === 'test bottom left') {
	bottomLeft();
} else if (category == 'test middle') {
	bottomMiddle();
} else if (category == 'test bottom right') {
	bottomRight();
}

// the parent element that will hold all the information 
var parentMovieContainerEl = $("#movie-container");



function boxOfficeHits (params) {

	// fetches API info
	// fetch("https://imdb-api.com/en/API/BoxOfficeAllTime/k_x8psmgh3")
	// .then(function (data) {
	// 	data.json().then(function (info) {
	// 	// variables thats values are the endpoints info that we need 
	// 		// variable for the picture
	// 	var movieImageAPI = info.items[0];
	// 		// variable for the name 

	// 		// variable for the title

	// 		// variable for the length

 
	// 		console.log(movieImageAPI);
	// 	})
	// })

	// a for loop that'll make the items to display the information and that the information will be plugged into 
	for (let i = 0; i < category; i++) {
		const apiElIteration = category[i];
		
		var movieCard = $("<div></div>").addClass("movie-item card");
		var movieImage = $("<img></img").addClass("card-img-top")
		.attr("alt", "...");
		var cardBody = $("<div></div").addClass("card-body");
		var movieName = $("<h5></h5").addClass("card-title")
		.text("Pizza Hut");
	
		cardBody.append(movieName);
		movieCard.append(movieImage);
		movieCard.append(cardBody);
		
		movieCard.appendTo(parentMovieContainerEl);
	}
}

function top250Movies (params) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		
		var movieCard = $("<div></div>").addClass("movie-item card");
		var movieImage = $("<img></img").addClass("card-img-top")
		.attr("alt", "...");
		var cardBody = $("<div></div").addClass("card-body");
		var movieName = $("<h5></h5").addClass("card-title")
		.text("Pizza Hut");
	
		cardBody.append(movieName);
		movieCard.append(movieImage);
		movieCard.append(cardBody);
		
		movieCard.appendTo(parentMovieContainerEl);
	}
}

function top250TvShows (params) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		
		var movieCard = $("<div></div>").addClass("movie-item card");
		var movieImage = $("<img></img").addClass("card-img-top")
		.attr("alt", "...");
		var cardBody = $("<div></div").addClass("card-body");
		var movieName = $("<h5></h5").addClass("card-title")
		.text("Pizza Hut");
	
		cardBody.append(movieName);
		movieCard.append(movieImage);
		movieCard.append(cardBody);
		
		movieCard.appendTo(parentMovieContainerEl);
	}
}

function bottomLeft (params) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		
		var movieCard = $("<div></div>").addClass("movie-item card");
		var movieImage = $("<img></img").addClass("card-img-top")
		.attr("alt", "...");
		var cardBody = $("<div></div").addClass("card-body");
		var movieName = $("<h5></h5").addClass("card-title")
		.text("Pizza Hut");
	
		cardBody.append(movieName);
		movieCard.append(movieImage);
		movieCard.append(cardBody);
		
		movieCard.appendTo(parentMovieContainerEl);
	}
}

function bottomMiddle (params) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		
		var movieCard = $("<div></div>").addClass("movie-item card");
		var movieImage = $("<img></img").addClass("card-img-top")
		.attr("alt", "...");
		var cardBody = $("<div></div").addClass("card-body");
		var movieName = $("<h5></h5").addClass("card-title")
		.text("Pizza Hut");

		cardBody.append(movieName);
		movieCard.append(movieImage);
		movieCard.append(cardBody);
		
		movieCard.appendTo(parentMovieContainerEl);
	}
}

function bottomRight (params) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		
		var movieCard = $("<div></div>").addClass("movie-item card");
		var movieImage = $("<img></img").addClass("card-img-top")
		.attr("alt", "...");
		var cardBody = $("<div></div").addClass("card-body");
		var movieName = $("<h5></h5").addClass("card-title")
		.text("Pizza Hut");
	
		cardBody.append(movieName);
		movieCard.append(movieImage);
		movieCard.append(cardBody);
		
		movieCard.appendTo(parentMovieContainerEl);
	}
}

boxOfficeHits();

localStorage.clear();