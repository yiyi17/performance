## 系统层面

- 内存使用

- CPU 使用率

- 系统负载，使用中进程/等待进行的进程数

- 系统 QPS

- 硬性性能指标

- 磁盘使用率

- GC 统计: 频繁 GC 会影响 nodejs 性能体验

## 进程层面
- 堆内（total 和 used）和堆外内存统计

- 堆内各个内存空间占用内存统计

- 垃圾回收（GC）占整个进程运行时间比例

- QPS

- 按 1s、15s、30s、60s 的 CPU 统计

- libuv 句柄，定时器统计


### node 监控

<img src="./node_monitor.awebp"/>