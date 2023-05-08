function addAnimation(id) {
  const element = document.getElementById(id);

  element.classList.contains("fa-bounce")
    ? element.classList.remove("fa-bounce")
    : element.classList.add("fa-bounce");
}

async function share() {
  const shareData = {
    title: "Matheus Kerscher | Developer",
    text: "Descubra mais sobre mim accesando o link abaixo :)",
    url: "",
  };

  try {
    await navigator.share(shareData);
  } catch (err) {
    console.log(err);
  }
}

setInterval(() => {
  const element = document.getElementById('icon-share');

  element.classList.contains("fa-beat")
    ? element.classList.remove("fa-beat")
    : element.classList.add("fa-beat");
}, 15000);