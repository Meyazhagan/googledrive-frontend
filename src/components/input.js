import classNames from "classnames";
import React from "react";

function Input(props) {
    const { type, label, placeholder, field, formik, ...rest } = props;
    const error = formik.touched[field] && formik.errors[field];
    return (
        <div className="mb-10">
            <div
                className={classNames("flex flex-col relative text-gray-500 ", {
                    "focus-within:text-red-600": error,
                    "focus-within:text-blue-600": !error,
                })}>
                <label
                    className={classNames(
                        `absolute transition
                        text-sm  bg-white -top-2 left-3 px-2 select-none`,
                        {
                            "opacity-0": !(label && formik.values[field]),
                            "opacity-100": label && formik.values[field],
                        }
                    )}
                    htmlFor={field}>
                    {label}
                </label>
                <input
                    type={type || "text"}
                    id={field}
                    className="rounded-lg flex-1 text-sm
                    appearance-none border border-gray-400 
                    w-full py-3 px-4 bg-white text-gray-700 
                    placeholder-gray-400 shadow-sm 
                    focus:outline-none focus:border-blue-700"
                    name={field}
                    placeholder={placeholder}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[field]}
                    {...rest}
                />
                <p className="absolute -bottom-5 text-sm text-red-500">{error}</p>
            </div>
        </div>
    );
}

export default Input;
