import { convertRESTAPI } from '../util';
import request from '@/utils/request'


/** 手机支付完成回调 */
function weixinpay_wxpayBack_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/weixinpay/wxpayBack',
    params: opts
  });
}

/** 手机支付完成回调 */
function weixinpay_wxpayBack_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/weixinpay/wxpayBack',
    data: opts
  });
}

/** wechatLogin */
function sys_wechatLogin_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/wechatLogin',
    data: opts
  });
}

/** wechatLogin */
function sys_wechatLogin_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/wechatLogin',
    data: opts
  });
}

/** 查询表对应的列名 */
function table_tableColumnList_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/table/tableColumnList',
    params: opts
  });
}

/** 查询表名 */
function table_tableNameList_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/table/tableNameList',
    params: opts
  });
}

/** 支付后台回调1 */
function weixinpay_callBack_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/weixinpay/callBack',
    data: opts
  });
}

/** 纯H5支付(不建议在APP端使用) */
function weixinpay_h5pay_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/weixinpay/h5pay',
    data: opts
  });
}

/** 预下单 */
function weixinpay_mobileCallBack_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/weixinpay/mobileCallBack',
    params: opts
  });
}

/** 预下单 */
function weixinpay_mobileCallBack_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/weixinpay/mobileCallBack',
    data: opts
  });
}

/** H5支付(需要公众号或小程序内支付) */
function weixinpay_mpPay_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/weixinpay/mpPay',
    data: opts
  });
}

/** 支付后台回调2 */
function weixinpay_payFinishCallBack_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/weixinpay/payFinishCallBack',
    data: opts
  });
}

/** 二维码支付(模式一)根据商品ID预先生成二维码 */
function weixinpay_qcPay1_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/weixinpay/qcPay1',
    data: opts
  });
}

/** 二维码支付(模式二)下单并生成二维码 */
function weixinpay_qcPay2_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/weixinpay/qcPay2',
    data: opts
  });
}

/** updateServerUrl */
function sys_syslisence_systemurl_serverUrl_put(opts: any= "") {
  return request({
    method: 'put',
    url: convertRESTAPI('/sys/syslisence/systemurl/{serverUrl}', opts),
    data: opts
  });
}

/** info */
function sys_syslisence_lisenceId_get(opts: any= "") {
  return request({
    method: 'get',
    url: convertRESTAPI('/sys/syslisence/{lisenceId}', opts),
    params: opts
  });
}

/** delete */
function sys_user_delete_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/sys/user/delete',
    data: opts
  });
}

/** getInfo */
function sys_user_getInfo_userId_get(opts: any= "") {
  return request({
    method: 'get',
    url: convertRESTAPI('/sys/user/getInfo/{userId}', opts),
    params: opts
  });
}

/** info */
function sys_user_info_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/user/info',
    params: opts
  });
}

/** info */
function sys_user_info_userId_get(opts: any= "") {
  return request({
    method: 'get',
    url: convertRESTAPI('/sys/user/info/{userId}', opts),
    params: opts
  });
}

/** list */
function sys_user_list_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/user/list',
    params: opts
  });
}

/** password */
function sys_user_password_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/user/password',
    data: opts
  });
}

/** save */
function sys_user_save_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/user/save',
    data: opts
  });
}

/** update */
function sys_user_update_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/user/update',
    data: opts
  });
}

/** getUserTypes */
function sys_user_usertype_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/user/usertype',
    params: opts
  });
}

/** validate */
function sys_validate_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/validate',
    params: opts
  });
}

/** apply */
function sys_syslisence_apply_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/syslisence/apply',
    data: opts
  });
}

/** grant */
function sys_syslisence_grant_lisenceId_put(opts: any= "") {
  return request({
    method: 'put',
    url: convertRESTAPI('/sys/syslisence/grant/{lisenceId}', opts),
    data: opts
  });
}

/** register */
function sys_syslisence_register_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/syslisence/register',
    data: opts
  });
}

