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

document.querySelector("#logout").addEventListener("click", logoutHandler);
