const persiapan = () => {
    console.log("persiapan....");
}

const rebusair = () => {
    console.log("rebus air");
}
const masak = () => {
    console.log("memasak mei");
    console.log("seleai");
}


const main = () => {
    setTimeout(() =>{
        persiapan();
        setTimeout(() =>{
            rebusair();
            setTimeout(() =>{
                masak();
            }, 5000);
        }, 7000);
    }, 3000);
}

main();