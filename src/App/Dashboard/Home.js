import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { getToken } from "../../API/AuthServices";
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();
    useEffect(
        () => {
            try {
                const token = getToken();
                const payload = jwt_decode(token);
                history.push(`/folder/${payload.rootFolder}`);
            } catch (err) {
                history.push("/login");
            }
        },
        // eslint-disable-next-line
        []
    );
    return null;
}

export default Home;
