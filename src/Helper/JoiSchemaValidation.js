import Joi from "joi-browser";

const type = {
    USER: "USER",
    UPDATE_USER: "UPDATE_USER",
    LOGIN: "LOGIN",
    PASSWORD: "PASSWORD",
    EMAIL: "EMAIL",
    FOLDER: "FOLDER",
};

const schema = {
    LOGIN: Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password"),
    }),

    USER: Joi.object({
        firstName: Joi.string().max(50).required().label("First Name"),
        lastName: Joi.string().max(50).required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password"),
        conformPassword: Joi.string(),
        address: {
            street: Joi.string().label("Street"),
            city: Joi.string().label("City"),
            state: Joi.string().label("State"),
            zip: Joi.string().label("ZIP"),
        },
    }),
    UPDATE_USER: Joi.object({
        firstName: Joi.string().max(50).label("First Name"),
        lastName: Joi.string().max(50).label("Last Name"),
        address: {
            street: Joi.string().label("Street"),
            city: Joi.string().label("City"),
            state: Joi.string().label("State"),
            zip: Joi.string().label("ZIP"),
        },
    }),

    PASSWORD: Joi.object({
        password: Joi.string().min(5).max(50).required().label("Password"),
        conformPassword: Joi.ref("password"),
    }),

    EMAIL: Joi.object({
        email: Joi.string().email().required().label("Email"),
    }),

    FOLDER: Joi.object({
        folderName: Joi.string().max(255).required().label("Folder Name"),
    }),
    FILE: Joi.object({
        fileName: Joi.string().max(255).required().label("File Name"),
    }),
};

const validate = (value, type) => {
    const option = { abortEarly: false };

    const { error } = schema[type].validate(value, option);

    if (error) {
        const errors = error.details.reduce((acc, { path, message }) => {
            return { ...acc, [path.join("-")]: message };
        }, {});

        return errors;
    }
    return {};
};

export { type, validate };