/** registerAgain */
function sys_syslisence_registerAgain_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/syslisence/registerAgain',
    data: opts
  });
}

/** updateSystemName */
function sys_syslisence_systemname_systemName_put(opts: any= "") {
  return request({
    method: 'put',
    url: convertRESTAPI('/sys/syslisence/systemname/{systemName}', opts),
    data: opts
  });
}

/** list */
function sys_syslisence_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/syslisence',
    params: opts
  });
}

/** save */
function sys_syslisence_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/syslisence',
    data: opts
  });
}

/** update */
function sys_syslisence_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/syslisence',
    data: opts
  });
}

/** delete */
function sys_syslisence_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/sys/syslisence',
    data: opts
  });
}

/** saveBatch */
function sys_sysdictitem_batch_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/sysdictitem/batch',
    data: opts
  });
}

/** updateBatch */
function sys_sysdictitem_batch_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/sysdictitem/batch',
    data: opts
  });
}

/** listByCondition */
function sys_sysdictitem_condition_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/sysdictitem/condition',
    params: opts
  });
}

/** info */
function sys_sysdictitem_dictItemId_get(opts: any= "") {
  return request({
    method: 'get',
    url: convertRESTAPI('/sys/sysdictitem/{dictItemId}', opts),
    params: opts
  });
}

/** update */
function sys_sysdict_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/sysdict',
    data: opts
  });
}

/** delete */
function sys_sysdict_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/sys/sysdict',
    data: opts
  });
}

/** saveBatch */
function sys_sysdict_batch_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/sysdict/batch',
    data: opts
  });
}

/** updateBatch */
function sys_sysdict_batch_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/sysdict/batch',
    data: opts
  });
}

/** listByCondition */
function sys_sysdict_condition_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/sysdict/condition',
    params: opts
  });
}

/** info */
function sys_sysdict_dictId_get(opts: any= "") {
  return request({
    method: 'get',
    url: convertRESTAPI('/sys/sysdict/{dictId}', opts),
    params: opts
  });
}

/** list */
function sys_sysdictitem_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/sysdictitem',
    params: opts
  });
}

/** save */
function sys_sysdictitem_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/sysdictitem',
    data: opts
  });
}

/** update */
function sys_sysdictitem_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/sysdictitem',
    data: opts
  });
}

/** delete */
function sys_sysdictitem_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/sys/sysdictitem',
    data: opts
  });
}

/** pause */
function sys_schedule_pause_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/schedule/pause',
    params: opts
  });
}

/** resume */
function sys_schedule_resume_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/schedule/resume',
    params: opts
  });
}

/** run */
function sys_schedule_run_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/schedule/run',
    params: opts
  });
}

/** save */
function sys_schedule_save_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/schedule/save',
    data: opts
  });
}

/** update */
function sys_schedule_update_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/schedule/update',
    data: opts
  });
}

/** info */
function sys_scheduleLog_info_logId_get(opts: any= "") {
  return request({
    method: 'get',
    url: convertRESTAPI('/sys/scheduleLog/info/{logId}', opts),
    params: opts
  });
}

/** list */
function sys_scheduleLog_list_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/scheduleLog/list',
    params: opts
  });
}

/** sinaLogin */
function sys_sinaLogin_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/sinaLogin',
    data: opts
  });
}

/** sinaLogin */
function sys_sinaLogin_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/sinaLogin',
    data: opts
  });
}

/** list */
function sys_sysdict_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/sysdict',
    params: opts
  });
}

/** save */
function sys_sysdict_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/sysdict',
    data: opts
  });
}

/** qqLogin */
function sys_qqLogin_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/qqLogin',
    data: opts
  });
}

/** delete */
function sys_role_delete_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/sys/role/delete',
    data: opts
  });
}

/** info */
function sys_role_info_roleId_get(opts: any= "") {
  return request({
    method: 'get',
    url: convertRESTAPI('/sys/role/info/{roleId}', opts),
    params: opts
  });
}

/** list */
function sys_role_list_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/role/list',
    params: opts
  });
}

