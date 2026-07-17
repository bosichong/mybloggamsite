export const siteInfo = {
  title: '我的博客',
  subtitle: '一个互联网游民的博客成长之路',
  description: '一款关于独立博客经营的模拟经营游戏',
};

export const navItems = [
  { href: '/', label: '首页', icon: '★' },
  { href: '/download', label: '下载', icon: '⬇' },
  { href: '/sponsor', label: '赞助', icon: '♥' },
  { href: '/circle', label: '圈子', icon: '✦' },
];

export const features = [
  { icon: '✎', title: '多样博文', desc: '生活日记、技术分享、文学创作、艺术作品，每种类型都有独特魅力' },
  { icon: '⚡', title: '技能系统', desc: '提升写作、技术、文学、编程、绘画等能力，解锁更多高级内容' },
  { icon: '🛠', title: '网站维护', desc: 'SEO优化、安全维护、页面美化，确保博客稳定运行' },
  { icon: '📚', title: '学习成长', desc: '自学编程、阅读名著、练习绘画，不断提升个人能力' },
  { icon: '🎮', title: '休闲娱乐', desc: '合理安排休息和娱乐，保持良好的创作状态' },
  { icon: '📊', title: '数据统计', desc: '详细的访问量、收入等数据统计，了解博客运营状况' },
];

export const chapters = [
  { title: '博客萌芽', years: '2002-2005', level: 20, desc: '故事始于2001年的一封神秘邮件，免费域名和主机，从此踏上博客之路。从零开始，在互联网的浪潮中寻找自己的声音。' },
  { title: '博客黄金时代', years: '2005-2010', level: 40, desc: '中文博客的黄金年代。建立友情链接，加入博客联盟，参与优秀博客大奖赛，在这个百家争鸣的时代书写精彩。' },
  { title: '博客转型', years: '2010-2015', level: 60, desc: '移动互联网浪潮来袭。从极客前沿到深度技术，从文学创作到哲学批判，不断探索内容的边界。' },
  { title: '博客挑战', years: '2015-2020', level: 80, desc: '内容创作者的时代。出版书籍，发起开源项目，IP授权合作，在激烈竞争中坚守初心。' },
  { title: '博客重生', years: '2020-2025', level: 100, desc: '回到最初的起点。涉足游戏开发，参与奖项评选，完成从博主到创作者的完整蜕变。' },
];

export const bilibili = {
  bvid: 'BV1CQJ56YEye',
  title: '复古像素游戏：我的博客正在制作中……',
  desc: '这是我的第一款独立开发的游戏，是一款模拟运营维护独立博客的游戏。',
  url: 'https://www.bilibili.com/video/BV1CQJ56YEye',
};

export const qqGroup = {
  number: '217840699',
  message: '欢迎加入讨论',
};

export const platforms = [
  { name: 'Windows', icon: '🪟', status: '开发中', note: '预计暑假发布试玩版本', class: 'is-warning' },
  { name: 'macOS', icon: '🍎', status: '开发中', note: '预计暑假发布试玩版本', class: 'is-warning' },
  { name: 'Linux', icon: '🐧', status: '开发中', note: '预计暑假发布试玩版本', class: 'is-warning' },
];

export const specs = [
  { label: '操作系统', value: 'Windows 7+ / macOS 10.13+ / Linux' },
  { label: '处理器', value: '双核 2.0 GHz 以上' },
  { label: '内存', value: '2 GB RAM' },
  { label: '显卡', value: '支持 OpenGL 3.3 / Vulkan 1.0' },
  { label: '存储', value: '约 200 MB 可用空间' },
  { label: '引擎', value: 'Godot 4.7' },
];

