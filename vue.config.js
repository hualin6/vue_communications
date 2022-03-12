const resolve = (dir) => path.join(__dirname, dir);
const path = require('path');
module.exports = {
  transpileDependencies: ['@splidejs'],
  chainWebpack: (config) => {
    //配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'));
  },
};
