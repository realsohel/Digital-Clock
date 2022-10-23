
function dayname(){
    let d = new Date();

    let n ="";

    switch (d.getDay()) {
        case 0:
            n="Sunday";
            break;
        case 1:
            n="Monday";
            break;
        case 2:
            n="Tuesday";
            break;
        case 3:
            n="Wednesday";
            break;
        case 4:
            n="Thursday";
            break;
        case 5:
            n="Friday";
            break;
        case 6:
            n="Saturday";
            break;
    
        default:
            break;
    }

    return n;

}

function time(){
    let n = new Date();
    console.log(n);

    let hr = n.getHours();
    console.log(hr);

    let min = n.getMinutes();
    console.log(min);

    
    let sec = n.getSeconds();
    console.log(sec);
    
    let dayt = dayname();
    console.log(dayt);

        if(hr == 0){
            hr = 12;
        }
        if(hr >= 12){
            hr = hr - 12;
            session = "PM";
        }

        hr = (hr < 10) ? "0" + hr : hr;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
    
    document.getElementById('dateday').innerText=`It's ${dayt} ${n.getDate()}.${n.getMonth()}.${n.getFullYear()}`;
    document.getElementById('hour').innerHTML=hr;
    document.getElementById('minute').innerHTML=min;
    document.getElementById('seconds').innerText=sec;
    document.getElementById('session').innerText=session;
    
    let t = setTimeout(function(){ time() }, 1000);
    }

time();