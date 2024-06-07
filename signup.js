const Signup = (event) => {
    event.preventDefault();
    let mail = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let cnfrm = document.getElementById('cnfrm').value;
    let data = JSON.parse(localStorage.getItem('data'));
    let flag = Boolean(0)
    if (data != null) {
        data.map((key, index) => {
            console.log(key)
            if (mail === key.email) {
                window.alert("Account already exists, try signing in with a new email ")
                flag = 1;
                event.target.reset()
            }
        })

    }
    if (pass === cnfrm && (mail || pass || cnfrm) !== "" && flag == 0) {
        let obj = {
            email: mail,
            password: pass,
            ConfirmPassword: cnfrm
        }
        if (data == null) {
            localStorage.setItem('data', JSON.stringify([obj]))
        }
        else {
            data.push(obj);
            localStorage.setItem('data', JSON.stringify(data))
            window.alert("Account creation successful")

        }
    }


}
