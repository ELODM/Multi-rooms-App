const chatNamespace = io("/chat", {
  auth: {
    token: 123456,
  },
});

// Query DOM
const messageInput = document.getElementById("messageInput");
const chatForm = document.getElementById("chatForm");
const chatBox = document.getElementById("chat-box");
const feedback = document.getElementById("feedback");
const onlineUsers = document.getElementById("online-users-list");
const chatContainer = document.getElementById("chatContainer");
const pvChatForm = document.getElementById("pvChatForm");
const pvMessageInput = document.getElementById("pvMessageInput");
const modalTitle = document.getElementById("modalTitle");
const pvChatMessage = document.getElementById("pvChatMessage");

const nickname = localStorage.getItem("nickname");
const roomNumber = localStorage.getItem("chatroom");
let socketId;

// Emit Events
chatNamespace.emit("login", { nickname, roomNumber });

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (messageInput.value) {
    chatNamespace.emit("chat message", {
      message: messageInput.value,
      nickname,
      roomNumber,
    });
    messageInput.value = "";
  }
});

pvChatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  chatNamespace.emit("pvChat", {
    message: pvMessageInput.value,
    name: nickname,
    to: socketId,
    from: chatNamespace.id,
  });

  $("#pvChat").modal("hide");
  pvMessageInput.value = "";
});

// Listening
chatNamespace.on("chat message", (data) => {
  feedback.innerHTML = "";
  const isCurrentUser = data.nickname === nickname;
  
  chatBox.innerHTML += `
    <div class="message-container">
      <div class="message-info">
        <span>${data.nickname}</span>
        <span>${data.date}</span>
      </div>
      <div class="message ${isCurrentUser ? 'message-right' : 'message-left'}">
        <div class="message-content">${data.message}</div>
      </div>
    </div>
  `;
  
  chatContainer.scrollTop = chatContainer.scrollHeight;
});

messageInput.addEventListener("keypress", (e) => {
  chatNamespace.emit("typing", { name: nickname, roomNumber });
});

chatNamespace.on("typing", (data) => {
  if (roomNumber == data.roomNumber) {
    feedback.innerHTML = data;
  }
});

chatNamespace.on("pvChat", (data) => {
  $("#pvChat").modal("show");
  socketId = data.from;
  modalTitle.innerHTML = "Received message from " + data.name;
  pvChatMessage.style.display = "block";
  pvChatMessage.innerHTML = data.name + " : " + data.message;
});

chatNamespace.on("online", (data) => {
  onlineUsers.innerHTML = "";
  data.forEach((user) => {
    if (roomNumber == user.roomNumber) {
      onlineUsers.innerHTML += `
            <li>
            <button type="button" class="btn btn-light mx-2 p-2" data-toggle="modal" data-target="#pvChat" data-id=${
              user.id
            } data-client=${user.name}
            ${user.id === chatNamespace.id ? "disabled" : ""}>
            ${user.name}
            <span class="badge badge-success"> </span>
            </buton>
            </li>
        `;
    }
  });
});

// jQuery
$("#pvChat").on("show.bs.modal", function (e) {
  var button = $(e.relatedTarget);
  var user = button.data("client");
  socketId = button.data("id");

  modalTitle.innerHTML = "Send message to " + user;
  pvChatMessage.style.display = "none";
});
