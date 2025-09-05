const $ = s => document.querySelector(s);
const api = u => fetch(u).then(r => r.ok ? r.json() : Promise.reject(r));

$("#result").innerHTML = `<div class="card empty">Search any GitHub username to view profile & top repos.</div>`;

$("#search-form").addEventListener("submit", e => {
  e.preventDefault();
  const u = $("#search-input").value.trim();
  if (!u) return;
  $("#result").innerHTML = `<div class="card empty">Loading...</div>`;

  const userURL = `https://api.github.com/users/${u}`;
  const reposURL = `https://api.github.com/users/${u}/repos?sort=updated&per_page=6`;

  Promise.all([api(userURL), api(reposURL)])
    .then(([user, repos]) => {
      $("#result").innerHTML = `
        <div class="card">
          <div class="profile">
            <img class="avatar" src="${user.avatar_url}" alt="${user.login}"/>
            <div>
              <h2 class="name">${user.name || user.login}</h2>
              <p class="bio">${user.bio ? user.bio : "No bio provided."}</p>
              <div class="badges">
                <span class="badge">👥 Followers: ${user.followers}</span>
                <span class="badge">🧑‍🤝‍🧑 Following: ${user.following}</span>
                <span class="badge">📦 Repos: ${user.public_repos}</span>
              </div>
              <div class="actions">
                <a class="link" href="${user.html_url}" target="_blank">View on GitHub ↗</a>
              </div>
            </div>
          </div>

          <h3 class="section-title">Top Repositories</h3>
          <div class="repos">
            ${repos.length ? repos.map(r => `
              <div class="repo">
                <a href="${r.html_url}" target="_blank">${r.name}</a>
                <div class="meta">⭐ ${r.stargazers_count} • 🍴 ${r.forks_count} • ⏱️ ${new Date(r.updated_at).toLocaleDateString()}</div>
              </div>
            `).join("") : `<div class="empty">No repositories found.</div>`}
          </div>
        </div>
      `;
    })
    .catch(() => {
      $("#result").innerHTML = `<div class="card error">User not found or API limit reached. Try another username.</div>`;
    });
});
