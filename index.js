
function getToHerokuGet() {
  return axios.get('https://hidden-dusk-44830.herokuapp.com');
}

const container = document.querySelector('#id');
getToHerokuGet().then(({ data }) => {
  container.textContent(data);
})