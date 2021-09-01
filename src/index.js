import {
    h,
} from "snabbdom";
import patch from '../mysnabbdom/patch'

const container = document.getElementById("container");

// h函数：生成虚拟节点

// 普通文本节点上树
// const vnode = h('p',{},'hello ya')
// 嵌套有字节点上树
const vnode = h('ul',{},[
    h('li',{},'haha'),
    h('li',{},'xixi'),
    h('li',{},'wuwu'),
    h('li',{},'lala')
])


// 上树
patch(container,vnode)
