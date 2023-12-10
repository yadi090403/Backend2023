const persiapan = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("persiapan...");
        }, 1000);
    });
}
const rebusair = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("rebusair");
        }, 1000);
    });
}
const masak = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const selesai = "masak air"
            const selesai2 = "selesai2"
            resolve(selesai,selesai2);
            
        }, 1000);
    });
};

// consuming await
const main = async () => {
    console.log(await persiapan());
    console.log(await rebusair());
    console.log(await masak());
};

main();