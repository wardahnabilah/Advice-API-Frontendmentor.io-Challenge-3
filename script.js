const adviceId = document.querySelector(".advice-id")
const adviceBody = document.querySelector(".advice-body")
const button = document.querySelector(".circle")

// Async function to get an advice using API
async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()

    // Passing data received from API to generateAdvice function
    generateAdvice(data.slip)
}

function generateAdvice(data) {
    // Passing the id to adviceId element
    adviceId.innerHTML = data.id

    // Passing the advice to adviceBody element
    adviceBody.innerHTML = data.advice
}

// Add event listener to generate a new advice
button.addEventListener("click", getAdvice)