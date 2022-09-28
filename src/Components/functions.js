import axios from 'axios';

export async function authorise() {
    if (!localStorage.getItem("AuthToken")) {
        return false;
    }
    const auth =await axios.get("http://localhost:4000/authorise", {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("AuthToken")}`
        }
    })
    if (!auth.data.error) {
        return true;
    }
    else{
        return false;
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