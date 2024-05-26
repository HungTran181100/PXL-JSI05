// //OOP
// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   hello() {
//     console.log(`${this.name} say hello`);
//   }
//   add(a, b) {
//     console.log(
//       `${this.name} dang thuc hien phep toan cong  ${a} va ${b} bang `,
//       a + b
//     );
//   }
// }

// class Student extends Human {
//   constructor(name, age, classRoom) {
//     super(name, age);
//     this.classroom = classRoom;
//   }

//   run() {
//     console.log(`${this.name} dang chay`);
//   }
// }
// // let Thien = new Human("Thien", 15);
// // let Long = new Human("Long", 15);
// // let Khoi = new Human("Khoi", 15);
// let Thien = new Student("Thien", 15, 4);
// Thien.run();

// // Thien.hello();
// // Thien.add(1, 2);
// // console.log(Long);
// // console.log(Khoi);

// class Button {
//   constructor(text, Bgcolor) {
//     this.text = text;
//     this.Bgcolor = Bgcolor;
//   }

//   render() {
//     return `<button style="background-color: ${this.Bgcolor}">${this.text}</button>`;
//   }
// }

// let btnClickMe = new Button("Click", "red");
// let btnShow = new Button("Show", "green");

// document.body.innerHTML += btnClickMe.render();
// document.body.innerHTML = btnShow.render();

// class Form {
//   constructor(name, btnType, userType, passType) {
//     this.name = name;
//     this.btnType = btnType;
//     this.userType = userType;
//     this.passType = passType;
//   }
//   render() {
//     return `
//     <div class="container">
//     <form class="row w-50 mt-5 mx-auto" id="login">
//       <h2 class="text-center">${this.name}</h2>
//       <div class="col-md-12">
//         <label for="exampleInputUser" class="form-label">Username</label>
//         <input type="${this.userType}" class="form-control" id="userName" />
//         <div id="userWrong" class="form-text"></div>
//       </div>
//       <div class="col-md-12">
//         <label for="pw" class="form-label">Password</label>
//         <input type="${this.passType}" class="form-control" id="pw" />
//       </div>
//       <div id="emailHelp" class="form-text"></div>
//       <div class="col-md-2 mt-3">
//         <button type="${this.btnType}" class="btn btn-primary">Submit</button>
//       </div>
//     </form>
//   </div>
//     `;
//   }
// }

// let loginForm = new Form("Login", "submit", "text", "text");
// let register = new Form("Register", "submit", "text", "text");
// document.body.innerHTML += loginForm.render();
// document.body.innerHTML += register.render();
