window.onload = function() {
  var num1 = document.getElementById('display1');
  var num2 = document.getElementById('display2');
  var num3 = document.getElementById('display3');
  var num4 = document.getElementById('display4');
  var num5 = document.getElementById('display5');

  var ops = document.querySelectorAll('.ops');
  var button = document.querySelectorAll('.number');
  var equals = document.getElementById('total');
  var clear = document.getElementById('.');
  var memory1 = '';
  var memory2 = '';

function startmemory1() {
  for (i=0; i<button.length; i++) {
      button[i].onclick = function() {
      if (num1.innerHTML === '') {
        memory1 = '';
        memory1 = this.id;
        num1.innerHTML = memory1;
    } else if (num1.innerHTML !== '') {
        num2.innerHTML = this.id;
        memory1 = num1.innerHTML.concat(num2.innerHTML);
        num1.innerHTML = memory1;
        console.log(memory1);
    }
   }
  }
 }

startmemory1();
function startmemory2() {
  for (i=0; i<button.length; i++) {
      button[i].onclick = function() {
      if (num4.innerHTML === '') {
        memory2 = '';
        memory2 = this.id;
        num4.innerHTML = memory2;
    } else if (num4.innerHTML !== '') {
        num5.innerHTML = this.id;
        memory2 = num4.innerHTML.concat(num5.innerHTML);
        num4.innerHTML = memory2;
        console.log(memory2);
    }
   }
  }
 }

for (i=0; i<ops.length; i++) {
  ops[i].onclick = function() {
    memory2 = '';
    console.log(memory2);
    num3.innerHTML = this.id;
    startmemory2();
  }
 }

function prep(total) {
   num3.innerHTML = '';
   num4.innerHTML = '';
   num1.innerHTML = String(total);
   memory1 = String(total);
   memory2 = '';
   console.log(memory1);
   console.log(memory2);
 }

equals.onclick = function() {

  switch (num3.innerHTML) {
    case '+':
      var sum = Number(memory1)+Number(memory2);
      prep(sum);
      break;
    case '-':
      var diff = Number(memory1)-Number(memory2);
      prep(diff);
      break;
    case 'x':
      var product = Number(memory1)*Number(memory2);
      prep(product);
      break;
    case '/':
      var quotient = Number(memory1)/Number(memory2);
      prep(quotient);
      break;
    default:
      startmemory1();
  }
 }

clear.onclick = function() {
  memory1 = '';
  memory2 = '';
  num3.innerHTML = '';
  num1.innerHTML = memory1;
  num4.innerHTML = memory2;
  startmemory1();
}
}
