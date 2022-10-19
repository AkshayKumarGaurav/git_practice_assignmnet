let count=0;
let n = 13;
for(let i=1;i<=n;i++){
    if(n%i==0){
        count++;
    }
}
if(count==2){
    console.log(n,"is a prime number");
}else{
    console.log(n,"is not a prime number");
}