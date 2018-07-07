const LOGIN = 'LOGIN';
const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGOUT = 'LOGOUT';
const LOGOUT_SUCCEEDED = 'LOGOUT_SUCCEEDED';
const LOGOUT_FAILED = 'LOGOUT_FAILED';

const login = (username, password)=>{
    return{
        type: LOGIN,
        username,
        password
    }
}

const loginSucceeded = (data)=>{
    return{
        type: LOGIN_SUCCEEDED,
        data
    }
}

const loginFailed = (error)=>{
    return{
        type: LOGIN_FAILED,
        error
    }
}

const logout = ()=>{
    return{
        type: LOGOUT
    }
}

const logoutSucceeded = (data)=>{
    return{
        type: LOGOUT_SUCCEEDED,
        data
    }
}

const logoutFailed = (error)=>{
    return{
        type: LOGOUT_FAILED,
        error
    }
}

export {
    LOGIN,
    LOGIN_SUCCEEDED,
    LOGIN_FAILED,
    LOGOUT,
    LOGOUT_FAILED,
    LOGOUT_SUCCEEDED,
    login,
    loginSucceeded,
    loginFailed,
    logout,
    logoutFailed,
    logoutSucceeded
};