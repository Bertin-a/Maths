let arr = [1,2,7,7]
let n = arr.length
let medianNumber

 function highestValue(){
    let highestNumber = Math.max(...arr);
    console.log("The highest value is: "+highestNumber);
}
highestValue();

function lowestValue(){
    let lowestNumber = Math.min(...arr)
    console.log("The lowest value is: "+lowestNumber)

}
lowestValue();

function mean(){
    let total=0;
    for(let i=0; i<n; i++){
         total+=arr[i]
 }
 console.log("Mean value is: "+total/n)
 }
mean();
function median(){
    arr.sort()
    let middleOfArray =Math.round(arr.length/2)
    if (n%2==1){
         medianNumber =arr[middleOfArray-1];
         console.log("Median value is: "+medianNumber)
        
    }else{
        medianNumber = arr[middleOfArray]+" "+arr[middleOfArray-1]
        console.log("Median value is: "+medianNumber)
         }
}
   median()
   function mode(){
    let highestCount =0;
    let mode =0;
    let counter =0
    for(let i=0; i<n-1; i++){
        if(i==0){
            mode = arr[i]
             counter =1;
        }
        
        for(let j=1; j<n; j++){
        if(i+1==j){
            continue;
        }
        if(arr[i]==arr[j]){
            counter++
            if(highestCount<counter){
                highestCount=counter
                mode=arr[i]
                console.log("The mode value is: "+mode)
            }
        }

        }
    }
   }
   mode()
