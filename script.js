const p = document.querySelector("p");
const btn = document.querySelector("#call-API");
const result = document.querySelector(".result");
const jokeAns = document.querySelector("#Q-ans");

btn.addEventListener("click", async () => {
    await getData()
    btn.innerText = "Next jokes";
    result.innerText = "";
});


function getData() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then((res) => {
            return res.json()
        }).then((data) => {
            let ques = data.setup
            let ans = data.punchline
            p.innerText = "Que. " + ques;
            p.style.color = "purple"
            jokeAns.addEventListener("click", () => {
                result.innerText = "Ans. " + ans;
            })
        })
        .catch((err) => {
            console.log(err);
        })
}