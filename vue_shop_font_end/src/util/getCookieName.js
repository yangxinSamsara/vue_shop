const getCookieName= function(name){
    let cookie=document.cookie;
    // userName=admin; userId=100000077
    let cookieArr=cookie.replace(/\s+/g,'').split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        const element1 = cookieArr[i].split("=")[0];
        const element2 = cookieArr[i].split("=")[1];
        if(name==element1){
            return element2
        }
    }
};

export default getCookieName;