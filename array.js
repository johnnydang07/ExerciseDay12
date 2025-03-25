// Exercise 1
function calculateShoppingBudget(listNeedToBuy) {
    let sum = 0;
    for (i = 0; i < listNeedToBuy.length; i = i + 1) {
        unit = listNeedToBuy[i][0];
        price = listNeedToBuy[i][1];
        sum += unit * price;
    }
    return sum;
}
listNeedToBuy = [[1, 20], [3, 40], [5, 15]];
console.log(calculateShoppingBudget(listNeedToBuy));

// Exercise 2 
list = [[1, 2, 3], 
        [4, 5, 6],
        [7, 8, 9]];

function spiralSnail(list) {

    let result = [];
    let left = 0;
    let right = list[0].length;
    let top = 0;
    let bottom = list.length;

    while(left < right || top < bottom){
        
        for (let i = left; i < right; i++) {
            result.push(list[left][i]);
        }
        top++;

        for (let i = top; i < bottom; i++) {
            result.push(list[i][right - 1]);
        }
        right--;

        for (let i = right - 1; i >= left; i--) {
            result.push(list[bottom - 1][i]);
        }
        bottom--;

        for (let i = bottom - 1; i >= top; i--) {
           result.push(list[i][left]);
        }
        left++;
    }

    return result;
}
console.log(spiralSnail(list));
