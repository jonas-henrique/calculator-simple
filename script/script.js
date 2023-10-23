function insert(number) {
  const text = document.getElementById("screen");
  const screen = text.value;
  if(screen !=0){
    text.value = text.value + number;
  }else{
    text.value = number;
  }
  
}
function calculator() {
  const text = document.getElementById("screen");
  text.value = eval(text.value);
  const format = text.value;
  if (format > format + 1) {
    text.value = format.toFixed(2);
  }
}
function deleteAll() {
  //button C
  document.getElementById("screen").value = 0;
}

