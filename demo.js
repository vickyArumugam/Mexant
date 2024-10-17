let userObject= JSON.parse(localStorage.getItem('userdata'));
console.log(userObject);

const resultDiv = document.getElementById("result");
resultDiv.textContent = `
    <p>Name: ${userObject.name}</p>
    <p>Age: ${userObject.id}</p>
    <p>Email: ${userObject.email}</p>
`;