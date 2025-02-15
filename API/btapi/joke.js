const jokeHeading = document.querySelector(".joke-heading");
const jokeButton = document.querySelector(".joke-button");
const jokeWrapper = document.querySelector(".joke");
const endpoint = "https://icanhazdadjoke.com/";
async function getJoke(){
    const respone = await fetch(endpoint, {
        headers:{
            Accept: "application/json", 
        },
    });
    const data = await respone.json();
    return data;
}

async function handleClick(){
    jokeWrapper.classList.add("is-loading");
    const data = await getJoke();
    jokeHeading.textContent = data.joke;
    jokeWrapper.classList.remove("is-loading");
}
jokeButton.addEventListener("click", handleClick);