export const sponsorMethods = [
  {
    icon: '♥',
    title: '爱发电',
    desc: '通过爱发电平台赞助，支持独立游戏开发。你的每一份支持都是继续前行的动力。',
    link: '#',
    status: '即将开通',
    btnClass: 'is-warning',
    disabled: true,
  },
  {
    icon: '☕',
    title: '请喝咖啡',
    desc: '如果我的游戏给你带来了快乐，不妨请我喝杯咖啡。每一杯咖啡都是温暖的鼓励。',
    link: 'https://www.suiyan.cc/assets/images/zs.jpg',
    status: '扫码赞赏',
    btnClass: 'is-success',
    disabled: false,
    qrcode: 'https://www.suiyan.cc/assets/images/zs.jpg',
  },
  {
    icon: '📺',
    title: 'B站充电',
    desc: '在 Bilibili 为我充电，支持独立游戏开发。每一个充电都是前进的动力。',
    link: 'https://space.bilibili.com/275991552',
    status: '前往充电',
    btnClass: 'is-primary',
    disabled: false,
  },
  {
    icon: '★',
    title: 'GitHub Star',
    desc: '在 GitHub 上给项目点个 Star，这是最简单也最有力的支持方式。',
    link: 'https://github.com/bosichong/MyBlogGame',
    status: '立即前往',
    btnClass: 'is-primary',
    disabled: false,
  },
];

export const sponsorTiers = [
  { key: 'hao', name: '壕赞助', amount: '随意', color: 'is-error' },
  { key: 'dacan', name: '大餐赞助', amount: '¥ 88', color: 'is-warning' },
  { key: 'naicha', name: '奶茶赞助', amount: '¥ 18', color: 'is-primary' },
  { key: 'kafei', name: '咖啡赞助', amount: '¥ 6', color: 'is-success' },
];

export const sponsorsByTier: Record<string, { name: string; role: string; desc: string }[]> = {
  hao: [],
  dacan: [],
  naicha: [
    { name: 'liWanr', role: '赞助者', desc: '期待ing，尽快开发，加油！' },
  ],
  kafei: [],
  other: [
    { name: 'bosichong', role: '开发者 / 独立游戏人', desc: '游戏制作人，独立博客爱好者' },
  ],
};

export const blogAggregators = [
  { name: '博友圈', url: 'https://www.boyouquan.com/', desc: '博客人的朋友圈，将一个个散落在各处的孤岛连接成一片广袤无垠的新大陆！' },
  { name: '十年之约', url: 'https://www.foreverblog.cn/', desc: '一个人的寂寞，一群人的狂欢。汇聚坚持写作十年的独立博主。' },
  { name: 'BlogFinder', url: 'https://bf.zzxworld.com/', desc: '聚合优秀的个人博客，发掘优质的个人博客文章和内容。' },
  { name: '好站网', url: 'https://haozhan.wang/', desc: '发现好站，展示好站，收录优质中文独立网站。' },
  { name: 'BlogsClub', url: 'https://blogs.club/', desc: '致力于为每一位博主提供展示自我、互动交流的绝佳平台。' },
  { name: '有个站', url: 'https://yougezhan.com/', desc: '收录优质中文独立博客，探索网络世界的个性表达与深度思考。' },
  { name: '若梦博客', url: 'https://rm.bugung.com/', desc: '每一个博客都是精神的驿站，我们不同行，但彼此照亮。' },
  { name: '博客大联盟', url: 'https://blogalliance.cn/', desc: '发现值得反复阅读的独立博客，连接每一个独立思考的灵魂。' },
];

