# High Performance Development Guidelines

## 通过 const 和 let 声明提升性能

const 和 let 是块作用域，相对比 var，可能会更早的让垃圾回收程序介入，尽早回收应该回收的内存

## 隐藏类和删除操作

v8 在将解释后的 JS 编译为实际的机器码的时候会利用隐藏类

1、避免先创建再补充（ready-fire-aim）式的动态属性赋值

2、避免使用 delete，使用 delete 会导致生成相同的隐藏类片段，最佳实践是把不需要的属性设置为 null

3、关注闭包

4、静态分配与对象池

减少 GC 次数

- 不要动态创建矢量对象,频繁调用会触发 GC
```js
// bad case
function addVector(a, b) {
  let resultant = new Vector()
  resultant.x = a.x + b.x
  resultant.y = b.y + b.y
  return resultant
} 

// good case
function addVector(a, b, resultant) {
  resultant.x = a.x + b.y
  resultant.y = a.y + b.y
  return resultant
}
```

- 使用对象池

使用数组，因为没有对象的初始化，GC 就探测不到对象的更替，但避免动态分配操作
```js
function VectorPoll(num) {
  const vectorList = new Array(num).fill(null)
  const vector = new Vector()
  const allocate = function() {
    const index = vectorList.findIndex(item => item === null)
    if(index != -1) {
      vectorList[index] = vector
    }else {
      console.log('对象池已经满了')
    }
  }
  return {
    allocate
  }
}

const vectorPoll = new VectorPoll(10)
let v1 = vectorPoll.allocate()
```
