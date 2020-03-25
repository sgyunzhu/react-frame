import axios from 'axios';
import qs from 'qs';
import { useImperativeHandle } from 'react';

axios.defaults.baseURL = 'https://www.baidu.com';

/**
 * 对请求参数进行拦截，然后进行对应的业务逻辑处理，比如请求参数的加解密。。。
 */
axios.interceptors.request.use((req) => {
    // 对请求参数的加解密就是在这个位置进行处理，处理完之后再将其进行返回
    console.log(req);
    return req;
}, (err) => Promise.reject(err))

/**
 *  对相应response 进行拦截处理
 */
axios.interceptors.response.use((res) => res, (err) => {
    handle(err);
})

/**
 * handle 对请求异常进行处理
 * @params {object} err: 异常对象
 */

function handle (err) {

}


