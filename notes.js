import validator from 'validator'
// const validator = require('validator')
export const getNotes = () => {
    const message = "Your notes ...";
    console.log(validator.isEmail('a@s.com'))

    return message
}
// module.exports.getNotes = getNotes;