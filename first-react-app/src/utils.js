export function getMoviesByName(name, type) {
  return fetch(
    `http://www.omdbapi.com/?apikey=5cc63a45&s=${name}&type=${type}`
  );
}

export function getMovieById(movieId) {
  return fetch(
    `http://www.omdbapi.com/?apikey=5cc63a45&i=${movieId}`
  );
}

class Person {
  constructor(name) {
    this.name = name;
  }

  talk() {
    console.log(this.name, this);
  }
}

const john = new Person('John');

console.log(john.name);
console.log(john.talk);
