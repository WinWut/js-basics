const temps=[18,28,35,41,17];
const ecs=[1200,2000,1199,2001];
let hotCount=0;

for(const t of temps){
    console.log(`Temp : ${t}`);
    if(t<18){
        console.log("Too cold")
    }
    else if(t>35){
        console.log("Too hot")
    }
    else{
        console.log("OK")
    }
}

for(const ec of ecs){
    console.log(`EC : ${ec}`);
    if(ec>=1200 && ec<=2000){
        console.log("Print EC OK")
    }
}

for(let i =1;i<11;i++){
    console.log(i);
}

let sum=0;
for(let i=1;i<101;i++){
    sum+=i;
}
console.log(sum);

const readings = [22, 28, 36, 41, 30];
let maxn=readings[0];

for(const i of readings){
    if(i>maxn){
        maxn=i;
    }
}
console.log(maxn);

for(let i=1;i<31;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}