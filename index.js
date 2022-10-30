const adviceTextElement = document.querySelector('.advice-text')
const adviceIdElement = document.querySelector('.advice-id')
const adviceButton = document.querySelector('.advice-button')

const fetchAdvice = async () => {
  let adviceSlip

  try {
    const res = await fetch('https://api.adviceslip.com/advice')

    if (!res.ok) {
      throw new Error('shit happened')
    }

    adviceSlip = await res.json()
  } catch (e) {}

  return adviceSlip.slip
}

const updateAdvice = async () => {
  const { advice, id } = await fetchAdvice()

  adviceTextElement.innerText = advice
  adviceIdElement.innerText = id
}

adviceButton.addEventListener('click', updateAdvice)

// run on page load
updateAdvice()
