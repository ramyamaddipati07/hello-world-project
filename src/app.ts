// Importing necessary modules (if needed)
console.log("Hello, World!");

// Function to handle login
function handleLogin(username: string, password: string): void {
    if (username === "admin" && password === "password123") {
        console.log("Login successful!");
    } else {
        console.log("Invalid credentials.");
    }
}

// Example usage
handleLogin("admin", "password123");