var a = 15;
if(a%3==0 && a%5!=0)
    console.log("By 3");
else if(a%3!=0 && a%5==0)
    console.log("By 5");
else if(a%3==0 && a%5==0)
    console.log("By 3 and 5");
else if(a%3!=0 && a%5!=0)
    console.log("Nothing");