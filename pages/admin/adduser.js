

// You can implement similar function for updateUser()



/*
    const addUserForm = document.getElementById('addUserForm');
    const userTableBody = document.getElementById('usersData');
    
    addUserForm.addEventListener('submit', function(event){
        event.preventDefault();

        //collect form data
        const formData = new FormData(addUserForm);
        const userInfo = {};
        formData.forEach((value, key) => {
            userInfo[key] = value;
        });

        //store data in local storage
        let users = JSON.parse(localStorage.getItem('userData')) || [];
        users.push(userInfo);
        localStorage.setItem('usersData', JSON.stringify(users));

        //clear form fields
        addUserForm.reset();

        //display data in table
        displayUserData();
    });

    
function displayUserData(){
    const users = JSON.parse(localStorage.getItem('usersData')) || [];
    userTableBody.innerHTML = ``;
    users.forEach(user => {
        const row = document.createElement('tr');
        Object.values(user).forEach(value =>{
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        userTableBody.appendChild(row);
    });
}

displayUserData();


    



// Function to add user data to the table
function addUser() {
    // Get form input values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const childName = document.getElementById('childName').value;
    const id = document.getElementById('id').value;
    const telNo = document.getElementById('telNo').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const country = document.getElementById('country').value;
    const role = document.getElementById('role').value;
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;

    // Create a new row
    const table = document.getElementById('Users');
    const newRow = table.insertRow();

    // Insert cells for each column
    const cells = [
        firstName,
        lastName,
        childName,
        id,
        address,
        telNo,
        email,
        country,
        role,
        userName,
        password
    ];

    cells.forEach((cellData) => {
        const cell = newRow.insertCell();
        cell.textContent = cellData;
    });
}

// This function should be called when the form is submitted
// Add an event listener to the submit button if you haven't already */
