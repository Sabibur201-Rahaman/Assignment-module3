// function printObjectProperties(param){
// for(let props in param){
// console.log(props+':'+param[props].color)
// console.log(props+':'+param[props].quality)
// console.log(props+':'+param[props].price)
// }
// }


// let bilgates = {
//   shirt: {
//     color: "offwhite",
//     quality: "good",
//     price: "230usd",
//   }
// }

// printObjectProperties(bilgates)



function printObjectProperties(obj) {
    if (Object.keys(obj).length === 0) {
      console.log("Object is empty");
    } else {
      for (let prop in obj) {
        console.log(`${prop}: ${obj[prop]}`);
      }
    }
  }
  let bilgates = {
  shirt: {
    color: "offwhite",
    quality: "good",
    price: "230usd",
    size:' '
  }
}

printObjectProperties(bilgates)
