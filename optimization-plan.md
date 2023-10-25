# 性能优化方案

## 连接复用率提升

通过预解析、预建连、尽可能复用连接

[example](/example/prefetch.html)

## longtask 优化方案

[longtask][https://web.dev/articles/optimize-long-tasks?utm_source=devtools&hl=zh-cn]

## 设置缓存头

```bash
#域名设置缓存
Cache-Control：max-age=86400

#斜线指的是访问路径,html 不缓存
location / {
　　Cache-control：no-store，max-age=0;
} 
```
## 使用 service worker
[Workbox使用策略](https://www.cnblogs.com/yiyi17/p/12069528.html)

