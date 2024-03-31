let web = ['emp01','emp02','emp03','admin','emp04','emp05'];

for(let i=0; i<web.length; i++){
    if(web[i]==='admin'){
        console.log(`hello ${web[i]} would you like to check reports?`)
    }
    else{
        console.log(`hello ${web[i]} thank you for login again...`)
    }
}