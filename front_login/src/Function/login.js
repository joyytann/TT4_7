/*import axios from 'axios'

//const API_URL = " "
/*const API_HEADERS = {
    'Identity':
    'Token': 

};

const validateLogin = function(userName, password) {
    let USER_NAME = userName;
    return new Promise((resolve,reject) => {

        axios(

            {
                url: `${API_URL}/customers/${USER_NAME}`,
                method: 'get',
                headers: API_HEADERS,

            }
        )
            .then(response => {

                console.log(response.data.password, password);
                if(response.data.password === password){

                    resolve(true);
                }
                else {
                    reject();
                }
            })
            .catch(error => console.error("getting user data error", error));
    })

}
export default validateLogin;
*/