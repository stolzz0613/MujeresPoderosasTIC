import axios from 'axios';

const login = ( email, password ) => {
    return axios.post('https://nameless-brushlands-25377.herokuapp.com/api/auth/', {
        email: email,
        password: password
    })
}

export default login;