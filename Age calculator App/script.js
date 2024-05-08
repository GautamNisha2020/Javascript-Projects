let userInput = document.getElementById("date");
userInput.max=new Date().toISOString().split("T")[0];//show only current month date
let result = document.getElementById("result"); //show result in p tag

function calculateAge(){
    let birthDate = new Date(userInput.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;//month is started from zero like 0=january,1=feburary,so we write +1 taki ab 1=january ho mtln ab zero se start na ho 1 se ho
    let y1 = birthDate.getFullYear();

let today =new Date();

let d2=today.getDate();
let m2=today.getMonth() + 1;
let y2=today.getFullYear();

let d3,m3,y3; //difference in days,months,year
   y3 = y2 - y1;
 //calculating months difference
 if(m2>=m1){
    m3 = m2-m1;
 }else{
    y3--;//decrease the value of year
    m3 = 12 + m2 - m1;//12 months added here
 }

 //calculating day difference
 if(d2 >= d1){
    d3 = d2-d1;
 }
 else
 {
 m3--;
 d3= getDaysInMonth(y1,m1) + d2 - d1;
 }
 //months get negeative
if(m3 < 0){
    m3 =11;
    y3--;
}
result.innerHTML = `you are <span>${y3}</span> years , <span>${m3}</span> months and <span>${d3}</span> -days old` ;
}
function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();//it will return last day of that month.,,.no.of days thet month. 
}

