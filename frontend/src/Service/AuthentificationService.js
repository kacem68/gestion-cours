import axios from 'axios'
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const pass='';
 class AutheftificationService {
     
    registerSuccessfulLogin(username, password) {
            console.log(password)
            sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
            sessionStorage.setItem(pass,password)
    }
    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
    createBasicAuthToken() {
        return 'Basic ' + window.btoa(sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME) + ":" + sessionStorage.getItem(pass))
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }
    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }
    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);        
    }

}
export default new AutheftificationService();