export const blogs = [
  { name: '碎言', url: 'https://www.suiyan.cc/', desc: '独立博客集合，收藏优质中文独立博客与 RSS 聚合。' },
  { name: '阮一峰的网络日志', url: 'https://www.ruanyifeng.com/blog/', desc: '科技爱好者周刊作者，每周分享值得阅读的科技内容。' },
  { name: 'Obaby', url: 'https://www.obaby.org.cn/', desc: '黑客程序媛 / 逆向工程师 / 人工智能学徒 / 用爱发电的独立开发者。' },
  { name: '素生', url: 'https://susheng.net/', desc: '误读人生，化人生活。在文字中找寻生活的另一种可能。' },
  { name: '二丫讲梵', url: 'https://wiki.eryajf.net/', desc: '学习记录分享，以技术笔记为主的个人知识库。' },
  { name: '孤斗', url: 'https://www.doomu.cn/', desc: '很酷的博客，分享设计、前端、生活、读书、思考等内容。' },
  { name: '秋风于渭水', url: 'https://www.zhangxiaocai.cn/', desc: '佛系码农的小窝，技术向个人博客。' },
  { name: '老T博客', url: 'https://www.laotblog.com/', desc: '法律、科技和生活。一位法律人的跨界思考。' },
  { name: '一派胡言', url: 'https://yipaihuyan.com/', desc: '如果你在纵容，就不要抱怨世道变坏。' },
  { name: '白熊阿丸的小屋', url: 'https://www.baixiongaw.cn/', desc: '在这里可以看到一个真实的我，书写我的一切。' },
  { name: '枫林灯语', url: 'https://www.maplelin.xyz/', desc: '深山踏红叶，耳畔闻鹿鸣。一个充满诗意的个人空间。' },
  { name: '莫比乌斯', url: 'https://www.mobius.fun/', desc: '写作，一场自我悖驳的旅程。写自己的生活，也写自己的讣告。' },
  { name: 'liWanr', url: 'https://liwanr.com/', desc: 'Every nobody is somebody. 每个人都有自己的故事。' },
  { name: '优世界', url: 'https://www.ushijie.com/', desc: '喜欢折腾博客、制作主题、分享前端技术的独立开发者。' },
  { name: '水拍石', url: 'https://shuipaishi.com/', desc: '追寻更好的自己。记录成长与思考的轨迹。' },
  { name: '八咫乌', url: 'https://zhidawo.com/', desc: '思君如满月，夜夜减清辉。' },
  { name: '愆伏', url: 'https://www.qianfu.com/', desc: '互联网杂谈，关于设计、技术与思考。' },
  { name: 'CC的数字花园', url: 'https://www.ccdd.xyz/', desc: '精神在这个世界上的一片自留地，不是传统意义上的博客。' },
  { name: '太隐', url: 'https://www.taiyin.cn/', desc: '一个人的思想发育史就是他的阅读史。' },
  { name: '理论派', url: 'https://www.lilunpai.com/', desc: '意识不止算法，心灵自有归途。哲学与科技的交汇。' },
  { name: '揆机', url: 'https://www.kuiji.xyz/', desc: '一个法哲学研究者的博客，记录学术之路和社会观察。' },
  { name: 'Yihui Xie', url: 'https://yihui.org/', desc: '一些书信。一些文章。R语言、knitr、blogdown 作者。' },
  { name: 'Owen的博客', url: 'https://www.owenblog.com/', desc: '关注技术、读书、摘抄、工具分享、工作流、深度工作等方向。' },
  { name: '映屿', url: 'https://www.yingyu.com/', desc: '关于互联网、书籍、生活琐事以及那些一闪而过的念头。' },
  { name: '特立独行的异类', url: 'https://www.yilei.com/', desc: '一张肆无忌惮的脸，一颗桀骜不驯的心。' },
  { name: 'ScarSu', url: 'https://www.scarsu.com/', desc: '96女性程序员，热爱前端技术，关注自我管理、心智成长与极简生活。' },
  { name: 'BORBER', url: 'https://www.borber.cn/', desc: '跌宕歌词，纵横书卷，不与遣年华。' },
  { name: '图灵技术域', url: 'https://www.turingtech.com/', desc: '徐奕的专栏——机器学习、软件工程、计算机大佬。' },
];

export const extraBloggers = [
  { blog: 'liWanr', author: 'liWanr', type: '综合', lv: 1, url: 'https://liWanr.com' },
  { blog: '一望成欢🍀', author: '一望成欢🍀', type: '综合', lv: 1, url: 'https://wanqingcheng.cn' },
  { blog: '姓王者的博客', author: '姓王者', type: '综合', lv: 1, url: 'https://xingwangzhe.fun/' },
  { blog: '秋风于渭水', author: '去年夏天', type: '综合', lv: 1, url: 'https://www.tjsky.net' },
  { blog: '热衷于的博客', author: '热衷于', type: '综合', lv: 1, url: 'https://zooyoo.top/' },
  { blog: '爱娃子', author: '爱娃子', type: '综合', lv: 1, url: 'https://www.aiwazi.com/' },
  { blog: '瓦匠不舟', author: '瓦匠', type: '综合', lv: 1, url: 'https://airy.ink' },
  { blog: '云白的地球online', author: 'deepwhitex', type: '综合', lv: 1, url: 'https://deepwhitex.com' },
  { blog: 'Mayx的博客', author: 'Mayx', type: '综合', lv: 1, url: 'https://mabbs.github.io' },
];
