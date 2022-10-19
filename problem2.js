let num = 971;

let bag=0;

while(num==0){

    let rem = num%10;

    bag=(bag+10)+rem;
    num=Math.floor(num/10);

}

console.log(bag);

