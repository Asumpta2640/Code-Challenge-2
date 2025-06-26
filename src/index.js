let form = document.querySelector('#guest-form')
let nameInput = document.querySelector('#guest-name')
let categoryInput = document.querySelector('#guest-category')
let guestList = document.querySelector('#guest-list')


let form = document.getElementById('guest-form');
let nameInput = document.getElementById('guest-name');Add commentMore actions
let categoryInput = document.getElementById('guest-category');
let guestList = document.getElementById('guest-list');

form.addEventListener('submit', function (event) {
  event.preventDefault()

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  let guestName = nameInput.value.trim()
  let category = categoryInput.value
  let guestName = nameInput.value.trim();Add commentMore actions
  let category = categoryInput.value;

  if (guestName === '') {
    alert('Please enter a name.')
    return
    alert('Please enter a name.');
    return;
  }

  // Check if guest list already has 10 guests
  if (guestList.children.length >= 10) {
    alert('Guest list limit (10) reached!')
    returnAdd commentMore actions
    alert('Guest list limit (10) reached!');
    return;
  }

  let listItem = document.createElement('li')
  // Create a list item for the guest
  let listItem = document.createElement('li');

  let content = document.createElement('div')
  content.innerHTML = `
    <span class="category ${category}">${category}</span>
    <strong>${guestName}</strong>
    <div class="time">Added at ${new Date().toLocaleTimeString()}</div>
  // Create a span to show the guest category
  let categorySpan = document.createElement('span');Add commentMore actions
  categorySpan.innerText = category;
  categorySpan.className = 'category ' + category;

`
  // Create a strong element to show the guest name
  let nameStrong = document.createElement('strong');
  nameStrong.innerText = guestName;

  let actions = document.createElement('div')
  actions.classList.add('actions')
  // Create a small div to show the time
  let timeDiv = document.createElement('div');
  timeDiv.className = 'time';
  timeDiv.innerText = 'Added at ' + new Date().toLocaleTimeString();

  let deleteBtn = document.createElement('button')
  deleteBtn.innerText = 'Remove'
  deleteBtn.classList.add('delete-btn')
  // Create RSVP button
  let rsvpBtn = document.createElement('button');
  rsvpBtn.innerText = 'RSVP: Not Attending';
  rsvpBtn.className = 'rsvp-btn';

  let rsvpBtn = document.createElement('button')
  rsvpBtn.innerText = 'RSVP: Not Attending'
  rsvpBtn.classList.add('rsvp-btn')
  // Create Remove buttonAdd commentMore actions
  let removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove';
  removeBtn.className = 'delete-btn';

   actions.appendChild(rsvpBtn)
  actions.appendChild(deleteBtn)
  // Add all elements to the list item
  listItem.appendChild(categorySpan);
  listItem.appendChild(nameStrong);
  listItem.appendChild(timeDiv);
  listItem.appendChild(rsvpBtn);
  listItem.appendChild(removeBtn);

  listItem.appendChild(content)
  listItem.appendChild(actions)
  guestList.appendChild(listItem)
  // Add the list item to the guest list
  guestList.appendChild(listItem);

  
  form.reset()
})
  // Clear the form
  form.reset();
});

guestList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-btn')) {
    e.target.closest('li').remove()
// Handle clicks on the guest list
guestList.addEventListener('click', function(event) {Add commentMore actions
  let clicked = event.target;

  // If "Remove" button is clicked
  if (clicked.classList.contains('delete-btn')) {
    let listItem = clicked.parentElement;
    listItem.remove();
  }

  if (e.target.classList.contains('rsvp-btn')) {
    let current = e.target.innerText
    if (current.includes('Not Attending')) {
      e.target.innerText = 'RSVP: Attending'
  // If "RSVP" button is clicked
  if (clicked.classList.contains('rsvp-btn')) {
    if (clicked.innerText.includes('Not Attending')) {
      clicked.innerText = 'RSVP: Attending';
    } else {Add commentMore actions
      e.target.innerText = 'RSVP: Not Attending'
      clicked.innerText = 'RSVP: Not Attending';
    }
  }
}
})
});
}