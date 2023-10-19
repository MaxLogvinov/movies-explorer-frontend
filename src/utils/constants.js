const regexEmail = '[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.[a-z]{2,}';

const regexName = '^[A-Za-zА-Яа-я\\s\\-]{1,30}$';

module.exports = { regexEmail, regexName };
