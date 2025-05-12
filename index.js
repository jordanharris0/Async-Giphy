require("dotenv").config();

// Print out value of API key stored in .env file
async function getImages(query) {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  try {
    const response = await fetch(endpoint);
    const json = await response.json();
    const imageUrl = json.data[0].images.original.url;
    console.log(imageUrl);
  } catch (error) {
    console.error("Error fetching data from Giphy API:", error);
  }
}

getImages("cats");
console.log(process.env.API_KEY);