/** save */
function sys_role_save_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/role/save',
    data: opts
  });
}

/** select */
function sys_role_select_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/role/select',
    params: opts
  });
}

/** update */
function sys_role_update_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/role/update',
    data: opts
  });
}

/** delete */
function sys_schedule_delete_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/sys/schedule/delete',
    data: opts
  });
}

/** info */
function sys_schedule_info_jobId_get(opts: any= "") {
  return request({
    method: 'get',
    url: convertRESTAPI('/sys/schedule/info/{jobId}', opts),
    params: opts
  });
}

/** list */
function sys_schedule_list_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/schedule/list',
    params: opts
  });
}

/** saveConfig */
function sys_oss_saveConfig_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/oss/saveConfig',
    data: opts
  });
}

/** upload */
function sys_oss_upload_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/oss/upload',
    data: opts
  });
}

/** upload */
function sys_oss_upload_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/oss/upload',
    data: opts
  });
}

/** qqLogin */
function sys_qqLogin_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/qqLogin',
    data: opts
  });
}

/** save */
function sys_menu_save_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/menu/save',
    data: opts
  });
}

/** select */
function sys_menu_select_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/menu/select',
    params: opts
  });
}

/** update */
function sys_menu_update_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/menu/update',
    data: opts
  });
}

/** config */
function sys_oss_config_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/oss/config',
    params: opts
  });
}

/** delete */
function sys_oss_delete_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/sys/oss/delete',
    data: opts
  });
}

/** list */
function sys_oss_list_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/oss/list',
    params: opts
  });
}

/** saveConfig */
function sys_oss_saveConfig_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/oss/saveConfig',
    data: opts
  });
}

/** queryTables */
function sys_generator_queryTables_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/generator/queryTables',
    params: opts
  });
}

/** isLogin */
function sys_isLogin_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/isLogin',
    params: opts
  });
}

/** list */
function sys_log_list_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/log/list',
    params: opts
  });
}

/** login */
function sys_login_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/login',
    data: opts
  });
}

/** login */
function sys_login_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/login',
    data: opts
  });
}

/** logout */
function sys_logout_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/logout',
    params: opts
  });
}

/** logout */
function sys_logout_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/logout',
    data: opts
  });
}

/** delete */
function sys_menu_delete_menuId_delete(opts: any= "") {
  return request({
    method: 'delete',
    url: convertRESTAPI('/sys/menu/delete/{menuId}', opts),
    data: opts
  });
}

/** info */
function sys_menu_info_menuId_get(opts: any= "") {
  return request({
    method: 'get',
    url: convertRESTAPI('/sys/menu/info/{menuId}', opts),
    params: opts
  });
}

/** list */
function sys_menu_list_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/menu/list',
    params: opts
  });
}

/** nav */
function sys_menu_nav_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/menu/nav',
    params: opts
  });
}

/** 修改引擎参数 */
function sys_engineParamController_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/engineParamController',
    data: opts
  });
}

/** 删除引擎参数 */
function sys_engineParamController_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/sys/engineParamController',
    data: opts
  });
}

/** 获取引擎参数详情 */
function sys_engineParamController_getOptionValue_engineId_paramKey_get(opts: any= "") {
  return request({
    method: 'get',
    url: convertRESTAPI('/sys/engineParamController/getOptionValue/{engineId}/{paramKey}', opts),
    params: opts
  });
}

/** 修改引擎参数详情 */
function sys_engineParamController_updateEngineParam_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/engineParamController/updateEngineParam',
    data: opts
  });
}

/** code */
function sys_generator_code_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/generator/code',
    params: opts
  });
}

/** codeMany */
function sys_generator_codeMany_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/generator/codeMany',
    params: opts
  });
}

/** refresh */
function sys_generator_datasource_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/generator/datasource',
    params: opts
  });
}

/** dbInfos */
function sys_generator_dbInfos_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/generator/dbInfos',
    params: opts
  });
}

