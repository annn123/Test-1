// 購物車商品總價格計算函數
function calculateTotalPrice(items) {
    let totalPrice = 0;

    // 遍歷購物車中的每個商品
    items.forEach(item => {
        // 將每個商品的價格加到總價格中
        totalPrice += item.price * item.quantity;
    });

    return totalPrice;
}

// 模擬購物車中的商品
let cartItems = [
    { name: 'iPhone', price: 999, quantity: 1 },
    { name: 'MacBook', price: 1999, quantity: 1 },
    { name: 'iPad', price: 499, quantity: 2 }
];

// 計算購物車中商品的總價格
let totalPrice = calculateTotalPrice(cartItems);

// 輸出結果
console.log('購物車總價格:', totalPrice);