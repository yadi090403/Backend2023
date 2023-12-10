const persiapan = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("persiapan...");
        }, 3000);
    });
}
const rebusair = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("rebusair");
        }, 7000);
    });
}
const masak = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("meamsak mei");
        }, 5000);
    });
};

// consuming promise
const main = () => {
    persiapan()
    . then((res) =>{
        console.log(res);
        return("rebus ais");
    })
    . then((res) =>{
        console.log(res);
        return("memasak mei");
    })
    . then((res) =>{
        console.log(res);
    })

};
main();