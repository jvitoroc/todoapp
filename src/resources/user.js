import server from "../axios";
import {createResource} from "../utils";

const createUser = (data)=>{
    return server({
        url: `user`,
        method: 'post',
        data: createResource(data)
    });
}

export const user = {
    createUser
};