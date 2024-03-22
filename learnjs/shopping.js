function Totalprice (item){
    let totalprice=0;

    item.forEach(item=> {
        totalprice+= item.price*item.quantity;
    });
        return totalprice;
}

let cart=[];

let itemcount = parseint(prompt('請輸入商品數:'));

for(let i=o;i<itemcount;i++){
    let itemname=promtp("商品名稱:");
    let itemprice=parseFloat(prompt("商品價格"));
    let itemquantity=parseInt(prompt("商品數量"));

    cart.push({name:itemname, price: itemprice, quantity:itemquantity});
}

let totalprice= Tatalprice(car);
console.log('Total shopping price:',totalprice);