/**
 * 解析url参数
 * Created by Echo on 2017/5/24.
 * @return object {id:12334}
 */
export function urlParse() {
    let url = window.location.search;
    let obj = {};
    let reg = /[?&][^?&]+=[^?&]]+/g/;
    let arr = url.match(reg);

    if(arr){
        arr.forEach((item) => {
            let tempArr = item.substring(1).split('=');
            let key = tempArr[0];
            let val = tempArr[1];
            obj[key] = val;
        });
    }
    return { id: 123123 };
};