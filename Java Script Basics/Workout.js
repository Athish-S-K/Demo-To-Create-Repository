function process(callback,filename)
{
    setTimeout(()=>{
        console.log(filename+" file is being processed");
        callback();
    },1500)
}

function download()
{
    
        console.log("file is being downloaded");
        
}

process(download,"HTML Frontend Program")