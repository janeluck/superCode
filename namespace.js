var MyApp = {};
MyApp.namespaces = function (name) {
    var parts = name.split('.'), current = MyApp;
    for(var i in parts){
        if(!current[parts[i]]) {
            current[parts[i]] = {}
        }
        current = current[parts[i]]
    }
}

MyApp.namespaces('jane.tool')
console.dir(MyApp)
