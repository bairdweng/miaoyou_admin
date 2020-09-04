import request from '@/utils/request'
export function getAppInfos() {
  return request({
    url: 'app/getAppInfos',
    method: 'get'
  })
}
