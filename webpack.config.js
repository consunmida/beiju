const path = require('path');
console.log(path);
module.exports = {
    mode: '', // production || development
    entry: '',
    output: {
        filename:'',
        path: path.resolve('dist')  //绝对路径
    }
}