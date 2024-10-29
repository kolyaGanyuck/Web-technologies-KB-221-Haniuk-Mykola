let login = prompt("Enter login");
if (login === "Admin"){
    let password = prompt("Enter password");
    if (Number(password) === 123456){
        alert("Welcome");
    }
}
else{
    alert("Login cancelled")
}
