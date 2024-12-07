const clientError = require('./clientError');
     
class inputError extends clientError {
    constructor(message) {
        super(message);
        this.name = 'inputError';
        this.statusCode = 400;
    }
}
 
module.exports = inputError;