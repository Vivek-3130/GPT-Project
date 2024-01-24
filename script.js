// document.addEventListener('DOMContentLoaded', fetchData);

// function fetchData() {
//     const apiUrl = 'https://jsonplaceholder.typicode.com/users';

//     fetch(apiUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => displayData(data))
//         .catch(error => console.error('Error fetching data:', error));
// }

// function displayData(users) {
//     const userList = document.getElementById('users-list');

//     // Using forEach to iterate over the users and display their names
//     users.forEach(user => {
//         const listItem = document.createElement('li');
//         listItem.textContent = user.name;
//         userList.appendChild(listItem);
//     });
//     // Using map to create a new array of user emails and display them
//     const userEmails = users.map(user => user.website);
//     userEmails.forEach(email => {
//         const emailItem = document.createElement('li');
//         emailItem.textContent = email;
//         userList.appendChild(emailItem);
//     });
// }
