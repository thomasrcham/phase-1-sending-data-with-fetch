let newEntry = {
    name: 'Jason',
    email: 'jason@email.com',
}


// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(entry),
//     };

function submitData (entry) {
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(entry),
        })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch( () => console.log('error'))
}

submitData(newEntry);