/** isInitDB */
function sys_generator_isInitDB_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/generator/isInitDB',
    params: opts
  });
}

/** list */
function sys_generator_list_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/generator/list',
    params: opts
  });
}

/** queryColumns */
function sys_generator_queryColumns_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/generator/queryColumns',
    params: opts
  });
}

/** update */
function sys_config_update_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/config/update',
    data: opts
  });
}

/** 获取引擎类型列表 */
function sys_engineController_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/engineController',
    params: opts
  });
}

/** 保存引擎类型 */
function sys_engineController_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/engineController',
    data: opts
  });
}

/** 修改引擎类型 */
function sys_engineController_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/sys/engineController',
    data: opts
  });
}

/** 删除引擎类型 */
function sys_engineController_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/sys/engineController',
    data: opts
  });
}

/** 获取引擎类型列表（不分页） */
function sys_engineController_getOptionValue_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/engineController/getOptionValue',
    params: opts
  });
}

/** 根据id查询引擎详情 */
function sys_engineController_engineId_get(opts: any= "") {
  return request({
    method: 'get',
    url: convertRESTAPI('/sys/engineController/{engineId}', opts),
    params: opts
  });
}

/** 获取引擎参数列表 */
function sys_engineParamController_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/engineParamController',
    params: opts
  });
}

/** 保存引擎参数 */
function sys_engineParamController_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/engineParamController',
    data: opts
  });
}

/** info */
function social_syswechatuser_wechatUserId_get(opts: any= "") {
  return request({
    method: 'get',
    url: convertRESTAPI('/social/syswechatuser/{wechatUserId}', opts),
    params: opts
  });
}

/** delete */
function sys_config_delete_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/sys/config/delete',
    data: opts
  });
}

/** info */
function sys_config_info_id_get(opts: any= "") {
  return request({
    method: 'get',
    url: convertRESTAPI('/sys/config/info/{id}', opts),
    params: opts
  });
}

/** list */
function sys_config_list_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/sys/config/list',
    params: opts
  });
}

/** save */
function sys_config_save_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/sys/config/save',
    data: opts
  });
}

/** delete */
function social_syswechatuser_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/social/syswechatuser',
    data: opts
  });
}

/** unbind */
function social_syswechatuser_unbind_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/social/syswechatuser/unbind',
    data: opts
  });
}

/** saveConfig */
function social_saveConfig_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/social/saveConfig',
    data: opts
  });
}

/** saveConfig */
function social_saveConfig_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/social/saveConfig',
    data: opts
  });
}

/** list */
function social_sysqquser_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/social/sysqquser',
    params: opts
  });
}

/** delete */
function social_sysqquser_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/social/sysqquser',
    data: opts
  });
}

/** unbind */
function social_sysqquser_unbind_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/social/sysqquser/unbind',
    data: opts
  });
}

/** info */
function social_sysqquser_qqUserId_get(opts: any= "") {
  return request({
    method: 'get',
    url: convertRESTAPI('/social/sysqquser/{qqUserId}', opts),
    params: opts
  });
}

/** list */
function social_syssinauser_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/social/syssinauser',
    params: opts
  });
}

/** delete */
function social_syssinauser_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/social/syssinauser',
    data: opts
  });
}

/** unbind */
function social_syssinauser_unbind_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/social/syssinauser/unbind',
    data: opts
  });
}

/** info */
function social_syssinauser_sinaUserId_get(opts: any= "") {
  return request({
    method: 'get',
    url: convertRESTAPI('/social/syssinauser/{sinaUserId}', opts),
    params: opts
  });
}

/** list */
function social_syswechatuser_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/social/syswechatuser',
    params: opts
  });
}

/** info */
function login_info_head(opts: any= "") {
  return request({
    method: 'head',
    url:  '/login/info',
    data: opts
  });
}

/** info */
function login_info_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/login/info',
    data: opts
  });
}

/** info */
function login_info_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/login/info',
    data: opts
  });
}

/** info */
function login_info_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/login/info',
    data: opts
  });
}

