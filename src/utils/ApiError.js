class ApiError extends Error {
    constructor(
        statusCode,
        message,
        errors = [],
        stack = "",
        isOperational = true
    ) {
        super(message);
        this.statusCode  = statusCode;
        this.data = null;
        this.message = message;
        this.errors = errors; 
        this.success = false;
        this.isOperational = isOperational;
        if(stack){
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}


export {ApiError}