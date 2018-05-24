var katzDeli = [];
var num = 0

function takeANumber(line){
  num++
   line.push(num);
  return `Welcome, you are number ${num}`;
  
}


function nowServing(katzDeli){
  if(katzDeli.length == 0 || katzDeli.length == undefined){
    return `There is nobody waiting to be served!`;
  }
  

    var curr = katzDeli.splice(0,1);
    
    return `Currently serving ${curr}.` 
  
  
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  
var arr = [];

for(var i = 0; i < katzDeliLine.length;i++){
  arr.push(` `+ (i+1) + "." + " " + katzDeliLine[i]);
  
} 
  return ("The line is currently:"+ arr);
  
}