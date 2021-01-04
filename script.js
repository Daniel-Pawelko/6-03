document.getElementById('button-id').addEventListener('click', checkMovie)
const output = document.getElementById('output-id')
function checkMovie () {
  const age = document.getElementById('input-id').value
  if (age >= 17) {
    console.log('17 or older')
    output.innerHTML = 'Available movies depending on your age : R rated, PG 13, and G rated'
  } else if (age >= 13) {
    console.log('13 or older')
    output.innerHTML = 'Available movies depending on your age : PG 13 and G rated'
  } else if (isNaN(age) || age < 0) {
    console.log('Please input valid positive intiger')
    output.innerHTML = 'Please input positive valid integer'
  } else {
    console.log('G rated')
    output.innerHTML = 'Available movies depending on your age : G rated'
  }
}
