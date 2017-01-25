// 采用 commonjs 模块化方案。
fis.hook('commonjs', {
  baseUrl: './modules',
  extList: ['.js', '.jsx']
});

// 改用 npm 方案，而不是用 fis-components
fis.hook('node_modules');

fis.match('::package', {
  // 本项目为纯前段项目，所以用 loader 编译器加载，
  // 如果用后端运行时框架，请不要使用。
  postpackager: fis.plugin('loader', {
    useInlineMap: true
  })
});



fis.match('/src/(**)', {
  release: '$1'
}).match('/{webpack/**,gulpfile.js,package.json,README.md}', {
  release: false
});

fis.match('{src,node_modules}/**.{js,jsx}', {
  //parser: fis.plugin('typescript'),
  //typescript 就是编译速度会很快，但是对一些 es7 的语法不支持，可以用 babel 来解决。用以下内容换掉 typescript 的parser配置就好了。
  parser: fis.plugin('babel-5.x', {
    sourceMaps: true,
    optional: ["es7.decorators", "es7.classProperties"]
  }),
  isMod: true,
  rExt: '.js'
});

fis.match('/src/libs/mod.js', {
  isMod: false
})

fis.match('*.scss', {
  parser: fis.plugin('node-sass', {
    //fis-parser-node-sass option
  }),
  rExt: '.css'
});

fis.match('*.{js,es,es6,jsx,ts,tsx}', {
  preprocessor: fis.plugin('js-require-css')
})






