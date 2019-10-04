import request from '../utils/network.js'
function getImagesData(){
  return request({
    url: 'http://mock-api.com/EgdyLpnM.mock/getImages',
  })
}
function getLists() {
  return request({
    url: 'http://test.uu163.net/mapi/Share/List',
    method:"POST",
    data: {
      catId: 0,
      pageIndex: 1,
      pageSize: 10,
      sort: ""
    }
  })
}
export {
  getImagesData,
  getLists,
}