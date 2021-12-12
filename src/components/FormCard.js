import classNames from "classnames";
import React from "react";

function FormCard({ children, title, titleColor }) {
    return (
        <div className="m-5 relative shadow-lg p-5 rounded-lg w-10/12 sm:max-w-md">
            {title && (
                <p
                    className={classNames(
                        `text-2xl text-center uppercase 
                        shadow-lg rounded-2xl px-3 py-3 sm:py-6
                        text-white
                        absolute -top-5 left-10 right-10`,
                        {
                            [titleColor]: true,
                        }
                    )}>
                    {title}
                </p>
            )}
            {children}
        </div>
    );
}

export default FormCard;
