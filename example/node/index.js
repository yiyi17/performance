import * as os from 'os'
// 您的代码段
// 包括 cpu 信息
const cpus = os.cpus();
console.log(JSON.stringify(cpus));
// 1 5 15：过去 x 分钟的平均CPU利用率) / 100
const loadavg = os.loadavg()
console.log(loadavg);
// 空闲内存量
const freemem = os.freemem()
console.log(freemem);
//该方法返回 Node.js 进程的内存使用情况的对象
/**
 * rss 是驻留集大小, 是给这个进程分配了多少物理内存（占总分配内存的一部分）
一般这个指标上升，可能会发生内存泄漏
heapTotal 和 heapUsed 代表 V8 的内存使用情况。
external 代表 V8 管理的，绑定到 Javascript 的 C++ 对象的内存使用情况。
 */
const memoryUsage = process.memoryUsage()
console.log(memoryUsage);


