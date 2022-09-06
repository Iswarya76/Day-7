//Print the total population of countries using reduce function
let xhr3=new XMLHttpRequest()
xhr3.open("GET","https://restcountries.com/v2/all")
xhr3.onload=function(){
    if(xhr3.status>=200 && xhr3.status<300){
        let data=JSON.parse(this.response)
        let sum=0
        let totalpopulation=data.reduce(function(pre,curr){
            return pre+curr.population
        },0)
        console.log(`Total population: ${totalpopulation}`)
    }
    else{
        console.log("Error")
    }
};
xhr3.send();