const logoutHandler = async () => {
  console.log("got here");
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Cannot logout");
  }
};

const commentHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#comment-content").value.trim();

  if (!comment) {
    alert("No comment to post");
    return;
  }
  if (comment) {
    const response = await fetch("");
  }
};

document.querySelector("#logout").addEventListener("click", logoutHandler);
