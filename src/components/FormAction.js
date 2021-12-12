import React from "react";

import classNames from "classnames";

function FormAction(props) {
    const { formik, action, secondary } = props;
    return (
        <div className="flex gap-2 sm:flex-row-reverse flex-col mt-15">
            <button
                type="submit"
                onClick={formik.handleSubmit}
                disabled={!formik.isValid}
                className={classNames(
                    `bg-blue-600 text-white w-full p-2 
                    rounded-lg focus:bg-blue-700 hover:bg-blue-700
                    capitalize`,
                    { "cursor-not-allowed opacity-75": !formik.isValid }
                )}>
                {action}
            </button>
            <button
                type="submit"
                onClick={formik.handleReset}
                className={classNames(
                    `bg-red-600 text-white w-full p-2 
                    rounded-lg focus:bg-red-700 hover:bg-red-700
                    capitalize`
                )}>
                {secondary}
            </button>
        </div>
    );
}

export default FormAction;
