var add = require('./calc')
require('../css/index.less')
require('../css/index.scss')
require('../css/sprite.css')
// import '../css/index.css'
class Person{
    static info = { name: 'zs', age: 20 }
}
console.log(Person.info)

const fn = (name)=>{
    console.log(name)
}

fn('zs')

document.write(add(1,12))