# 页面体验相关性

TODO: 相关文章发布

## DNS 与首屏相关性

从 p95 数据分析可以看，页面加载和 DNS `没有相关性`。

1、分析：内网系统的 DNS 耗时很低，小于 50ms；外网服务会相对高一些，在 100ms

2、那么是不是，DNS 就无需监控了，并不是，

- 如果 100ms 以上同期增长比较多，认为异常，需要运维协同观测（可能是运维更新调整）
- 长期看同环比是否增长，需要可观测

## TTFB 与首屏相关性

从 p95 数据分析可以看， TTFB 与首屏`有相关性`

### Cookie 对 TTFB 影响

一般 cookie 限制为 `4kb`,静态域名可以配置无 cookie（TODO:影响待数据验证）

## DOM 解析耗时

从 p95数据看，DOM 解析耗时和首屏`相关性明显`

1、分析：domInteractive - responseEnd，主要是解析 DOM 树和 CSSOM 树

2、优化：减少同步 JS

## 资源的加载

从 p95数据看，资源的加载与首屏体验`线性相关`

1、分析：资源加载计算方式 loadEventStart - domContentLoadedEventEnd，这里面有 HTML 的解析、同步 JS 的加载

2、优化
- 减少同步 JS
- 资源加载加速：CDN
- 预加载 
- 合理使用缓存

## 首个 API 接口与首屏相关性

## prefetch dns-prefetch preconnect 与首屏相关性

## 重定向与首屏性能相关性
