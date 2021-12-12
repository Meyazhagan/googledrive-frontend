import { useCallback, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { verifyActivation } from "../../API/AuthServices";
import Toastify from "../../components/ToastServices";

function VerifyUser() {
    const { verifyToken } = useParams();

    console.log(verifyToken);

    const history = useHistory();
    const verifyUser = useCallback(() => {
        Toastify(verifyActivation(verifyToken), {
            pending: "Processing User Activation",
            onSuccess: () => {
                history.push("/login");
                return `Successfully Activated The User`;
            },
            onError: (data) => {
                history.push("/login");
                return data?.response?.data?.error || "An Unexpected Error Happended";
            },
        });
    }, [verifyToken, history]);

    useEffect(() => {
        verifyUser();
    }, [verifyUser]);
    return null;
}

export default VerifyUser;
