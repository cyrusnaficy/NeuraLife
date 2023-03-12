import axios from 'axios';

export const signUp = async (jsonBody) => {

    let returnVal = {
        status: false,
        userID: ""
    };

    try {

        const response = await axios({
            method: 'POST',
            url: 'https://<Retracted>/api/users/loginHandler',
            data: jsonBody
        })

        if(response.status == 200) {
            returnVal.status = true;
            returnVal.userID = response.data.data.userID;
        }

    } catch (err) {
        console.log(err);
    }

    return returnVal;

}