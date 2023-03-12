import axios from 'axios';

import { getItem } from "../Helpers/secureStore";

export const getChats = async () => {

    let returnVal = {
        status: false,
        data: []
    };

    try {

        const response = await axios({
            method: 'POST',
            url: 'https://<Retracted>/api/chat/getMessages',
            data: {
                "userID": await getItem("userID")
            }
        })

        if(response.status == 200) {
            returnVal.status = true;
            returnVal.data = response.data.data;
        }

    } catch (err) {
        console.log(err);
    }

    return returnVal;

}