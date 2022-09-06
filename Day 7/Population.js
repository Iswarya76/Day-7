//Get all the countries with a population of less than 2 lakhs using Filter function
let xhr1=new XMLHttpRequest()
xhr1.open("GET","https://restcountries.com/v2/all")
xhr1.onload=function(){
if(xhr1.status>=200 && xhr1.status<300){
    let data=JSON.parse(this.response)
    let countr_name=data.filter((ele)=>{
        return Number(ele.population)<200000
    })
    console.log(countr_name)
}
else{
    console.log("No country")
}
};
xhr1.send();