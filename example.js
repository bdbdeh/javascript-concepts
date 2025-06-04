async function tet() {
  for (let i = 0; i < 4; i++) {
    const ans = await new Promise((r) => {
      console.log("inside promise ");
      for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
          console.log(i);
        }, 2000);
      }
    });
  }

  console.log("test", 4994);
}
// tet();

// console.log("tes333333333t", 4994666);

// OOPs

class Person {
  greet() {
    console.log("Hello!");
  }
}

class Student extends Person {
  greet() {
    console.log("Hey, what's up?");
  }
}

class Teacher extends Person {
  greet() {
    console.log("Good morning, class.");
  }
}

function sayHello(someone) {
  someone.greet();
}

const people = [new Person(), new Student(), new Teacher()];

people.forEach(sayHello);
