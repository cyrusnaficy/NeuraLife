import axios from 'axios';
import { getItem } from "../Helpers/secureStore";

export const clearChats = async () => {

    let returnVal = false;

    try {

        const response = await axios({
            method: 'POST',
            url: 'https://<Retracted>/api/chat/deleteMessages',
            data: {
                "userID": await getItem("userID")
            }
        })

        if(response.status == 200) {
            returnVal = true;
        }

    } catch (err) {
        console.log(err);
    }

    return returnVal;

}