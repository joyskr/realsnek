let a = 0;
let b = 0;
let c = 0;
let d = 0;
let c1 = 0;
let c2 = 0;
let play = () => {
  x = document.getElementById("demo");
  x.innerHTML = 0;
  let y = document.getElementById("demo1");
  y.innerHTML = 0;
  document.getElementById("ca").value = 0;
  document.getElementById("cb").value = 0;
  let data = `a${a}`;
  console.log(data);
  let e = document.getElementsByClassName(data);
  e[0].style.display = "none";
  let data2 = `b${c}`;
  console.log(data2);

  let g = document.getElementsByClassName(data2);
  g[0].style.display = "none";
  a = 0;
  c = 0;
  c1 = 0;
  c2 = 0;
};
let dice1 = () => {
  if (a == 100) {
    alert("P1 Wins yayaya");
    return;
  }
  if (c === 100) return;
  x = document.getElementById("demo");
  x.innerHTML = Math.floor(Math.random() * 6 + 1);
  c1 = c1 + 1;
  document.getElementById("ca").value = c1;

  if (x.innerHTML == 1 || a != 0) {
    a = a + parseInt(x.innerHTML);
    b = b + parseInt(x.innerHTML);
    if (a == 4) {
      a = a + 10;
    }
    if (a == 7) {
      a = a + 30;
    }
    if (a == 8) {
      a = a + 22;
    }
    if (a == 21) {
      a = a + 21;
    }
    if (a == 28) {
      a = a + 54;
    }
    if (a == 32) {
      a = a - 22;
    }
    if (a == 36) {
      a = a - 30;
    }
    if (a == 48) {
      a = a - 22;
    }
    if (a == 50) {
      a = a + 17;
    }
    if (a == 62) {
      a = a - 44;
    }
    if (a == 71) {
      a = a + 21;
    }
    if (a == 80) {
      a = a + 19;
    }
    if (a == 95) {
      a = a - 39;
    }
    if (a == 97) {
      a = a - 19;
    }
    if (a > 100) {
      a = a - x.innerHTML;
      b = b - x.innerHTML;
      if (a == 100) {
        alert("Congratulations! You won");
      }
    }
    //   document.getElementById("roll").value = a;
    // } else {
    //   document.getElementById("roll").value = a;
  }
  let data = `a${a}`;
  console.log(data);
  let e = document.getElementsByClassName(data);
  e[0].style.display = "block";
  let data1 = `a${b - x.innerHTML}`;
  let f = document.getElementsByClassName(data1);
  f[0].style.display = "none";
  b = a;
  return a;
};
let dice2 = () => {
  if (c === 100) {
    alert("P2 Wins");
    return;
  }
  if (a === 100) {
    return;
  }
  y = document.getElementById("demo1");
  y.innerHTML = Math.floor(Math.random() * 6 + 1);
  c2 = c2 + 1;
  document.getElementById("cb").value = c2;

  if (y.innerHTML == 1 || c != 0) {
    c = c + parseInt(y.innerHTML);
    d = d + parseInt(y.innerHTML);
    if (c == 4) {
      c = c + 10;
    }
    if (c == 7) {
      c = c + 30;
    }
    if (c == 8) {
      c = c + 22;
    }
    if (c == 21) {
      c = c + 21;
    }
    if (c == 28) {
      c = c + 54;
    }
    if (c == 32) {
      c = c - 22;
    }
    if (c == 36) {
      c = c - 30;
    }
    if (c == 48) {
      c = c - 22;
    }
    if (c == 50) {
      c = c + 17;
    }
    if (c == 62) {
      c = c - 44;
    }
    if (c == 71) {
      c = c + 21;
    }
    if (c == 80) {
      c = c + 19;
    }
    if (c == 95) {
      c = c - 39;
    }
    if (c == 97) {
      c = c - 19;
    }
    if (c > 100) {
      c = c - y.innerHTML;
      d = d - y.innerHTML;
      if (c == 100) {
        alert("Congratulations! You won");
      }
    }
    //   document.getElementById("roll1").value = c;
    // } else {
    //   document.getElementById("roll1").value = c;
  }
  let data2 = `b${c}`;
  console.log(data2);
  let g = document.getElementsByClassName(data2);
  g[0].style.display = "block";
  let data3 = `b${d - y.innerHTML}`;
  let h = document.getElementsByClassName(data3);
  h[0].style.display = "none";
  d = c;
};

//   let arr = [...Array(100).keys(), 100];
//   arr.shift();
//   console.log("arr", arr);
//   let brr = [...Array(a).keys(), a];
//   brr.shift();

//   function range(start, end) {
//     return Array(end - start + 1)
//       .fill()
//       .map((_, idx) => start + idx);
//   }

//   let crr = range(a - x.innerHTML, a);
//   console.log("range", crr);

//   //   arr.forEach((el) =>
//   //     el !== a
//   //       ? (document.getElementsByClassName(`a${el}`)[0].style.display = "none")
//   //       : (document.getElementsByClassName(`a${a}`)[0].style.display = "block")
//   //   );

//   for (const ax of a === 0 ? [] : crr) {
//     setTimeout(() => {
//       for (const item of arr) {
//         if (item === ax) {
//           setTimeout(() => {
//             document.getElementsByClassName(`a${item}`)[0].style.display =
//               "block";
//           }, 1500);

//           // document.getElementsByClassName(`a${item}`)[0].style.display = "block";
//         } else {
//           setTimeout(() => {
//             document.getElementsByClassName(`a${item}`)[0].style.display =
//               "none";
//           }, 1500);
//         }
//       }
//     }, 5000);
//   }
// }
