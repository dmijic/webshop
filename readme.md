To start server> in root folder: npm run dev
To start client> in client folder: npm run serve

Routes:

/api/cart
/api/discounts
/api/items

Request examples:

Post to /api/cart

{
"cartItems": [{
"itemId": "2",
"itemName": "Motion Sensor",
"itemPrice": "24.99",
"itemImgUrl": "assets/img/motion-sensor.jpg",
"itemQty": "2"
},
{
"itemId": "3",
"itemName": "Wireless Camera",
"itemPrice": "99.99",
"itemImgUrl": "assets/img/wireless-camera.jpg",
"itemQty": "1"
}],
"customerInfo": {
"customerFirstName": "Dario",
"customerLastName": "Mijic",
"customerEmail": "dario.mijic@gmx.com",
"customerPhone": "0987654321",
"customerAdressCountry": "Croatia",
"customerAdressCity": "Zagreb",
"customerAdressPostalCode": "10000",
"customerAdressStreetName": "Zeleni trg",
"customerAdressStreetNumber": "5"
},
"totalPrice": "149,97"
}

Post to /api/items

{
"itemId": "5",
"itemName": "Water Leak Sensor",
"itemPrice": "14.99",
"itemImgUrl": "assets/img/water-leak-sensor.jpg"
}
