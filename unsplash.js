const apiKey = 'f83086e9fd82d63cb1d8f83672ba1d2375aa88b69280b31a80ec43a6a0f373f3';
const collection_id = '858902'
fetch('https://api.unsplash.com/collections/'+ collection_id + '/photos/?client_id='+ apiKey+'&per_page=50')
  .then((res) => res.json()) // Transform the data into json
  .then(function(data) {
  	console.log(data);
  	//console.log(data.length);

  	// write image grid HTML into DOM
  	for (var i=0; i<data.length; i++) {
  		document.getElementsByClassName('row')[0].innerHTML +=
       `<div class="col-lg-4 col-sm-6"><div class="thumbnail"><a  target="_blank" href=` + data[i].links.html + `><img src= `+data[i].urls.small + `></a>`;  	
  	}
    })
  		


// (async ()=> {
// 	const response = await fetch('https://api.unsplash.com/photos/?client_id='+ apiKey);
// 	const myJson = await response.json();
// 	console.log(JSON.stringify(myJson));}
// )
