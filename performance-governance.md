# 性能优化方案

## DNS TCP 

通过预解析、预建连
- [dns-prefetch](./example/dns-prefetch.html)
- [preconnect](./example/preconnect.html)
- [prefetch](./example/prefetch.html)

### 连接复用

尽可能复用连接（ps：连接复用率 50% 以上）

- crossorigin=use-credentials，保证 credentials 一样 或者 crossorigin=anonymous preconnect
- 同一个 Host IP，不同域名也能复用连接（ps：wifi 移动网络切换IP变更，会降低复用率）
- 域名、IP 证书统一

### TCP Fast Open(TFO)
默认未打开，绝大部分浏览器不支持

## TSL 
Change Cipher Spec 后发送数据包，2 个 RTT

### TSL False Start
### TSL 1.3 

已支持 TSL False Start，只需要 1 个 RTT

### OCSP Stapling
后端 web server 开启 OCSP Stapling：让 web server 收到响应的时候同时请求 OCSP Server 来获取已经签名的 OCSP 信息。

### 证书浏览器支持
- Chrome：CRLSets
- Firefox：OneCRL
- Safari、Edge 系统控制价

- DV 证书，Domain Validation
- OV 证书：Organisation Validation
- EV 证书性能差

### 优化
- 保证证书链完整
- 启用 TLS 1.3
- 不滥用 EV 证书
- 开启 OSCP Stapling


## QUIC
- 连接迁移，Connection Migration 解决 WIFI、4G网络切换问题
- 协商秘钥 1 RTT 的握手：握手和 TCP 一次完成
- 数据流多路复用，解决队头阻塞

## 压缩

### gzip
### br 压缩
服务端处理慢，压缩高效，注意兼容问题
### 离线压缩
### 在线压缩

## 缓存

### 设置缓存头
```bash
#域名设置缓存
Cache-Control：max-age=86400

#斜线指的是访问路径,html 不缓存
location / {
　　Cache-control：no-store，max-age=0;
} 
```

## 减少重定向

## 浏览器性能

- 尽快返回 HTML
- 减少资源阻塞

## longtask 优化方案

- [longtask][https://web.dev/articles/optimize-long-tasks?utm_source=devtools&hl=zh-cn]


## 使用 service worker
[Workbox使用策略](https://www.cnblogs.com/yiyi17/p/12069528.html)

## Hybrid 通信性能损耗
- 减少通信次数
- 减少通信大小

## CDN

## Polyfill.io