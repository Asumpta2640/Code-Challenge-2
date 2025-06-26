
const form = document.getElementById('guest-form');
const nameInput = document.getElementById('guest-name');
const categoryInput = document.getElementById('guest-category');
const guestList = document.getElementById('guest-list');


form.addEventListener('submit', function(event) {
  event.preventDefault();

  const guestName = nameInput.value.trim();
  const category = categoryInput.value;

  if (guestName === '') {
    alert('Please enter a name.');
    return;
  }

  if (guestList.children.length >= 10) {
    alert('Guest list limit (10) reached!');
    return;
  }

  
  const listItem = document.createElement('li');

  const categorySpan = document.createElement('span');
  categorySpan.innerText = category;
  categorySpan.className = 'category ' + category;

  const nameStrong = document.createElement('strong');
  nameStrong.innerText = guestName;

  const timeDiv = document.createElement('div');
  timeDiv.className = 'time';
  timeDiv.innerText = 'Added at ' + new Date().toLocaleTimeString();

  const rsvpBtn = document.createElement('button');
  rsvpBtn.innerText = 'RSVP: Not Attending';
  rsvpBtn.className = 'rsvp-btn';

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Remove';
  deleteBtn.className = 'delete-btn';

  const actions = document.createElement('div');
  actions.className = 'actions';
  actions.appendChild(rsvpBtn);
  actions.appendChild(deleteBtn);

  
  listItem.appendChild(categorySpan);
  listItem.appendChild(nameStrong);
  listItem.appendChild(timeDiv);
  listItem.appendChild(actions);

  guestList.appendChild(listItem);

  
  form.reset();
});


guestList.addEventListener('click', function(event) {
  const clicked = event.target;

  if (clicked.classList.contains('delete-btn')) {
    clicked.closest('li').remove();
  }

  if (clicked.classList.contains('rsvp-btn')) {
    if (clicked.innerText.includes('Not Attending')) {
      clicked.innerText = 'RSVP: Attending';
    } else {
      clicked.innerText = 'RSVP: Not Attending';
    }
  }
});
