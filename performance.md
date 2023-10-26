# Performance

## Performance API
- performance.getEntries()
- performance.now()
  - 精度精确到微秒（μs）。
  - 获取的是把页面打开时间点作为基点的相对时间，不依赖操作系统的时间。
- performance.mark()
- performance.getEntriesByType(type)


## 分位值选择

Core Web Vitals时就推荐使用`75分位数`来确保大多数用户的体验，对性能有高追求的场景也可以采用`90分位数`等，如对后端接口API耗时的性能统计等往往使用`95分位数`这样比较高要求的统计指标。对于同样的性能指标，更高的分位数意味着有更多的用户享受到了高水平的性能体验

## 指标

### 常用指标
- TTFB
- FP
- FCP
- DOMContentLoaded
- Load

### 其他值得分析的指标

- DNS
- TCP
- SSL
- 连接复用率：当 DNS 和 TCP 都为 0 的时候，可能是因为这一次请求直接复用了已经存在的 TCP 连接
- 秒开率：极致用户的占比

### 度量首屏
- FP
- FCP
- FMP
- TTI
- LCP

ps: load 往往很晚，和首屏没有直接关系

#### 度量FMP
- LCP：近似值
- Hero Element： element-timing 计算
- 关键逻辑计时

#### 度量首屏选择标准
- LCP：开发成本低，适合大部分页面
- Hero Element：偏展示，且有重点元素的页面
- 关键业务逻辑场景：关键逻辑计时

### 度量流畅度
- FPS
- Long Tasks API

## Core Web Vitals

- LCP：75 分位，推荐值 2.5s 以内
- FID：75 分位，推荐值 100ms 以内，更好的体验可以看 90~95 分位
- CLS：75 分位，推荐值 0.1 以内
- INP


## 页面加载到发起请求

- 可以通过 `performance` 中的第一个 `xmlhttprequest` 来记录

## API 相关
- API 体积和 API 加载耗时：通过 `performance` 的 `xmlhttprequest`,看传输 `duration` 和 `transferSize`
  - API `700ms` 以内，API 体积尽量控制在 `230kb` 以下


## 重定向耗时

fetchStart - navigationStart（近似值）

redirectEnd - redirectStart，同域限制，跨域的取不到

## 字体对性能影响

字体影响 CLS，字体是发现使用才去加载

- 使用系统字体
- 字体预加载，preload（ps：顺序一致）
- 使用压缩字体
- 剪切字体（font-spider）
- font-display: optional

### 字体类型
- TTF/OTF 尽量减少使用，没有压缩，体积大
- SVG，兼容不好
- EOT，兼容不好，只有 IE 支持
- WOFF/WOFF2，内置压缩，WOFF2 比 WOFF 压缩比更高

## CDN 缓存命中率

