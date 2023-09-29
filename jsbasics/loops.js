function one() {
  for (let i = 0; i <= 10; i += 2) {
    console.log(i); // 0 2 4 6 8 10
  }
}

function two() {
  for (let i = 10; i >= 1; i -= 1) {
    console.log(i);
  }
  console.log('Launch!');
}

function three() {
  let greeting = 'Aloha!';
  for (let i = 0; i < 3; i++) {
    console.log(greeting);
  }
}

function four() {
  for (let i = 1; i <= 100; i++) {
    console.log(i * 2);
  }
}

function five() {
  let array = [1, 2, 3, 4];
  let index = 0;
  while (index < array.length) {
    console.log(array[index]);
    index++;
  }
}

function six() {
  let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
  for (let i = 0; i < cities.length; i++) {
    if (cities[i] === null) {
      continue;
    }
    
    console.log(cities[i].length);
    
  }
}

function seven() {
  for (let i = 0; i < 1; i += 1) {
    console.log("and on");
  }
}

function eight() {
  let i = 1;
  while (i < 41) {
    if (i % 2 === 1) {
      console.log(i);
    }
    i++;
  }
}

function nine() {
  let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
  for (let i = 0; i < fish.length; i++) {
    console.log(fish[i]);
    if (fish[i] === 'Nemo') {
      break;
    }
    
  }
}

function ten() {
  //The first loop never runs
  //The second loop runs one time
  return;
}