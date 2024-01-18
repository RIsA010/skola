document.addEventListener('DOMContentLoaded', function () {
    const registerLink = document.getElementById('registerLink');
    const loginLink = document.getElementById('loginLink');
    const usersListLink = document.getElementById('usersListLink');

    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const usersList = document.getElementById('usersList');
    const usersListContent = document.getElementById('usersListContent');

    registerLink.addEventListener('click', showRegisterForm);
    loginLink.addEventListener('click', showLoginForm);
    usersListLink.addEventListener('click', showUsersList);

    function showRegisterForm() {
        hideAllSections();
        registerForm.style.display = 'block';
    }

    function showLoginForm() {
        hideAllSections();
        loginForm.style.display = 'block';
    }

    function showUsersList() {
        hideAllSections();
        displayUsersList();
        usersList.style.display = 'block';
    }

    function hideAllSections() {
        registerForm.style.display = 'none';
        loginForm.style.display = 'none';
        usersList.style.display = 'none';
    }

    function displayUsersList() {
        // Retrieve users from local storage and display them in the usersList section
        const users = JSON.parse(localStorage.getItem('users')) || [];
        usersListContent.innerHTML = '';

        if (users.length === 0) {
            usersListContent.innerHTML = '<p>No users registered yet.</p>';
        } else {
            usersListContent.innerHTML += '<ul>';
            users.forEach(user => {
                usersListContent.innerHTML += `<li>${user.username} - ${user.status}</li>`;
            });
            usersListContent.innerHTML += '</ul>';
        }
    }

    function registerUser() {
        // Implement user registration logic here
    }

    function loginUser() {
        // Implement user login logic here
    }
});
