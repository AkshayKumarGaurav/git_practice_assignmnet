let count="";
let n = 13;
for(let i=1;i<n;i++){
    if(n%i==0){
        count++;
    }
}
if(count==1){
    console.log(n,"is a prime number");
}else{
    console.log(n,"is not a prime number");
}