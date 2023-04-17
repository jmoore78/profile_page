class User {
    constructor(firstName, lastName, userName, password) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._userName = userName;
        this._password = password;
    }
};

// needs getters, setters, methods and possibly an admin subclass to show inheritance and privacy.

class AdminUser extends User {
    constructor(firstName, lastName, userName, empId, password) // what is needed to generate the special ID and grant access to that id?
}