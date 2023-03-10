const data = {
    "name":"nischal Shakya",
    "address":"KTM",
    "products":{
        "product_Id":01,
        "qantity":3
    }
}
const objData = JSON.parse(JSON.stringify(data))
console.log('data:',objData);
console.log('Product_Id:',objData.products.product_Id);
console.log('Quantity:',objData.products.qantity);