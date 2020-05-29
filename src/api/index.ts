import { MyParams } from '@/api/type'
import { common } from '@/url/api'
import Http from '@/untils/fetch'

/**
 * 会员首页信息
 * @param params
 */
export const queryVipInfo = (params: MyParams) => {
  return Http({
    url: common.wechatAuth,
    method: 'POST',
    data: params
  })
}
