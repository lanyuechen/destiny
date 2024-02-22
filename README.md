# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# destiny

```js
// 五行在四季中盛衰表现
盛衰 = ['旺', '相', '休', '囚', '死']
// 春季万木复苏，木为“旺”，木生火、火属“相”。水生木，水属“休”。
// 夏季流火之季，火为“旺”。
// 秋季收获之季，金为“旺”。

// 是指五行在十二个月中的发展变化过程
十二宫 = 长生、沐浴、冠带、临宫、帝旺、衰、病、死、墓、绝、胎、养

四时 = ['春', '夏', '秋', '冬']
五行 = ['金', '木', '水', '火', '土']
五方 = ['东', '南', '西', '北', '中']

// 黄道黑道
吉凶 = ['吉', '吉', '凶', '凶', '吉', '吉', '凶', '吉', '凶', '凶', '吉', '凶']
简记 = ['道', '远', '几', '时', '通', '达', '路', '遥', '何', '日', '还', '乡']
神煞 = ['青龙', '明堂', '天刑', '朱雀', '金匮', '天德', '白虎', '玉堂', '天牢', '玄武', '司命', '勾陈']

// 四柱八字
天干 = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
阴阳 = ['阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴']
五行 = ['木', '木', '火', '火', '土', '土', '金', '金', '水', '水']
五方 = ['东', '东', '南', '南', '中', '中', '西', '西', '北', '北']

生肖 = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']
地支 = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
阴阳 = ['阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴']
五行 = ['水', '土', '木', '木', '土', '火', '火', '土', '金', '金', '土', '水']


```


```js
// 八字推算
年柱 = (年份 - 3) % 10

```


- [黄道吉凶推算](https://www.163.com/dy/article/HNO582GA0552V1TU.html)
- [四柱八字推算](https://baike.baidu.com/item/%E5%9B%9B%E6%9F%B1/750027#:~:text=%E5%9B%9B%E6%9F%B1_%E7%99%BE%E5%BA%A6%E7%99%BE%E7%A7%91&text=%E5%9B%9B%E6%9F%B1%E6%98%AF%E3%80%8A%E6%98%93%E7%BB%8F%E3%80%8B%E4%B8%AD,%E6%97%A5%E6%9F%B1%E5%92%8C%E6%97%B6%E6%9F%B1%E3%80%82)

