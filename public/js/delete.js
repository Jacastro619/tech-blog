const deletePost = async () => {
  const confirmation = confirm(
    "Are you sure you want to delete this post? This cannot be undone!"
  );
  if (confirmation) {
    const path = window.location.pathname.split("/");
    const postId = path[2];
    const response = await fetch(`/api/info/${postId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("An error occurred, deletion aborted");
    }
  } else {
    return;
  }
};

document.querySelector("#delete-btn").addEventListener("click", deletePost);
