var apikey = '982d68f6ee26701aae745f1b3e1a81dd18b33bce'; // Put your API key here

// Use this function to do stuff with your results. 
// It is called after 'search' is executed.
function searchCallback(results) {
    console.log(results);
}

$(document).ready(function(){
	//$("#theForm").submit(function(event){
	//	event.preventDefault();
	//	var $inputs =$("#theForm :input").val();

	//	var videoGame = search($inputs);
	//	search(videoGame);
	search('batman');
	//});

	
});

// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){

	$.ajax ({
	    type: 'GET',
	    dataType: 'jsonp',
	    crossDomain: true,
	    jsonp: 'json_callback',
	    url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
	    complete: function() {
	        console.log('ajax complete');
	    },
	    success: function(data) {
	        searchCallback(data.results);
	    }
	});

}
