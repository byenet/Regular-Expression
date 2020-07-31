const phoneNumbers = [
    "123.123.1234",
    "091-301-0001",
    "0123 123 324"
];

function sanitize(phoneNumbers) {
    return phoneNumbers.map(str => {
        return str.replace(/[. -]/g, '');
    })
}

result = sanitize(phoneNumbers);

console.log(result);