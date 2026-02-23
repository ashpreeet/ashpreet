const correctId = "17057";
const correctPass = "ashpreet0007";

function login(){
  const id = document.getElementById("adminId").value;
  const pass = document.getElementById("adminPass").value;

  if(id === correctId && pass === correctPass){
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    loadMessages();
  }else{
    alert("Wrong ID or Password ❌");
  }
}

function loadMessages(){
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  const container = document.getElementById("messages");
  container.innerHTML = "";

  if(messages.length === 0){
    container.innerHTML = "<p>No messages yet.</p>";
    return;
  }

  messages.reverse().forEach(msg => {
    container.innerHTML += `
      <div class="message">
        <strong>Name:</strong> ${msg.name}<br>
        <strong>Email:</strong> ${msg.email}<br>
        <strong>Message:</strong> ${msg.message}<br>
        <small>${msg.date}</small>
      </div>
    `;
  });
}

function logout(){
  location.reload();
}