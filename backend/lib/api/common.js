import logger from '../logger';

class ExtendableError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.code = null;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

export class NotFoundError extends ExtendableError {
    constructor(message) {
        super(message);
        this.code = 404;
    }
}


function transformSequelizeError(err) {
    let errors = {};
    if (Array.isArray(err.errors)) {
        for (const {
                path,
                message,
                type
            } of err.errors) {
            errors[path] = type === 'notNull Violation' ? 'Required.' : message;
        }
    } else {
        errors = err.errors;
    }
    return errors;
}

export function handleError(req, res, err) {
    //handle validation error
    if (err && err.name === 'SequelizeValidationError') {
        return res.status(422).json({
            errors: transformSequelizeError(err)
        });
    }

    if (err.code && err.code === 404) {
        return res.status(404).json({});
    }

    logger.error('Unexpected error', err);

    return res.status(500).json({
        errors: {
            _error: 'Unexpected error.'
        }
    });
}
