function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return 'This one is on me!';
  } else if (ride < 2000) {
    return 'That will be twenty bucks.';
  } else if (ride <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}


function ternaryCheckCity(city){
  // Write your code here!
  if  (city === 'NYC'){
    return "Ok, sounds good."
}
else {
  return "No go."
}
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === 'generous'){
    return "Thank you so much."
  }
  else if (tip === 'not as generous'){
    return "Thank you."
  }
  else{
    return "Bye."
  }
}

console.log(scuberGreetingForFeet(2600));
console.log(switchOnCharmFromTip('normal'));
