const commentHandler = async (event) => {
  event.preventDefault();

  let path = window.location.pathname.split("/");

  let postId = path[2];

  console.log(postId);

  console.log();

  const comment = await document.getElementById("comment-content").value.trim();

  if (!comment) {
    alert("No comment to post");
    return;
  }

  if (comment) {
    const response = await fetch("/comment", {
      method: "POST",
      body: JSON.stringify({ comment, postId }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace(`/comment/${postId}`);
    } else {
      alert("Problem occurred trying to post comment");
    }
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentHandler);
