
let arr =  [3,3,3,3,3]
let count = 1
let mostRepeated=0
for (let i = 0; i < arr.length; i++) {
    let num=arr.filter((a) => {
        return a == arr[i];
    }).length
    if (num>count) {
        count=num
        mostRepeated=arr[i]
    }
}
console.log(mostRepeated);





