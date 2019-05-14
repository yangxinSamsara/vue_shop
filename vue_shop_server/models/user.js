/**
 * Created by web前端 on 2017/11/24.
 */
let mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    'userId':String,
    'userName':String,
    'userPwd':String,
    'orderList':Array,
    'cartList':[
        {
            'productId':String,
            'productName':String,
            'salePrice':String,
            'productImage':String,
            'checked':String,
            'productNum':String
        }
    ],
    'addressList':[
        {
            "addressId":String,
            "userName":String,
            "streetName":String,
            "postCode":Number,
            "tel":Number,
            "isDefault":Boolean

        }
    ]
},
//解决报错：Unknown modifier: $pushAll
{
    usePushEach: true
    });

module.exports = mongoose.model('User', userSchema)



