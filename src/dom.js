window.dom = {
    //创建节点
    create(string) {
      //可以用template标签来包裹其他其他html标签
      const container = document.createElement("template");
      container.innerHTML = string.trim();
      return container.content.firstChild;
    },
    //在节点之后插入一个兄弟节点
    after(node, node2) {
      //在节点的下一个兄弟节点之前插入一个节点
      node.parentNode.insertBefore(node2, node.nextSibling);
    },
    //在节点之前插入兄弟节点
    before(node, node2){
      node.parentNode.insertBefore(node2, node);
    },
    //给节点增加一个子节点
    append(parent, node){
      parent.appendChild(node)
    },
    //给节点增加一个父节点
    wrap(node, parent){
      //先在节点之前插入一个兄弟节点，然后将第二个节点作为子节点插入到第一个节点
      dom.before(node, parent)
      dom.append(parent, node)
    },
    //删除节点
    remove(node){
      node.parentNode.removeChild(node)
      return node
    },
    //删除节点的所有子节点
    empty(node){
      //const childNodes = node.childNodes
      //const {childNodes} = node
      //childNodes会在发生改动之后动态变化
      const array = []
      let x = node.firstChild
      while(x){
        array.push(dom.remove(node.firstChild))
        x = node.firstChild
      }
      return array
    },
    // 重载-根据不同参数返回不同结果
    //修改或返回html标签的attribute
    attr(node, name, value){
      if(arguments.length === 3){
        node.setAttribute(name, value)
      }else if(arguments.length === 2){
        return node.getAttribute(name)
      } else {
        console.log("error")
      }
    },
    //修改或返回html标签的text
    text(node, string){ // 适配
      if(arguments.length === 2){
        if('innerText' in node){
          node.innerText = string 
        }else{
          node.textContent = string 
        }
      }else if(arguments.length === 1){
        if('innerText' in node){
          return node.innerText
        }else{
          return node.textContent
        }
      }
    },
    //修改或返回html标签的内容
    html(node, string){
      if(arguments.length === 2){
        node.innerHTML = string
      }else if(arguments.length === 1){
        return node.innerHTML 
      }
    },
    style(node, name, value){
      //node.style[name] name可能为border/color等等变量，不能使用node.style.name
      if(arguments.length===3){
        // dom.style(div, 'color', 'red')
        node.style[name] = value
      }else if(arguments.length===2){
        if(typeof name === 'string'){
          // dom.style(div, 'color')
          return node.style[name]
        }else if(name instanceof Object){
          // dom.style(div, {color: 'red'})
          const object = name
          for(let key in object){
            node.style[key] = object[key]
          }
        }
      }
    },
    class: {
      add(node, className){
        node.classList.add(className)
      },
      remove(node, className){
        node.classList.remove(className)
      },
      has(node, className){
        return node.classList.contains(className)
      }
    },
    //事件监听
    on(node, eventName, fn){
      node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn){
      node.removeEventListener(eventName, fn)
    },
    //查询函数
    find(selector, scope){
      return (scope || document).querySelectorAll(selector)
    },
    parent(node){
      return node.parentNode
    },
    children(node){
      return node.children
    },
    siblings(node){
      return Array.from(node.parentNode.children)
      .filter(n => n !== node)
    },
    next(node){
      let x = node.nextSibling
      //略过文本节点
      while(x && x.nodeType === 3){
        x = x.nextSibling
      }
      return x
    },
    previous(node){
      let x = node.previousSibling
      //略过文本节点
      while(x && x.nodeType === 3){
        x = x.previousSibling
      }
      return x
    },
    each(nodeList, fn){
      for(let i = 0; i < nodeList.length; i++){
        fn.call(null, nodeList[i])
      }
    },
    index(node){
      const list = dom.children(node.parentNode)
      let i
      for(i = 0; i < list.length; i++){
        if(list[i] === node){
          break
        }
      }
      return i
    }
  };