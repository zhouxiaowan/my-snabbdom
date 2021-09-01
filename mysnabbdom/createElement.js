
export default function createElement(vnode){
    let domNode = document.createElement(vnode.sel)
    if(vnode.text != '' && (vnode.children===undefined || vnode.children.length===0)){
        domNode.innerText = vnode.text
        vnode.elm = domNode
    }else if(Array.isArray(vnode.children) && vnode.children.length>0){
        for(let i = 0;i<vnode.children.length;i++){
            let ch = vnode.children[i]
            let chDom = createElement(ch)
            domNode.appendChild(chDom)
        }
        vnode.elm = domNode
    }
    return vnode.elm
}