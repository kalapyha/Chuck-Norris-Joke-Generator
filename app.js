const btn = document.getElementById('generate');
btn.addEventListener('click', generateJoke);

function generateJoke(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://api.icndb.com/jokes/random", true);
  xhr.onload = function() {
    if(this.status === 200) {
      const resp = JSON.parse(this.responseText);
      document.getElementById("joke").innerText = resp.value.joke;
    }
  }
  xhr.send()
  e.preventDefault()
}

