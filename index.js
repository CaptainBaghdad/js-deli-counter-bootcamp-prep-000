var katzDeli = [];

function takeANumber(line,person){
  
  line.push(person);
  return `Welcome, ${person}. You are number ${line.length} in line.`;
  
}


function nowServing(katzDeli){
  if(katzDeli.length == 0 || katzDeli.length == undefined){
    return `There is nobody waiting to be served!`;
  }
  

    var curr = katzDeli.splice(0,1);
    
    return `Currently serving ${curr}.` 
  
  
  nowServing("hello")
  
  
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  
var arr = [];
var coun = 1;
while(coun < katzDeliLine.length){
  for(var i = 0; i < katzDeliLine.length;i++){
  arr.push(` `+coun + "." + " " + katzDeliLine[i]);
  coun++;
}
  
} 
  return ("The line is currently:"+ arr);
  
}