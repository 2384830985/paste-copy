/**
 * 判断参数是否是其中之一
 * @param value
 * @param valueList
 * @returns {boolean}
 */
export function oneOf (value,valueList){
    if (valueList.indexOf(value)===-1) {
        return false
    }
    return true
}

// 获取当前大数组
/**
 * 获取上级组件
 * @param context 当前组件 this
 * @param componentName 需要寻找的上级组件的 name
 */
export function findComponentUpward(context,componentName) {
    let parent = context.$parent;
    let name = parent.$options.name;
    // name 考虑可能会没有name 的情况
    // 1.必须得有当前的上级组件 &&
    //      1.可能会没有 name ||
    //      2.name 不等于 ||
    while (parent && (!name || [ componentName ].indexOf(name) < 0)){
        parent = parent.$parent;
        if (parent) {
            name = parent.$options.name;
        }
    }
    return parent
}

/**
 * 获取所有上级
 * @param context 当前组件 this
 * @param componentName 需要寻找的上级组件的 name
 */
export function findComponentsUpward(context,componentName) {
    let parent = context.$parent;
    let parents = [];
    if (parent) {
        if (parent.$options.name === componentName) {
            parents.push(parent)
        }
        return parents.concat(findComponentsUpward(parent,componentName))
    }else {
        return parents
    }
}

/**
 * 获取下级 最近的一个
 * @param context 当前组件 this
 * @param componentName 需要寻找的下级组件的 name
 */
export function findComponentDownward(context,componentName) {
    let parent = context.$children;
    let children = null;
    if (parent.length) {
        for(let item of parent){
            if (componentName===item.$options.name) {
                children = item;
                break
            }else {
                children = findComponentDownward(item,componentName);
                if (children) {
                    break
                }
            }
        }
    }
    return children
}

/**
 * 获取下级所有的相同子节点 componentName
 * @param context 当前组件 this
 * @param componentName 需要寻找的下级组件的 name
 */
export const findComponentsDownward = (context,componentName)=>{
    return context.$children.reduce(function (components, child) { // 累加器
        if (child.$options.name===componentName) {
            components.push(child);
        }
        const foundChilds = findComponentsDownward(child,componentName);
        return components.concat(foundChilds)
    },[])
};

/**
 * 获取兄弟组件
 * @param context 当前组件 this
 * @param componentName 需要寻找的相同兄弟组件的 name
 * @param exceptMe 是否需要当前自己的节点 true 是不需要 false 是需要
 */
export const findBrothersComponents = (context,componentName,exceptMe = false)=>{
    let arr = context.$parent.$children.filter(function (item) { // 过滤
        return item.$options.name === componentName
    });
    let index = arr.findIndex(function (item) { // 找到当前的组件的下标
        return item._uid === context._uid
    });
    if (exceptMe) { // 是否需要当前的组件
        arr.splice(index,1)
    }
    return arr
};


// assist.js，部分代码省略
const typeOf = (obj)=> {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]'  : 'boolean',
        '[object Number]'   : 'number',
        '[object String]'   : 'string',
        '[object Function]' : 'function',
        '[object Array]'    : 'array',
        '[object Date]'     : 'date',
        '[object RegExp]'   : 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]'     : 'null',
        '[object Object]'   : 'object'
    };
    return map[toString.call(obj)];
}
// deepCopy
/**
 * 深拷贝
 * @param data
 * @returns {*}
 */
export function deepCopy(data) {
    const t = typeOf(data);
    let o;

    if (t === 'array') {
        o = [];
    } else if ( t === 'object') {
        o = {};
    } else {
        return data;
    }

    if (t === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if ( t === 'object') {
        for (let i in data) {
            o[i] = deepCopy(data[i]);
        }
    }
    return o;
}
