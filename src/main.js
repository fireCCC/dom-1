const log = console.log.bind(console)

// const div = dom.create("<div>newDiv</div>");
// log("dom.create", div);

// dom.after(test, div);
// let textP = test.parentNode
// log("dom.after", textP)

// const div3 = dom.create('<div id="parent"></div>')
// dom.wrap(test, div3)
// log("dom.wrap", div3)

// const nodes = dom.empty(window.empty)
// log("dom.empty", nodes)

// dom.attr(test, 'title', 'Hi, I am Amber')
// const title = dom.attr(test, 'title')
// log("dom.attr", `title: ${title}`)

// dom.text(test, '你好，这是新的内容')
// log("dom.text", dom.text(test))

// dom.style(test, {border: '1px solid red', color: 'blue'})
// log("dom.style", "border", dom.style(test, 'border'))
// dom.style(test, 'border', '1px solid black')

// dom.class.add(test, 'red')
// dom.class.add(test, 'blue')
// dom.class.remove(test, 'blue')
// log("dom.class.has", dom.class.has(test,'blue'))

// const fn = ()=>{
//   console.log('点击了')
// }
// dom.on(test, 'click', fn)
// dom.off(test, 'click', fn)


// const testDiv = dom.find('#test')[0]
// log("dom.find", testDiv)
// const test2 = dom.find('#test2')[0]
// log("dom.find-scope-test2", dom.find('.red', test2)[0])

// log("dom.parent", dom.parent(test))

// const s2 = dom.find('#s2')[0]
// log("dom.siblings", dom.siblings(s2))
// log("dom.next", dom.next(s2))
// log("dom.previous", dom.previous(s2))

// const t = dom.find('#travel')[0]
// dom.each(dom.children(t), (n)=> dom.style(n, 'color', 'red'))

// log("dom.index", dom.index(s2))

// 获取对应的元素
const div = dom.find('#test>.red')[0]
// 设置 div.style.color
dom.style(div, 'color', 'red') 

// 获取多个 div.red 元素
const divList = dom.find('.red')
// 遍历 divList 里的所有元素
dom.each(divList, (n) => console.log(n))