/** info */
function login_info_options(opts: any= "") {
  return request({
    method: 'options',
    url:  '/login/info',
    data: opts
  });
}

/** info */
function login_info_patch(opts: any= "") {
  return request({
    method: 'patch',
    url:  '/login/info',
    data: opts
  });
}

/** config */
function social_config_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/social/config',
    params: opts
  });
}

/** getUserIdThruQqUserId */
function social_getSysUserIdThruQqUserId_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/social/getSysUserIdThruQqUserId',
    params: opts
  });
}

/** getUserIdThruSinaUserId */
function social_getSysUserIdThruSinaUserId_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/social/getSysUserIdThruSinaUserId',
    params: opts
  });
}

/** getUserIdThruWechatUserId */
function social_getSysUserIdThruWechatUserId_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/social/getSysUserIdThruWechatUserId',
    params: opts
  });
}

/** list */
function excel_excelconfigexclude_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/excel/excelconfigexclude',
    params: opts
  });
}

/** save */
function excel_excelconfigexclude_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/excel/excelconfigexclude',
    data: opts
  });
}

/** update */
function excel_excelconfigexclude_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/excel/excelconfigexclude',
    data: opts
  });
}

/** delete */
function excel_excelconfigexclude_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/excel/excelconfigexclude',
    data: opts
  });
}

/** info */
function excel_excelconfigexclude_excelConfigExcludeId_get(opts: any= "") {
  return request({
    method: 'get',
    url: convertRESTAPI('/excel/excelconfigexclude/{excelConfigExcludeId}', opts),
    params: opts
  });
}

/** 导入数据 */
function excelfile_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/excelfile',
    data: opts
  });
}

/** 导出 Excel */
function excelfile_toExportExcel_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/excelfile/toExportExcel',
    params: opts
  });
}

/** 下载 Excel 模板 */
function excelfile_toExportExcelModel_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/excelfile/toExportExcelModel',
    params: opts
  });
}

/** loginCas1 */
function login_cas1_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/login/cas1',
    params: opts
  });
}

/** loginCas2 */
function login_cas2_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/login/cas2',
    params: opts
  });
}

/** info */
function login_info_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/login/info',
    params: opts
  });
}

/** getAppName */
function app_appname_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/app/appname',
    params: opts
  });
}

/** getServerBase */
function app_server_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/app/server',
    params: opts
  });
}

/** captcha */
function captcha_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/captcha.jpg',
    params: opts
  });
}

/** list */
function excel_excelconfig_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/excel/excelconfig',
    params: opts
  });
}

/** save */
function excel_excelconfig_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/excel/excelconfig',
    data: opts
  });
}

/** update */
function excel_excelconfig_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/excel/excelconfig',
    data: opts
  });
}

/** delete */
function excel_excelconfig_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/excel/excelconfig',
    data: opts
  });
}

/** getExcelConfigAndExcludeByKeyOrTablename */
function excel_excelconfig_info_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/excel/excelconfig/info',
    params: opts
  });
}

/** info */
function excel_excelconfig_excelConfigId_get(opts: any= "") {
  return request({
    method: 'get',
    url: convertRESTAPI('/excel/excelconfig/{excelConfigId}', opts),
    params: opts
  });
}

/** getExcelConfigByKey */
function excel_excelconfigByKey_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/excel/excelconfigByKey',
    params: opts
  });
}

/** getExcelConfigAndExcludeByKeyOrTablename */
function excel_excelconfigByKeyOrTablename_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/excel/excelconfigByKeyOrTablename',
    params: opts
  });
}

/** bindingUser */
function api_sina_bindUser_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/api/sina/bindUser',
    data: opts
  });
}

/** binding */
function api_sina_binding_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/sina/binding',
    params: opts
  });
}

/** getSinaLoginUrl */
function api_sina_getSinaLoginUrl_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/sina/getSinaLoginUrl',
    params: opts
  });
}

/** testSession */
function api_testSession_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/testSession',
    params: opts
  });
}

