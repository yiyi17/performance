## 对于 Node.js 自带的分析工具：

- 启动相关应用的时候，node 需要带上 --prof 参数；
- 再做相关的性能测试，结束后，能在 node 运行目录下生成 isolate-0xnnnnnnnnnnnn-v8.log 的文件；
- 然后再运行 node --prof-process isolate-0xnnnnnnnnnnnn-v8.log > processed.txt ；
- 最后打开 processed.txt 文件，就能看到相关的结果了；

显然，它只能做 CPU 分析。

## 其他工具
- [flamebearer](https://github.com/mapbox/flamebearer)
- [v8-profiler-node8](https://www.npmjs.com/package/v8-profiler-node8)