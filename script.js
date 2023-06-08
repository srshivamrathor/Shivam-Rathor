// Add event listener for dragstart on the first container
// Add event listener for dragover on the second container
// Reset button event listener
    const firstContainer = document.getElementById('first-container');
    const secondContainer = document.getElementById('second-container');
    const resetButton = document.getElementById('reset-button');

    firstContainer.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', event.target.innerText);
      event.target.style.opacity = '0.5';
    });

//Add event listener for drop on the second container
    secondContainer.addEventListener('dragover', (event) => {
    //Prevent default behavior of drop event
      event.preventDefault();
    });

    secondContainer.addEventListener('drop', (event) => {
      event.preventDefault();
      //Access dropped item or data
      const data = event.dataTransfer.getData('text/plain');
      const successMessage = document.createElement('p');
       //Update the UI or display a success message
      // For example, you can update the innerHTML of the second container
      successMessage.textContent = `Item "${data}" dropped successfully!`;
      secondContainer.appendChild(successMessage);
    });

    resetButton.addEventListener('click', () => {
      secondContainer.innerHTML = '';
      const items = document.querySelectorAll('.item');
      items.forEach((item) => {
        item.style.opacity = '1';
      });
    });