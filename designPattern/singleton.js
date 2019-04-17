// Singleton.getInstance

// 透明的单例

// 独立的单例生成高阶函数

// 惰性单例


const getSingle = function (fn) {
    let result
    return function () {
        return result || (result = fn.apply(this, arguments))
    }
}


// 唯一浮层

var createLoginLayer = function(){
    var div = document.createElement( 'div' );
    div.innerHTML = '我是登录浮窗';
    div.style.display = 'none';
    document.body.appendChild( div );
    return div;
};

var createSingleLoginLayer = getSingle( createLoginLayer );

document.getElementById( 'loginBtn' ).onclick = function(){
    var loginLayer = createSingleLoginLayer();
    loginLayer.style.display = 'block';
};
