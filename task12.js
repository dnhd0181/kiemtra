n= Number(prompt("Please enter number" ))
const findEven = (n) => {
    for (let i=4; i <= n;i++) {
        if(i%2==0){
            console.log(i)
        }
    }
}
if (n >= 4 && n <= 20){
    console.log(findEven(n))
} else{
    alert("Tham số number bị ràng buộc bởi điều kiện 4 <= number <= 20")
}