const notification = document.getElementById("nbreNotifications");
const card = document.querySelectorAll(".container-card.active");
const mark = document.getElementById("markedall");

let nbreNotif = 7;

function markAllRead() {
  mark.addEventListener("click", () => {
    card.forEach(function (userItem) {
      userItem.classList.remove("active");
    });
    notification.textContent = 0;
  });
}

function readPost() {
  notification.textContent = 7;
  for (let postId of card) {
    let id = document.getElementById(postId.id);
    id.addEventListener("click", () => {
      console.log(id);
      id.classList.remove("active");
      nbreNotif--;
      notification.textContent = nbreNotif;
    });
  }
}

readPost();
markAllRead();
