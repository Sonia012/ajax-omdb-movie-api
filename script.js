const searchButton = document.querySelector('#button');
searchButton.addEventListener(`click`, handleClickButton);

function handleClickButton() {
  fetch(`http://www.omdbapi.com/?s=` + $("#search").val().toLowerCase() + "&All&apikey=98bb7fd7")
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    let output = `<h2>Search results</h2>`;
    let dataArray = data.Search
    dataArray.forEach(function(movie) {
      output += `
        <ul>
          <li>Title: ${movie.Title}</li>
          <li>Year: ${movie.Year}</li>
        </ul>
        `;
    })
    $("#output").html(output);
    console.log(dataArray)
    for (let i = 0; i < (dataArray.length)*2; i += 2) {
      $("ul li").eq(i).click(function(movie) {
      const title = dataArray[i/2].Title
      localStorage[`titleSearched`] = title
      window.open("index2.html", "_self")
    })
  }
  })
}
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








// const backButton = document.querySelector('#back');
// console.log(backButton)
// backButton.addEventListener(`click`, handleClickBackbutton)
// window.open("index2.html", "_self")
//localStorage[`search`] = searchRes
