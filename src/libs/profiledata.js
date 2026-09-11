async function getData() {
  const response = await fetch("https://api.github.com/users/NiteshKumavat/repos?sort=desc&per_page=6");
  const data = await response.json();

  return data
}

export default getData;