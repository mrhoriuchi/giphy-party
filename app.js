const $gifArea = $("#gifArea");
const $searchInput = $("#inputGif");

$("form").on("submit", async function (e) {
  e.preventDefault();
  let searchTerm = $searchInput.val();
  $searchInput.val("");
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  addGif(res.data);
});

$("#btnRmv").on("click", function (e) {
  e.preventDefault();
  $gifArea.empty();
});

function addGif(res) {
  let numGifs = res.data.length;
  if (numGifs) {
    let rdmIdx = Math.floor(Math.random() * numGifs);
    let $newGif = $("<img>", {
      src: res.data[rdmIdx].images.original.url,
    });
    $gifArea.append($newGif);
  }
}
