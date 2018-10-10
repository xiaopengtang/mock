'use strict'

module.exports = {
	get ['mycollection/getMyColList'](){
		let data = {
			"id" : 1,                                     	// 我的收藏id
			"userId" : 10000,                          		// 用户id_对应user_info表的id
			"collectionUserId" : 10000,						// 用户id_藏品发布人Id
			"collectionUserName" : "liangge",				// 用户名_藏品发布人昵称
			"collectionId" : 1,								// 藏品id
			"title" : "我的邮票",							// 藏品标题
			"desc" : "我的邮票真好看啊1!!",					// 藏品简介
			"images" : "http://static.plupros.com/TabsPro/server/r2/img/configImg_0309/down/S1.png", // 图片地址，多个用逗号隔开
			"price" : 1000,									// 藏品价格
			"unit" : "美元",								// 藏品单位
			"pubTime" : "2018-09-09 10:10:10.0",			// 添加时间
			"flag" : 0	
		}
		return {
			"success" : "true",
			"msg" : null,
			"errorCode" : 170000,
			"data" : {
				total: 4,
				colList: [data,data,data, data,data,data,data]
			}
		}
	},
	'mycollection/deleteMyCollection': {
		"success" : "true",
		"msg" : "我的收藏数据删除成功",
		"errorCode" : 170000,
		"data" : null
	},
	'mycollection/addMyCollection': {
		"success" : "true",
		"msg" : "我的收藏数据删除成功",
		"errorCode" : 170000,
		"data" : null
	},
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
	'/user/login': {
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
	},
	'collection/getHotList': {
		"success" : "true",
		"msg" : null,
		"errorCode" : 170000,
		"data" : 
		[
			{
				"id" : 3,                                    		// 藏品id
				"type" : 1,                                  		// 藏品Type
				"navName" : "邮票",                          		// 栏目名称
				"navImage" : "http://static.plupros.com/TabsPro/server/r2/img/configImg_0309/down/S1.png",  // 栏目图标地址
				"navUrl" : "https://s.click.taobao.com/1uI7UPw",  	// 栏目点击跳转页面地址
				"userId" : "10000",                                 // 用户id
				"userName" : "liangge", 							// 用户名_昵称
				"title" : "我的邮票3",								// 藏品标题
				"desc" : "我的邮票真好看啊1!!",						// 藏品简介
				"images" : "https://wx.qlogo.cn/mmopen/vi_32/Q6x99VxceL0a700G1R1d6SHdxO2TXDrb44PLnANDamcu56v72icCxW9cfUSqKUQtKq2VL1oxq9KcVEvsOQ31tVA/132,http://static.plupros.com/TabsPro/server/r2/img/configImg_0309/down/S1.png",   // 图片地址，多个用逗号隔开
				"price" : 1000,										// 藏品价格
				"unit" : "美元",									// 藏品单位
				"hotLevel" : 1,										// 藏品热度_即关注等级_值越小等级越高
				"pubTime" : "2018-09-09 10:10:10.0",				// 添加时间
				"mark" : 0,											// 审核状态，0未审核 1有效 2过期
				"flag" : 0											// 商品状态，0有效 1过期
			},
			{
				"id" : 2,
				"type" : 1,
				"navName" : "邮票",
				"navImage" : "http://static.plupros.com/TabsPro/server/r2/img/configImg_0309/down/S1.png",
				"navUrl" : "https://s.click.taobao.com/1uI7UPw",
				"userId" : "10000",
				"userName" : "liangge",
				"title" : "我的邮票2",
				"desc" : "我的邮票真好看啊1!!",
				"images" : "http://static.plupros.com/TabsPro/server/r2/img/configImg_0309/down/S1.png",
				"price" : 1000,
				"unit" : "美元",
				"hotLevel" : 1,
				"pubTime" : "2018-09-09 10:10:10.0",
				"mark" : 0,
				"flag" : 0
			}
		]
	},
	get ['navigate/getNavInfo'](){
		let data = [{
			"id" : 2,                             // 栏目类型   
			"name" : "钱币",                      // 栏目名称 
			"image" : "http://dads.dd.com",       // 栏目图标地址  多个逗号隔开
			"url" : "http://www.baidu.com",       // 栏目点击跳转页面地址
			"sort" : 2,                           // 栏目排序,值越小排序越高
			"addTime" : "2018-09-21 15:51:30.0",  // 添加时间
			"mark" : 0                            // 审核状态，0有效 1过期
		},
		{
			"id" : 1,
			"name" : "邮票",
			"image" : "http://static.plupros.com/TabsPro/server/r2/img/configImg_0309/down/S1.png",
			"url" : "https://s.click.taobao.com/1uI7UPw",
			"sort" : 10,
			"addTime" : null,
			"mark" : 0
		}]
		return {
			"success" : "true",
			"msg" : null,
			"errorCode" : 170000,
			"data" : 
			[
				...data,
				...data,
				...data,
				...data,
				...data,
				...data,
				...data,
				...data,
				...data,
				...data,
				...data,
				...data
			]
		}
	}

}