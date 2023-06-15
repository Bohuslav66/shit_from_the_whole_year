function Admin(inputEmail, inputPassword){
    var Email = document.getElementById(inputEmail).innerHTML;
    var Password = document.getElementById(inputPassword).innerHTML;

    console.log(Email, Password)

    let SingIn = {
        email: Email,
        heslo: Password
    }
    console.log(SingIn)

    if(Email == "admin@admin" && Password == "admin"){
        console.log("success")
    }
    else{
        console.log("user")
    }

}