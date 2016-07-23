window.onload = function() {
  var display = document.getElementById('display');
  var button = document.querySelectorAll('button');
  var equals = document.getElementById('total');
  var clear = document.getElementById('clear');
  var newArray = [];

  for (i=0; i<button.length; i++) {
    button[i].onclick = function() {
      newArray.push(this.id);
      display.innerHTML = newArray;
      console.log(newArray);
    }
  }

 clear.onclick = function() {
  newArray.length = 0;
  display.innerHTML = newArray;
}

equals.onclick = function() {
  console.log(newArray);

    var operator = ['+', '-', 'x', '/'];
    newArray.forEach(function(element, index){
      if (operator.indexOf(element) > -1){
        console.log(newArray[index]);
        var left = newArray.slice(0, index);
        var right = newArray.slice(index+1);
        console.log(left.join(''), right.join(''));

        if (newArray[index] === "+") {
          console.log(Number(left.join(''))+Number(right.join('')));
          display.innerHTML = Number(left.join('')) + Number(right.join(''));
        }

        if (newArray[index] === "-") {
          console.log(Number(left.join('')) - Number(right.join('')));
          display.innerHTML = Number(left.join('') - Number(right.join('')));
        }

        if (newArray[index] === "x") {
          console.log(Number(left.join('')) - Number(right.join('')));
          display.innerHTML = Number(left.join('')*Number(right.join('')));
        }

        if (newArray[index] === "/") {
          console.log(Number(left.join('')) / Number(right.join('')));
          display.innerHTML = Number(left.join('')/Number(right.join('')));
        }
      }
    })
  }
