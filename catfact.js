async function fetchData(request) {
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error('Failed to get cat fact.');
  }
  const data = await response.json();
  return data;
}

function getCatFact() {
  const factRequest = `https://api.allorigins.win/get?url=${encodeURIComponent('https://meowfacts.herokuapp.com/')}`;
  let factContainer = document.getElementById('cat-fact');

  fetchData(factRequest)
    .then(response => {
		const regex = /"data":\["([^"]+)"/;
		const factText = response.contents.match(regex)[1];
		factContainer.innerHTML = factText;
	})
	.catch(error => {
	  console.log(error);
	});
}

getCatFact();