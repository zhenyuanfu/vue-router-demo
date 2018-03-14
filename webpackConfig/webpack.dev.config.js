const merge = require("webpack-merge");
const baseConfig=require("./webpack.base.config");
const devConfig=merge(baseConfig,{});
console.log("development");
module.exports=devConfig;