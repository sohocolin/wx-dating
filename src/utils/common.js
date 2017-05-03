/**
 * Created by JiangWenqiang on 2017/5/3.
 */
/**
 * 扫描二维码
 * @param callbackSuccess
 * @param callbackFail
 */
function scanCode (callbackSuccess, callbackFail) {
  wx.scanCode({
    success (res) {
      callbackSuccess(res)
    },
    fail (res) {
      callbackFail(res)
    }
  })
}
/**
 * 数据请求
 * @param obj
 */
function wxRequest (obj) {
  wx.request(obj)
}
module.exports = {
  scanCode,
  wxRequest
}
