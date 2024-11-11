function person() {
    console.log ("hallo")

    const userName ="B";
    const userAge = 18;
    let isOnline = true;
    
    //userName="Julius";
    //userAge =29;
    isOnline= false;
    
    console.log(userName,userAge,isOnline);
}

person();

const viewpersoninfo =document. querySelector("#viewpersoninfo");
console.log(viewpersoninfo);

viewpersoninfo.addEventListener("click", person);




//simpleCalculator(3,4);

const viewcalculation =document. querySelector("#viewcalculation");
console.log(viewcalculation);

//viewcalculation.addEventListener("click", simplecalculator(3,4));

/*viewcalculation.addEventListener("click", function simpleCalculator(num1,num2) {
    const sum = num1 + num2;
    
    console.log(sum);
    //simplecalculator(3,4)
    
})*/

viewcalculation.addEventListener("click", function () {
    simplecalculator (3,4)
});

