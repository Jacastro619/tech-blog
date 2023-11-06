const logoutHandler = async () => {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    alert("You have been successfully logged out");
    document.location.replace("/");
  } else {
    alert("Cannot logout");
  }
};

document.querySelector("#logout").addEventListener("click", logoutHandler);