/** bindingUser */
function api_weixin_bindUser_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/api/weixin/bindUser',
    data: opts
  });
}

/** bindingUser */
function api_weixin_bindUser_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/api/weixin/bindUser',
    data: opts
  });
}

/** binding */
function api_weixin_binding_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/weixin/binding',
    params: opts
  });
}

/** getMPLoginUrl */
function api_weixin_getMPLoginUrl_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/weixin/getMPLoginUrl',
    params: opts
  });
}

/** getWechatLoginUrl */
function api_weixin_getWechatLoginUrl_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/weixin/getWechatLoginUrl',
    params: opts
  });
}

/** mpBinding */
function api_weixin_mpBinding_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/weixin/mpBinding',
    params: opts
  });
}

/** testPrecision */
function api_precision_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/precision',
    params: opts
  });
}

/** bindingUser */
function api_qq_bindUser_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/api/qq/bindUser',
    data: opts
  });
}

/** bindingUser */
function api_qq_bindUser_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/api/qq/bindUser',
    data: opts
  });
}

/** binding */
function api_qq_binding_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/qq/binding',
    params: opts
  });
}

/** getQQLoginUrl */
function api_qq_getQQLoginUrl_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/qq/getQQLoginUrl',
    params: opts
  });
}

/** signkey */
function api_signkey_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/signkey',
    params: opts
  });
}

/** writeSignkey */
function api_signkey_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/api/signkey',
    data: opts
  });
}

/** vaidateSignkey */
function api_signkey_vaidate_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/signkey/vaidate',
    params: opts
  });
}

/** bindingUser */
function api_sina_bindUser_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/api/sina/bindUser',
    data: opts
  });
}

/** 二维码支付 */
function alipay_qcPay_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/alipay/qcPay',
    data: opts
  });
}

/** testCache */
function api_cache_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/cache',
    params: opts
  });
}

/** testCache2 */
function api_cache2_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/cache2',
    params: opts
  });
}

/** clientIp */
function api_clientip_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/clientip',
    params: opts
  });
}

/** copyright */
function api_copyright_argot_get(opts: any= "") {
  return request({
    method: 'get',
    url: convertRESTAPI('/api/copyright/{argot}', opts),
    params: opts
  });
}

/** ipspoof */
function api_ipspoof_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/ipspoof',
    params: opts
  });
}

/** jwtkey */
function api_jwtkey_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/jwtkey',
    params: opts
  });
}

/** logs */
function api_logs_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/logs',
    params: opts
  });
}

/** logsfile */
function api_logsfile_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/logsfile',
    params: opts
  });
}

/** mpTokenValidate */
function api_mpToken_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/api/mpToken',
    params: opts
  });
}

/** frontRcvResponse */
function alipay_frontRcvResponse_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/alipay/frontRcvResponse',
    data: opts
  });
}

/** frontRcvResponse */
function alipay_frontRcvResponse_put(opts: any= "") {
  return request({
    method: 'put',
    url:  '/alipay/frontRcvResponse',
    data: opts
  });
}

/** frontRcvResponse */
function alipay_frontRcvResponse_delete(opts: any= "") {
  return request({
    method: 'delete',
    url:  '/alipay/frontRcvResponse',
    data: opts
  });
}

/** frontRcvResponse */
function alipay_frontRcvResponse_options(opts: any= "") {
  return request({
    method: 'options',
    url:  '/alipay/frontRcvResponse',
    data: opts
  });
}

/** frontRcvResponse */
function alipay_frontRcvResponse_patch(opts: any= "") {
  return request({
    method: 'patch',
    url:  '/alipay/frontRcvResponse',
    data: opts
  });
}

/** 手机H5支付 */
function alipay_mobilePay_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/alipay/mobilePay',
    data: opts
  });
}

/** 电脑支付 */
function alipay_pcPay_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/alipay/pcPay',
    data: opts
  });
}

/** 音频转文字 */
function AudioController_audioConvertToText_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/AudioController/audioConvertToText',
    data: opts
  });
}

