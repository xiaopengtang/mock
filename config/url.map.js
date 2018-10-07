'use strict'

module.exports = {
	'/user/getUserInfo': {
		"success"  :  "true",
		"msg"  :  null,
		"errorCode"  :  170000,
		"data"  :  
		{
			"userId"  :  10012,                                                //  用户id
			"name"  :  "MMM",                                                    //  用户名_昵称
			"realName"  :  "UUcccU",                                      //  用户名_真实姓名
			"password"  :  "111111",                                      //  用户密码
			"sex"  :  0,                                                              //  用户性别，0-男  1-女
			"tel"  :  "18822255552",                                      //  手机号
			"addTime"  :  "2018-09-20  14:13:34.0",          //  添加时间
			"updateTime"  :  "2018-09-20  14:14:38.0",    //  更新时间
			"level"  :  0,                                                          //  用户等级  0-普通会员  1-超级管理员  ...
			"mark"  :  0                                                              //  审核状态，0有效  1过期
		}
	},
	'/user/register': {
		"success"  :  "true",
		"msg"  :  null,
		"errorCode"  :  170000,
		"data"  :  
		{
		"userId"  :  10012        //  注册后的用户id
		}
	},
	'/user/updateUser': {
		"success"  :  "true",
		"msg"  :  "用户信息修改成功",
		"errorCode"  :  170000,
		"data"  :  null
	},
	'/user/deleteUser': {
		"success"  :  "true",
		"msg"  :  "用户数据删除成功",
		"errorCode"  :  170000,
		"data"  :  
		{
		"userId"  :  10012
		}
	}

}