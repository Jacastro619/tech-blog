const renderPost = async () => {
  const path = window.location.pathname.split("/");
  const postId = path[2];
  const response = await fetch(`/api/info/post/${postId}`, {
    method: "GET",
  });

  if (!response.ok) {
    alert("Error occurred while retrieving data");
    return;
  }

  const data = await response.json();

  if (response.ok) {
    document.querySelector("#post-title").value = data.title;
    document.querySelector("#post-content").textContent = data.description;
  } else {
    alert("error occurred");
  }
};

renderPost();
