function red(){
    this.style.color="red"
    this.style.textAlign = "center"
}
function nochange(){
    this.setAttribute("style","")
}
function size(){
    this.style.fontSize="50px"
}
function bluewhite(){
    this.style.backgroundColor="blue";
    this.style.color="white";   
}
const a = document.getElementsByClassName("blue-white");
for(let i=0; i<a.length;i++){
    a[i].addEventListener("mouseover",bluewhite);
    a[i].addEventListener("mouseout",nochange);
} 
document.getElementById("root").addEventListener("mouseover",red);
document.getElementById("root").addEventListener("mouseout",nochange);
document.getElementsByTagName("p")[0].addEventListener("mouseover",size);
document.getElementsByTagName("p")[0].addEventListener("mouseout",nochange); 

function find(arr,b){
for(var i=0;i<arr.length;i++){
if(arr[i]==b){
  return i
}

}
return -1
}
var r=find([2,4,6,8],9)
console.log(r)
