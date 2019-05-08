// 适配器模式
// 不兼容接口之间的转换
// 转接口，电源适配器


var guangdong_format0  = {
    shenzhen: 11,
    guangzhou: 12
}
var guangdong_format1 = [
    {
        name: 'shenzhen',
        id: 11
    }, {
        name: 'guangzhou',
        id: 12
    }
]

var addressAdapter = function (oldAddress) {

    var address = []
    for(var key in oldAddress){
        address.push({
            name: key,
            id: oldAddress[key]
        })
    }
    return address
}

console.log(addressAdapter(guangdong_format0))
