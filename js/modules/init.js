/*
    Project: Assignment 08: The Asynchronous Loading Employee Management Application
    Date: 12/03/23
    Author: Van Do
*/

async function fetchUsers() {
    try {
      const response = await fetch('/data/employees.json');
      const users = await response.json();
      return users;
    } catch (error) {
      console.error(error);
    }
}
  
export { fetchUsers };