function login(username, password) {
    //call to backend API to validate user credentials
  return username === "admin" &&
         password === "1234";
}

function logout() {
  // Clear user session or token
  
  console.log("User logged out");
}