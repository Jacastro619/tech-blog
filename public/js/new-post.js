const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();

  if (!title || !content) {
    alert("Both fields must be filled out");
    return;
  }

  if (title && content) {
    const response = await fetch("/new", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Problem occured while trying to post");
    }
  }
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newPostHandler);
