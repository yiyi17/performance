#  防劣化

## 网络巡检
- DNS
- TCP
- 连接复用率
- TTFB

以上指标巡检同环比

## 配置巡检
- header 缓存策略
- 证书

## 资源巡检
- HTML 大小
- 首屏 JS 大小
- 图片
  - 类型
  - 大小

以上指标巡检大小（确定阈值），同环比


## 长任务巡检
[longtasks定义](https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceLongTaskTiming)
- longtasks，长任务认为影响页面的体验，产生卡顿，考虑 webPageTest 私有化部署
- 50ms 以上的任务

### 构建火焰图



## 线上监控、巡检
- 线上指标的巡检：针对指定的线上指标，定时的检查是否存在问题，每周记录巡检次数、巡检问题数、同环比记录，如果可能创建 task，计算 task 修复数。
 
## 与构建结合
- 可能会存在构建时间增长的问题，要异步，可能在部署的时候进行卡点更好（部署前回调一下）


## 预警

