module.exports = class UserDto{
    email; id; login; name; age; nationality; role;isBlocked;
    constructor(model){
        this.email = model.email;
        this.id = model.idUser;
        this.login = model.login;
        this.name = model.name;
        this.age = model.age;
        this.nationality = model.nationality;
        this.role = model.role;
        this.isBlocked = model.isBlocked;
    }
}