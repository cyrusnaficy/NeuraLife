import axios from 'axios';

import { getItem } from "../Helpers/secureStore";

export const sendChat = async (message) => {

    let returnVal = {
        status: false,
        message: ""
    };

    try {

        const response = await axios({
            method: 'POST',
            url: 'https://<Retracted>/api/chat/sendMessage',
            data: {
                "userID": await getItem("userID"),
                "message": message
            }
        })

        if(response.status == 200) {
            returnVal.status = true;
            returnVal.message = response.data.message;
        }

    } catch (err) {
        console.log(err);
    }

    return returnVal;

}