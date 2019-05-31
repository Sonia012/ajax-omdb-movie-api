let title = localStorage[`titleSearched`];
console.log(title)



fetch(`http://www.omdbapi.com/?t=` + title + "&plot=full&apikey=98bb7fd7")
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    let output = ``;
    console.log(data)
    output += `
      <h2>${data.Title}</h2>
      <img src=${data.Poster}>
      <p><h3>Actors:</h3> ${data.Actors}</p>
      <p><h3>Director/Writer: </h3> ${data.Director} / ${data.Writer}</p>
      <p>Genre/IMDb Rating: ${data.Genre} / ${data.Ratings[0].Value}</p>
      <p><h3>Plot:</h3> ${data.Plot}</p>
        `
      $("#outputDetails").html(output)
  })
