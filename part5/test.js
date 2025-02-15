// console.log(new Date());

function timeMess(minutes){
    const now = new Date();
    const yourDate = new Date(minutes);
    const second = Math.floor((now.getTime() - yourDate.getTime()) / 1000);
    if(second < 0){
        console.log("sai");
        return;
    }

    let timer = second / 31536000;
    if(timer > 1){
        console.log(`${Math.floor(timer)} nam truoc`);
        return;
    }

    timer = second / 2678400;
    if(timer > 1){
        console.log(`${Math.floor(timer)} thang truoc`);
        return;
    }

    timer = second / 604800;
    if(timer > 1){
        console.log(`${Math.floor(timer)} tuan truoc`);
        return;
    }

    timer = second / 86400;
    if(timer > 1){
        console.log(`${Math.floor(timer)} ngay truoc`);
        return;
    }

    timer = second / 3600;
    if(timer > 1){
        console.log(`${Math.floor(timer)} gio truoc`);
        return;
    }

    timer = second / 60
    if(timer > 1){
        console.log(`${Math.floor(timer)} phut truoc`);
        return;
    }

    timer = second;
    if(timer > 1){
        console.log(`${Math.floor(timer)} giay truoc`);
        return;
    }
    console.log("Dang hoat dong");
}
timeMess("Sat Jan 25 2025 10:12:00 GMT+0700 (Vietnam Time)");