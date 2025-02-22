function FetchUserData(userType){
    return new Promise((resolve,reject)=>{
        console.log(`fetch setting for user type:${userType}`);
        const Settings=userType==='premium'
        ?{theme:'dark', notification :'true',accesslevel :'high'}
        :{theme:'light',notification:'false',accesslevel:'low'};
        resolve(Settings);
    });
}
FetchUserData(1)
.then(user=> fetchUserSettings(user.Type))
.then(details=>{console.log(details)})
.catch(error=>{console.log(error)})