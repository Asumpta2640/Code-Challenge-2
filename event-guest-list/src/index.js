const form = document.getElementById("guest-form");
const guestList = document.getElementById("guest-list");
const guestInput = document.getElementById("guest-name");

let guest = [];

form.addEventListener("submit",function (event){
    Event.preventDefault(); //prevent from submission
    const name = guestInput.value.trim();

    if (name === "") return;

    if(guest.length >= 10){
        alert("Guest list is full!(Max 10 guests)");
        return;
    }

    const guest = {
        id:Date.now(),
        name,
        attending: true,
        addedAt:new Date()
    };
    guests.push(guest);
    guestInput.value ="";
    renderList();
});
function renderList(){
    guestList.innerHTML ="";

    guests.forEach(guest =>{
        const li = document.createElement("li");
        const info = document.createElement("span");
        info.textContent =`${guest.name} (${guest.attending?"Attending": "Not Attending"})`;

        info.className = guest.attending ?"attending" : "not-attending";

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => {
            guests = guest.filter(g => g.id !== guest.id);
            renderList();
        };
        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Toggle RSVP";
        toggleBtn.onclick = () =>{
            guests.attending = !guest.attending;
            renderList();
        };
        const time =document.createElement("small");
        time.textContent = `Added at: ${guest.addedAt.toLocaleTimeString()}`;
        time.style.marginLeft = "10px";
        time.style.fontSize = "0.8em";
        time.style.color = "#555";

        li.append(info,time,toggleBtn,removeBtn);
        guestList.appendChild(li);
    });
}
