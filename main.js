window.addEventListener('load', init);
let question
function init() {
    let mybutton = document.getElementById("topbutton");
    mybutton.addEventListener("click", goTop);

    window.addEventListener("scroll", e => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    })
    question = document.getElementById("question")
    question.addEventListener("click", showAnswer)

}

function  goTop (e) {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

function showAnswer (e) {
    question.innerHTML = "";

    let h3 = document.createElement("h3")
    h3.innerHTML = "Yes! Goed gedaan. Simpel toch?"

    let goodAnswer = document.createElement("img")
    goodAnswer.src = "https://i.imgur.com/oIYj1Wp.png";

    question.appendChild(h3)
    question.appendChild(goodAnswer)
}