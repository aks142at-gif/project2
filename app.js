
// Add a simple greeting function
=======
// Existing greeting function

function sayHello(name) {
  console.log(`Hello, ${name}! Welcome to the project.`);
}


// Example usage:
sayHello('Developer');
=======
// ✨ NEW FEATURE: User Profile Manager
// Handles user status tracking and personalized greetings
const userManager = {
  users: [],

  // Add a new user with an active status
  addUser(name, role = 'Developer') {
    const newUser = {
      id: this.users.length + 1,
      name: name,
      role: role,
      joinedAt: new Date().toLocaleDateString()
    };
    this.users.push(newUser);
    
    // Leverage the existing function
    sayHello(name);
    console.log(`[System]: Registered as ${role}.`);
    return newUser;
  },

  // List all registered users in a clean console table
  listUsers() {
    console.log("\n--- Active Project Contributors ---");
    console.table(this.users);
  }
};

// Example usage of the new feature:
userManager.addUser('Alex', 'Lead Admin');
userManager.addUser('Sam', 'Contributor');
userManager.listUsers();
>>>>>>> features
