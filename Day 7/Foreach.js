//Print the following details name, capital, flag using forEach function
let xhr2=new XMLHttpRequest()
xhr2.open('GET','https://restcountries.com/v2/all')
xhr2.onload=function(){
    if(xhr2.status>=200 && xhr2.status<300){
        let data=JSON.parse(this.response)
        data.forEach((ele) => {
            console.log(`
            Country: ${ele.name}
            Capital: ${ele.capital}
            Flag : ${ele.flag }
            `)
        });
    }
    else{
        console.log("Error")
    }
};
xhr2.send();
