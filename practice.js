const user = { id: 1, name: 'John', email: 'john@example.com' };

let updatedEmail = 'john.doe@example.com';
user['email'] = updatedEmail

console.log(user)
// Return a new object with updated email (without mutating original)

