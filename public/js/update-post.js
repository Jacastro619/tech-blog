const updatePost = async (event) => {
  event.preventDefault();
  const path = window.location.pathname.split("/");
  const postId = path[2];

  const updatedTitle = document.querySelector("#post-title").value.trim();
  const updatedContent = document.querySelector("#post-content").value.trim();

  if (!updatePost || !updatedContent) {
    alert("Both fields must be filled out");
  }

  if (updatePost && updatedContent) {
    const response = await fetch(`/edit/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ updatedTitle, updatedContent }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("An error occurred while updating");
    }
  }
};

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", updatePost);
