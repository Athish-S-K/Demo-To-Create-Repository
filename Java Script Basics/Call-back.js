function a(callback)
{
    setTimeout(()=>{
        console.log("Attendance Present");
        callback();
    },1500)
}

function l(callback)
{
    setTimeout(()=>{
        console.log("Lunch");
        callback();
    },1500)
}

function g(callback)
{
    setTimeout(()=>{
        console.log("Broarding Bus");
        callback();
    },1500)
}

a(()=>{
    l(()=>{
        g(()=>{setTimeout(()=>{
            console.log("Day ended");},1500)
        })
    })
})
