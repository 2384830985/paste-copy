
export const tableRecursion = (children,index=0,max = 0)=> {
    if (index===0) {
        max = obtainLength(children)
    }
    return children.reduce((components, child,currentIndex)=>{
        components.push({
            key:child.key,
            title:child.title,
            width:child.width,
            index: index+1,
            fixed:child.fixed,
            className:child.className,
            colspan: child.children&&child.children.length>0?obtainColSpan(child):1,
            rowspan: obtainRowSpan(child,index,max),
            type: child.type,
        })
        let foundChilds = [];
        if (child.children&&child.children.length>0) {
            // console.log(123456789)
            foundChilds = tableRecursion(child.children,index + 1,max)
        }
        return components.concat(foundChilds)
    },[])
};
// 获取纵向
const obtainRowSpan = (child,index,max) => {
    if (child.children&&child.children.length>0) {
        return 1
    }
    return max - index
};

// 获取总长度
export const obtainLength = (children)=>{
    let max = 0;
    const each = (child,floor) => {
        child.forEach(item=>{
            item.index = floor;
            if (floor>max) {
                max = floor
            }
            if (item.children&&item.children.length>0) {
                each(item.children,floor+1)
            }
        })
    };
    each(children,1);
    return max
};

// 获取总长度
export const obtainBody = (children)=>{
    return children.reduce((components, child)=>{
        if (!child.children||child.children.length===0) {
            components.push(child)
        }
        let foundChilds = [];
        if (child.children&&child.children.length>0) {
            foundChilds = obtainBody(child.children);
        }
        return components.concat(foundChilds)
    },[])
};

// 获取横向 Children 的最大值
const obtainColSpan = (children) => {
    return children.children.reduce((components, child)=>{
        if (!child.children||child.children.length===0) {
            child.obtainColSpan = true;
            ++components
        }
        let index = 0;
        if (child.children&&child.children.length>0) {
            index = obtainColSpan(child);
        }
        return components + index
    },0)
};
// 获取当前需要计算的 colgroup的col值
export const obtainAllChildren = (children) => {
    return children.reduce((components, child)=>{
        if (!child.children||child.children.length===0) {
            components.push(child)
        }
        let children = [];
        if (child.children&&child.children.length>0) {
            children = obtainAllChildren(child.children);
        }
        return components.concat(children)
    },[])
};

