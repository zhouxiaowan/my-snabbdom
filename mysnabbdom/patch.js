import vnode from "./vnode";
import createElement from "./createElement";
export default function (oldVnode,newVnode){
    // 判断传入的第一个参数，是dom节点还是虚拟节点
    if(oldVnode.sel === ''||oldVnode.sel === undefined){
        console.log(oldVnode)
        oldVnode = vnode(oldVnode.tagName.toLowerCase(),{},[],undefined,oldVnode)
    }

    if(oldVnode.sel == newVnode.sel && oldVnode.key == newVnode.key){
        console.log("是同一节点")
    }else{
        console.log("不是同一个节点，暴力插入新的，删除旧的")
        let newVnodeElm = createElement(newVnode)
        if(oldVnode.elm.parentNode && newVnodeElm){
            oldVnode.elm.parentNode.insertBefore(newVnodeElm,oldVnode.elm)
        }
        oldVnode.elm.parentNode.removeChild(oldVnode.elm)


    }
}