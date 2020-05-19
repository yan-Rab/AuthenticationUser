export const authUser = () => {
    if(localStorage.getItem("tokenUser")){
        return true
    }

    return false;
}