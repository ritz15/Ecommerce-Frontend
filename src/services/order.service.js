import axios from "axios";




export const fetchOrder = () => async () => {
    const response = await axios({
        method: "GET",
        url:  '//localhost:8084/api/v3/' + 'addOrders',
        headers: {
            "Content-Type": "application/json",
        }
    });

    return response.data;
};