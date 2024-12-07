const postButton = document.getElementById("postButton");
const postContent = document.getElementById("postContent");
const postContainer = document.getElementById("postsContainer");
const title = document.getElementById("title");

postButton.addEventListener("click", () => {  
  const content = postContent.value.trim();
  const _title = title.value.trim();

  if (_title && content) {
    postContainer.innerHTML += `
        <div class = "post">
        <p class = "postTitle"> ${_title} </p>
        <p class = "post-content-box"> ${content} </p>
        <button class="deletePostButton">Delete </button>
        </div>
        `;
    postContent.value = "";
    title.value = "";
  }
});


postContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("deletePostButton")) {
    e.target.parentElement.remove();
  }
});

