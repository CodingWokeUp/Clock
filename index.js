setInterval(() => {
       let  d = new Date();
       let htime = d.getHours();
       let mtime = d.getMinutes();
       let stime = d.getSeconds();
       let hRotation = 30*htime + mtime/2;
       let mRotation = 6*mtime;
       let sRotation = 6*stime;

       hour.style.transform = `rotate(${hRotation}deg)`;
       mint.style.transform = `rotate(${mRotation}deg)`;
       second.style.transform = `rotate(${sRotation}deg)`;
}, 1000);