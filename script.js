document.getElementById('btn').addEventListener('click', async function() {
  const textInput = document.getElementById('text').value;
  const delayInput = document.getElementById('delay').value;

  const delay = parseInt(delayInput);

  // Call the async function to wait for the specified time
  delayAndShowMessage(textInput, delay)
    .then(result => {
      document.getElementById('output').innerText = result;
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
});

// Async function to wait for a specified time before resolving with a message
function delayAndShowMessage(text, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });
}
