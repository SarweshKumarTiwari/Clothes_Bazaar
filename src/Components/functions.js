import axios from 'axios';


export async function authorise(url) {
    try {    
        if (!localStorage.getItem("AuthToken")) {
            return {error:"not found"};
        }
        const auth =await axios.get(`http://localhost:4000/${url}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("AuthToken")}`
            }
        });
        if (!auth.data.error) {
            return {success:auth.data};
        }
        else{
            return {error:auth.data.error};
        }
    } catch (error) {
        return {error:"Server not connected"};
    }
}


export async function authenticate(url,data) {
    const auth = await axios.post(url, data);
    if (!auth.data.error) {
        localStorage.setItem("AuthToken", auth.data.token);
        return true;
    }
    else {
        return {error:auth.data.error};
    }
}


export async function update(url,data){
    if (!localStorage.getItem('AuthToken')) {
        return {error:"not found"};
    }
    const auth=await axios.put(url,data,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('AuthToken')}`
        }
    });
    if (!auth.data.error) {
        return {success:auth.data.success};
    }else{
        return {error:auth.data.error};
    }
}

export async function insert(url,data){
    if (!localStorage.getItem('AuthToken')) {
        return {error:"not found"};
    }
    const auth=await axios.post(`http://localhost:4000/${url}`,data,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('AuthToken')}`
        }
    });
    if (!auth.data.error) {
        return {success:auth.data};
    }else{
        return {error:auth.data.error};
    }
}

export async function deleteitem(url,id){
    if (!localStorage.getItem('AuthToken')) {
        return {error:"not found"};
    }
    const auth=await axios.delete(`http://localhost:4000/${url}`,{
        headers:{
            'Authorization':`Bearer ${localStorage.getItem('AuthToken')}`
        },
        data:id,
    });
    if (!auth.data.error) {
        return {success:auth.data};
    }else{
        return {error:auth.data.error};
    }
}

