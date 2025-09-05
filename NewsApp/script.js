const apiKey = "pub_c8c0ecaa78804a1e85e9b37d72d566db";
const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=pk`;

function fetchNews() {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const articles = data.results;
      const container = document.getElementById("news-container");
      container.innerHTML = "";

      articles.forEach(news => {
        const card = document.createElement("div");
        card.className = "news-card";
        card.innerHTML = `
          <img src="${news.image_url || 'https://placehold.co/300'}" alt="News Image">
          <h3>${news.title}</h3>
          <p>${news.description || "No description available"}</p>
          <a href="${news.link}" target="_blank">Read More</a>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => console.error("Error fetching news:", err));
}

fetchNews();
