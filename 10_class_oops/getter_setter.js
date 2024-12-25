class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }
    get password() {
         return `${this._password.toUpperCase()}getinside`
    }

    set password(value) {
        this._password = value
    }
}

const sai  = new User("sai@gmail.com", "234s")
console.log(sai.email)