// 装饰器模式
// 随用随取，附加功能



// 传统类实现方式
var Plane = function () {

}
Plane.prototype = {
    fire: function () {
        console.log('emit bullet')
    }
}
var MissileDecorator = function (plane) {
    this.plane = plane
}

MissileDecorator.prototype.fire = function () {
    this.plane.fire()
    console.log('emit missile')
}

var AtomDecorator = function (plane) {
    this.plane = plane
}

AtomDecorator.prototype.fire = function () {
    this.plane.fire()
    console.log('emit atom')
}

var plane = new Plane()
plane = new MissileDecorator(plane)
plane = new AtomDecorator(plane)
plane.fire()


// AOP编程形式的装饰器模式

// ../beforeAfter 或者 before

