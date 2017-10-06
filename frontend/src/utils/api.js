const API = `http://localhost:3001`;

const headers = {
  Accept: "application/json",
  Authorization: "123"
};

export function fetchCategories() {
  return fetch(`${API}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);
}
