const generator = require('generate-password');

const password = generator.generate({
	length: 30,
	numbers: true,
    symbols: true,
});

const passwords = generator.generateMultiple(5, {
	length: 20,
	uppercase: false,
    numbers: true,
    symbols: true,
});

module.exports = {
    password,
    passwords
}