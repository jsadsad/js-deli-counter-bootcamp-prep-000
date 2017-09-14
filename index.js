var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ' + name  + '. You are number ' + katzDeliLine.length + ' in line.';
}

function nowServing(person) {
  if (person.length === 0) {
    return 'There is nobody waiting to be served';
  } else {
    current = person[0];
    person.splice(0, 1);
    return 'Currently serving ' + current + '.';
  }
}
