var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var exec = require('child_process').exec;
var conf = require('./conf.json');

var root = path.join(__dirname, './');
var component = path.join(root, './src/components/');
var demo = path.join(root, './src/demo/');




gulp.task('component', function () {
  var args = process.argv.slice(3);
  var cmd = args[0];
  var comps = args.slice(1);
  switch (cmd) {
    // 自动创建新组建目录：component -n [name]
    case '-n':
      createComponentDir(cmd, comps);
      break;
    default:
      console.log('component ' + cmd + ' command is not defined');
      break;
  }
});


//gulp component -n [name]
function createComponentDir(cmd, comps) {
  if (comps.length === 0) {
    console.error('name is not defined');
  } else {
    comps.map(function (name) {
      // 创建components下文件夹
      exec('mkdir ' + name
        + '&& cd ' + name
        + '&& echo a>index.js'
        + '&& echo a>index.scss',
        {
          cwd: component
        });
      // 创建demo下文件夹
      exec('mkdir ' + name
        + '&& cd ' + name
        + '&& echo a>index.js'
        + '&& echo a>index.scss',
        {
          cwd: demo
        });
      // build/conf.json中添加入口文件
      conf.entry[name] = "./" + name + "/index.js";
      fs.writeFileSync('./conf.json', JSON.stringify(conf, null, 2));
    })
  }
}




// //item

// if("select"){
//   createDom(item.option);


// }


