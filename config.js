/**
 * 小程序配置文件
 */

var host = "http://127.0.0.1:8080"   //本地测试环境

var service_name = "BillDataServer"

var config = {
  //获取thirdSession
  wxlogin: `${host}/${service_name}/action/wxlogin`
};

module.exports = config