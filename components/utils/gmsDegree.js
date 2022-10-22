export function getDMS(deg) {
    let d = Math.floor(deg);
    let minfloat = (deg - d) * 60;
    let m = Math.floor(minfloat);
    let secfloat = (minfloat - m) * 60;
    let s = Math.round(secfloat);
    if (s === 60) {
        m++;
        s = 0;
    }
    if (m === 60) {
        d++;
        m = 0;
    }
    return (padZero(d) + "°" + padZero(m) + "′"+padZero(s)+"′′");
}

function padZero(n){
    return (n<10)?"0"+n:n;
}