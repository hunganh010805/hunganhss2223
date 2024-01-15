let a = +prompt("Nhập 1 số bất kỳ");
let b = 0;
for(let i = 0; i < a; i++){
    b++;
    if(b*b == a){
        break;
    }
}
if(b*b == a){
    console.log(a + " " + "là số chính phương.");
}else{
    console.log(a + " " + "không phải là số chính phương.");
}