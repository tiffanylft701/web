import request from './request'
//创建token
export function createToken( ){
	return request({
		url:'/api/token/createToken',
		
	})
}