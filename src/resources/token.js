import server from "../axios";

//auth
const createToken = (data)=>{
    return server({
        url: `/token`,
        method: 'post',
        data: {password: data.password},
        params: {
            username: data.username
        }
    });
}

const revokeToken = (token)=>{
    return server({
        url: `/token`,
        method: 'delete',
        headers: {Authorization: `Bearer ${token}`}
    });
}

export const token = {
    createToken,
    revokeToken
};