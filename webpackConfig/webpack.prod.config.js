const merge = require("webpack-merge");
const baseConfig=require("./webpack.base.config");
console.log("production");
const prodConfig=merge(baseConfig,{});
module.exports=prodConfig;