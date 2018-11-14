Promise = require('bluebird')

var A = function() {

    return new Promise(function(resolve, reject) {
        var result = 'A work is done'

        console.log(result)
        resolve(result);
    })
}

var B = function() {

    return new Promise(function(resolve, reject) {
        var result = 'B work is done'

        setTimeout(function() {
            console.log(result)
        }, 2000)
    })
}
A().then(B)
