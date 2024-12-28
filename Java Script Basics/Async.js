function a()
{
    return new Promise((good,bad)=>{
        let aP = 1;
        if(aP)
            good("Present");
        else
            bad("Absent");
    })
}

function l()
{
    return new Promise((good,bad)=>{
        let lP = 1;
        if(lP)
            good("Lunch Completed");
        else
            bad("Lunch Not Completed");
    })
}

function h()
{
    return new Promise((good,bad)=>{
        let hP = 1;
        if(hP)
            good("Bus Stand Reached");
        else
            bad("Bus Stand Not Reached");
    })
}
async function final()
{
    try
    {
        let a1 = await a();
        console.log(a1);

        let l1 = await l();
        console.log(l1);

        let h1 = await h();
        console.log(h1);
    }
    catch(error)
    {
        console.error(error);
    }
}
final();