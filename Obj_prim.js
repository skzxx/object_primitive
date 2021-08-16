{
  let x = 5
  let b = "10"
  x = x + b
  console.log(x)
  console.log("=====primitive=====")
}

{
  let person = {
    name: 'EAZY-E',
    age:72,
    stuff: function () {
      var x = 5
      console.log("Nilai x pada variabel x dalam fungsi obj = " + x)
    }
  }
  person.stuff()
  console.log(person.name + person.age)
}