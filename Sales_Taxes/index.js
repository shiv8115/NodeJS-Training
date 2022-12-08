const input1= [
    "1 book at 12.49",
    "1 music CD at 14.99",
    "1 chocolate bar at 0.85"
];

const input2= [
    "1 imported box of chocolates at 10.00",
    "1 imported bottle of perfume at 47.50"
];

const input3=[
  "1 imported bottle of perfume at 27.99",
  "1 bottle of perfume at 18.99",
  "1 packet of headache pills at 9.75",
  "1 box of imported chocolates at 11.25"
];


function ProcessInput(input){
    let total=0;
    let salesTaxes=0;
    console.log("Input:");
    for(let i=0; i<input.length; i++){
        console.log(input[i]);
    }
    console.log("Output:");
    for(let i=0;i<input.length;i++){
        let imported=0;
        let isFoodOrBook=0;
        let output="";
        let arr= input[i].split(" ");
        let actualPrice;
        for(let i=0;i<arr.length; i++){
            if(i< (arr.length-2)){
                output+=(arr[i]);
                output+=" ";
            }
            if(i== arr.length-1){
                actualPrice= parseFloat(arr[i]);
            }
            if(arr[i]=="imported"){
                imported=1;
            }
            if(arr[i]=="chocolate" || arr[i]=="book") {
                isFoodOrBook=1;
            }
        }
        if(imported===0 && isFoodOrBook===1){
            console.log(output + " : " + actualPrice);
            total+=actualPrice;
        }
        else if(isFoodOrBook===0 && imported===0){
            let extra= (actualPrice* 10)/100;
            salesTaxes+=extra;
            actualPrice+=extra;
            total+= actualPrice;
            console.log(output + " : " + actualPrice);
        }
        else if(isFoodOrBook===0 && imported===1){
            let extra= (actualPrice* 10)/100;
            salesTaxes+=extra;
            let doubleExtra= (actualPrice* 5)/100;
            actualPrice+=extra;
            actualPrice+= doubleExtra;
            total+= actualPrice;
            console.log(output + " : " + actualPrice);
        }
        else if(isFoodOrBook===1 && imported===1){
            let extra= (actualPrice*5)/100;
            actualPrice+= extra;
            total+=actualPrice;
            console.log(output + " : "+ actualPrice);
        }
    }
    console.log("Sales tax : " ,salesTaxes);
    console.log("Total : " ,total);
}

ProcessInput(input1);
console.log("---------------------------------------------------------------------------------------------");

ProcessInput(input2);
console.log("----------------------------------------------------------------------------------------------");

ProcessInput(input3);
console.log("----------------------------------------------------------------------------------------------");