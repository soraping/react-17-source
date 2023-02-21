let tree =  {
    id: '1',
    title: '节点1',
    children: [
        {
            id: '1-1',
            title: '节点1-1'
        },
        {
            id: '1-2',
            title: '节点1-2',
            children: [{
                id: '2',
                title: '节点2',
                children: [
                {
                    id: '2-1',
                    title: '节点2-1'
                }
                ]
            }]
        },
        {
            id: '1-3',
            title: '节点1-3'
        }
    ]
}

function deepTraversal(tree){
    if(tree != null){
        console.log(tree.id)
        if(tree.children && tree.children.length>0){
            let children = tree.children
            for(var i=0; i<children.length; i++){
                deepTraversal(children[i])
            }
        }
    }
}

// deepTraversal(tree)

function bfsTraverse(tree){
    if(tree != null){
        let queue: any[] = []
        queue.push(tree)
        while (queue.length > 0) {
            let temp = queue.shift()
            console.log(temp.id)
            if(temp.children){
                for(var i = 0; i<temp.children.length; i++){
                    queue.push(temp.children[i])
                }
            }
        }
    }
}

bfsTraverse(tree)