/** app支付服务端 */
function alipay_appPay_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/alipay/appPay',
    data: opts
  });
}

/** 支付宝支付回调(二维码、H5、网站) */
function alipay_callBack_post(opts: any= "") {
  return request({
    method: 'post',
    url:  '/alipay/callBack',
    data: opts
  });
}

/** frontRcvResponse */
function alipay_frontRcvResponse_get(opts: any= "") {
  return request({
    method: 'get',
    url:  '/alipay/frontRcvResponse',
    params: opts
  });
}

/** frontRcvResponse */
function alipay_frontRcvResponse_head(opts: any= "") {
  return request({
    method: 'head',
    url:  '/alipay/frontRcvResponse',
    data: opts
  });
}

export {
  weixinpay_wxpayBack_get,
  weixinpay_wxpayBack_post,
  sys_wechatLogin_post,
  sys_wechatLogin_put,
  table_tableColumnList_get,
  table_tableNameList_get,
  weixinpay_callBack_post,
  weixinpay_h5pay_post,
  weixinpay_mobileCallBack_get,
  weixinpay_mobileCallBack_post,
  weixinpay_mpPay_post,
  weixinpay_payFinishCallBack_post,
  weixinpay_qcPay1_post,
  weixinpay_qcPay2_post,
  sys_syslisence_systemurl_serverUrl_put,
  sys_syslisence_lisenceId_get,
  sys_user_delete_delete,
  sys_user_getInfo_userId_get,
  sys_user_info_get,
  sys_user_info_userId_get,
  sys_user_list_get,
  sys_user_password_put,
  sys_user_save_post,
  sys_user_update_put,
  sys_user_usertype_get,
  sys_validate_get,
  sys_syslisence_apply_post,
  sys_syslisence_grant_lisenceId_put,
  sys_syslisence_register_post,
  sys_syslisence_registerAgain_post,
  sys_syslisence_systemname_systemName_put,
  sys_syslisence_get,
  sys_syslisence_post,
  sys_syslisence_put,
  sys_syslisence_delete,
  sys_sysdictitem_batch_post,
  sys_sysdictitem_batch_put,
  sys_sysdictitem_condition_get,
  sys_sysdictitem_dictItemId_get,
  sys_sysdict_put,
  sys_sysdict_delete,
  sys_sysdict_batch_post,
  sys_sysdict_batch_put,
  sys_sysdict_condition_get,
  sys_sysdict_dictId_get,
  sys_sysdictitem_get,
  sys_sysdictitem_post,
  sys_sysdictitem_put,
  sys_sysdictitem_delete,
  sys_schedule_pause_get,
  sys_schedule_resume_get,
  sys_schedule_run_get,
  sys_schedule_save_post,
  sys_schedule_update_put,
  sys_scheduleLog_info_logId_get,
  sys_scheduleLog_list_get,
  sys_sinaLogin_post,
  sys_sinaLogin_put,
  sys_sysdict_get,
  sys_sysdict_post,
  sys_qqLogin_put,
  sys_role_delete_delete,
  sys_role_info_roleId_get,
  sys_role_list_get,
  sys_role_save_post,
  sys_role_select_get,
  sys_role_update_put,
  sys_schedule_delete_delete,
  sys_schedule_info_jobId_get,
  sys_schedule_list_get,
  sys_oss_saveConfig_put,
  sys_oss_upload_post,
  sys_oss_upload_put,
  sys_qqLogin_post,
  sys_menu_save_post,
  sys_menu_select_get,
  sys_menu_update_put,
  sys_oss_config_get,
  sys_oss_delete_delete,
  sys_oss_list_get,
  sys_oss_saveConfig_post,
  sys_generator_queryTables_get,
  sys_isLogin_get,
  sys_log_list_get,
  sys_login_post,
  sys_login_put,
  sys_logout_get,
  sys_logout_post,
  sys_menu_delete_menuId_delete,
  sys_menu_info_menuId_get,
  sys_menu_list_get,
  sys_menu_nav_get,
  sys_engineParamController_put,
  sys_engineParamController_delete,
  sys_engineParamController_getOptionValue_engineId_paramKey_get,
  sys_engineParamController_updateEngineParam_put,
  sys_generator_code_get,
  sys_generator_codeMany_get,
  sys_generator_datasource_get,
  sys_generator_dbInfos_get,
  sys_generator_isInitDB_get,
  sys_generator_list_get,
  sys_generator_queryColumns_get,
  sys_config_update_put,
  sys_engineController_get,
  sys_engineController_post,
  sys_engineController_put,
  sys_engineController_delete,
  sys_engineController_getOptionValue_get,
  sys_engineController_engineId_get,
  sys_engineParamController_get,
  sys_engineParamController_post,
  social_syswechatuser_wechatUserId_get,
  sys_config_delete_delete,
  sys_config_info_id_get,
  sys_config_list_get,
  sys_config_save_post,
  social_syswechatuser_delete,
  social_syswechatuser_unbind_delete,
  social_saveConfig_post,
  social_saveConfig_put,
  social_sysqquser_get,
  social_sysqquser_delete,
  social_sysqquser_unbind_delete,
  social_sysqquser_qqUserId_get,
  social_syssinauser_get,
  social_syssinauser_delete,
  social_syssinauser_unbind_delete,
  social_syssinauser_sinaUserId_get,
  social_syswechatuser_get,
  login_info_head,
  login_info_post,
  login_info_put,
  login_info_delete,
  login_info_options,
  login_info_patch,
  social_config_get,
  social_getSysUserIdThruQqUserId_get,
  social_getSysUserIdThruSinaUserId_get,
  social_getSysUserIdThruWechatUserId_get,
  excel_excelconfigexclude_get,
  excel_excelconfigexclude_post,
  excel_excelconfigexclude_put,
  excel_excelconfigexclude_delete,
  excel_excelconfigexclude_excelConfigExcludeId_get,
  excelfile_post,
  excelfile_toExportExcel_get,
  excelfile_toExportExcelModel_get,
  login_cas1_get,
  login_cas2_get,
  login_info_get,
  app_appname_get,
  app_server_get,
  captcha_get,
  excel_excelconfig_get,
  excel_excelconfig_post,
  excel_excelconfig_put,
  excel_excelconfig_delete,
  excel_excelconfig_info_get,
  excel_excelconfig_excelConfigId_get,
  excel_excelconfigByKey_get,
  excel_excelconfigByKeyOrTablename_get,
  api_sina_bindUser_put,
  api_sina_binding_get,
  api_sina_getSinaLoginUrl_get,
  api_testSession_get,
  api_weixin_bindUser_post,
  api_weixin_bindUser_put,
  api_weixin_binding_get,
  api_weixin_getMPLoginUrl_get,
  api_weixin_getWechatLoginUrl_get,
  api_weixin_mpBinding_get,
  api_precision_get,
  api_qq_bindUser_post,
  api_qq_bindUser_put,
  api_qq_binding_get,
  api_qq_getQQLoginUrl_get,
  api_signkey_get,
  api_signkey_put,
  api_signkey_vaidate_get,
  api_sina_bindUser_post,
  alipay_qcPay_post,
  api_cache_get,
  api_cache2_get,
  api_clientip_get,
  api_copyright_argot_get,
  api_ipspoof_get,
  api_jwtkey_get,
  api_logs_get,
  api_logsfile_get,
  api_mpToken_get,
  alipay_frontRcvResponse_post,
  alipay_frontRcvResponse_put,
  alipay_frontRcvResponse_delete,
  alipay_frontRcvResponse_options,
  alipay_frontRcvResponse_patch,
  alipay_mobilePay_post,
  alipay_pcPay_post,
  AudioController_audioConvertToText_post,
  alipay_appPay_post,
  alipay_callBack_post,
  alipay_frontRcvResponse_get,
  alipay_frontRcvResponse_head
};
