const loginHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (!username || !password) {
    alert("please fill out both fields");
  }
  if (username && password) {
    const response = await fetch("api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else if (response.status === 400) {
      alert("Invalid Username or Password");
    } else {
      alert("Failed to log in");
    }
  }
};

const signUpHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector("#username-sign-up").value.trim();
  const password = document.querySelector("#password-sign-up").value.trim();

  if (!username || !password) {
    alert("please fill out both fields");
  }

  if (username && password) {
    const response = await fetch("api/user", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else if (response.status === 422) {
      alert("Username is already in use");
    } else if (response.status === 400) {
      alert("Password needs to be at least 8 characters");
    } else {
      alert("Failed to sign up");
    }
  }
};

document.querySelector(".login-form").addEventListener("submit", loginHandler);

document
  .querySelector(".sign-up-form")
  .addEventListener("submit", signUpHandler);
