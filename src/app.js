console.log("Hello, World!");
function handleLogin(username, password) {
    return username === "admin" && password === "admin";
}
// Attach handleLogin to the global window object
window.handleLogin = handleLogin;
