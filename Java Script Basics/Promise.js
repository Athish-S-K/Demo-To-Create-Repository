function a()
{
    return new Promise((good,bad)=>{
        let aP = true;
        if(aP)
            good("Present");
        else
            bad("Absent");
    })
}
a().then(output=>console.log(output))
   .catch(output=>console.error(output));