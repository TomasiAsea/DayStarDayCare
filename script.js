// login pop up 
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = (e) =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}



let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}




//array of users saved in local storage
const users = [
    {firstName: 'John', lastName: 'Doe', childsName: 'Doe', childAge: 2, gender: 'male', Id: 'CM1223456', telNo: +256777132345, address: 'kampala', email: 'John@example.com', country: 'Uganda', role: 'admin', userName: 'JDoe',password:'1234abc'},
    {firstName: 'Johnnie', lastName: 'Doe', childsName: 'Doe', childAge: 2, gender: 'male', Id: 'CM1223456', telNo: +256777132345, address: 'kampala', email: 'johnnie@example.com', country: 'Uganda', role: 'parent', userName: 'JDoe',password:'1234abc'},  
]

// Function to store user data in local storage
function storeUserData(usersArray) {
    localStorage.setItem('usersData', JSON.stringify(usersArray));
}

// Call the function to store users in local storage
storeUserData(users);


//function to handle form submission

document.getElementById("loginForm").onsubmit = function(login) {
    login.preventDefault(); // Prevent default form submission behavior

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve users data from local storage
    const storedUsers = JSON.parse(localStorage.getItem('usersData')) || [];

    // Find user in the array
    const user = storedUsers.find(u => u.email === email && u.password === password);

    if (user) {
        // Redirect based on user role
        switch (user.role) {
            case "admin":
                window.location.href = "./pages/admin/admindash.html";
                break;
            case "sitter":
                window.location.href = "./pages/sitters/sitterdash.html";
                break;
            case "parent":
                window.location.href = "./pages/parent/parentdash.html";
                break;
            default:
                alert("Invalid user role");
        }
    } else {
        alert("Invalid email or password");
    }
}; 



