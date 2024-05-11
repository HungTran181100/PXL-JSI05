//undefined, null
//let, const, var (scope)
// var a = null;
// console.log(a);

//object (Thiên), array (Khôi)

// let b = [1, 2, 3, 4]; // c = [1, 4, 9, 16]
// let c = [];
// for (let i = 0; i < b.length; i++) {
//   c[i] = b[i] ** 2;
// }
// console.log(c);
// console.log(b);
// b.push(5);
// console.log(b);
// b[0] = "1";
// console.log(b);
// b.splice(4, 1);
// console.log(b);

// const d = {
//   name: "Thien",
//   age: 15,
//   class: "10",
// };

// // console.log(d.name);
// d.name = "Khoi";
// console.log(d);
// d.address = "123";
// console.log(d);
//json file

//Tạo một arrow function, truyền vào 2 thông số chiều dài và rộng
//Gọi hàm in ra diện tích HCN

// const dienTich = (a, b) => {
//   return a * b;
// };

// console.log(dienTich(3, 4));

// let arr1 = [1, 2, 3, 4];
// let arr2 = [1, "2", 3, "4"];
// // let arr3 = [4, 5, 6, 7];
// // let arr2 = [...arr1, ...arr3];
// // console.log(arr2);
// // arr2.push(5);
// // console.log(arr);
// // console.log(arr2);
// let arr3 = arr1.map((item) => {
//   return item ** 2;
// });
// console.log(arr3);

// let arr4 = arr2.filter((item) => {
//   return typeof item == "number";
// });
// console.log(arr4);

//Nhập vào số tuổi của học sinh,
//rồi in ra tên của những học sinh có độ tuổi mình nhập vàp
// let student = [
//   {
//     name: "Thien",
//     age: 15,
//   },
//   {
//     name: "Khoi",
//     age: 15,
//   },
//   {
//     name: "Long",
//     age: 15,
//   },
//   {
//     name: "hung",
//     age: 18,
//   },
// ];

// let number = Number(prompt("Hãy nhập vào số tuổi của học sinh: "));
// console.log(number);

// let filterAge = student.filter((item) => {
//   return item.age == number;
// });
// console.log(filterAge);

// filterAge.forEach((item) => {
//   console.log(item.name);
// });
let content = document.querySelector(".content");

const url = "https://6636375e415f4e1a5e26a7bc.mockapi.io/student";

getData();

async function getData() {
  const response = await fetch(url);
  console.log(response);
  if (response.ok) {
    const data = await response.json();
    renderData(data);
  }
}

function renderData(data) {
  data.forEach((i) => {
    content.innerHTML += `
            <h1>${i.Name}</h1>
            <h2>${i.Image}</h1>
            <h3>${i.Age}</h1>
            <h4>${i.id}</h1>
        `;
  });
}
