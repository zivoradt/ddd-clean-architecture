import HTTP_STATUS from 'http-status-codes';



export  abstract class BaseError extends Error {
    abstract message: string;
    abstract methodName?: string;
    abstract httpCode: number;
    public readonly isOperational: boolean;

    constructor(
        message: string,
        methodName?: string,
        isOperational = true
    ) {
        super(message);
       
        
        if (methodName) methodName = methodName;
        this.isOperational = isOperational;

        Error.captureStackTrace(this);
    }

    toJSON() {
        return {
            message: this.message,
            methodName: this.methodName,
            httpCode: this.httpCode,
            isOperational: this.isOperational,
        };
    }
}


export class BadRequest extends BaseError {
    public readonly message: string;
    public readonly methodName?: string;
    public readonly httpCode: number = HTTP_STATUS.BAD_REQUEST
    public readonly isOperational: boolean;

    constructor(
        message: string,
        methodName?: string,
        isOperational = true
    ) {
        super(message, methodName);

        
        this.message = message;
        if (methodName) this.methodName = methodName;
        this.isOperational = isOperational;

        Error.captureStackTrace(this);
    }
}

export class NotFound extends BaseError {
    public readonly message: string;
    public readonly methodName?: string;
    public readonly httpCode: number = HTTP_STATUS.NOT_FOUND
    public readonly isOperational: boolean;

    constructor(
        message: string,
        methodName?: string,
        isOperational = true
    ) {
        super(message, methodName);

        
        this.message = message;
        if (methodName) this.methodName = methodName;
        this.isOperational = isOperational;

        Error.captureStackTrace(this);
    }
}

export class NotAuthorized extends BaseError {
    public readonly message: string;
    public readonly methodName?: string;
    public readonly httpCode: number = HTTP_STATUS.UNAUTHORIZED
    public readonly isOperational: boolean;

    constructor(
        message: string,
        methodName?: string,
        isOperational = true
    ) {
        super(message, methodName);

        
        this.message = message;
        if (methodName) this.methodName = methodName;
        this.isOperational = isOperational;

        Error.captureStackTrace(this);
    }
}

export class ServerError extends BaseError {
    public readonly message: string;
    public readonly methodName?: string;
    public readonly httpCode: number = HTTP_STATUS.SERVICE_UNAVAILABLE
    public readonly isOperational: boolean;

    constructor(
        message: string,
        methodName?: string,
        isOperational = true
    ) {
        super(message, methodName);

        
        this.message = message;
        if (methodName) this.methodName = methodName;
        this.isOperational = isOperational;

        Error.captureStackTrace(this);
    }
}