/* ============================================
   小小打字员 · 关卡配置文件
   把本文件放在「HappyType.html」的同目录即可生效。

   · levels 数组的顺序就是关卡顺序（第 1 个=第 1 关），不需要写 id 字段
   · 想在中途加一关：按顺序把新关卡对象插进 levels 数组即可，
     无需调整其他字段；但已存的星级进度会按新位置顺移
     （如原第 5 关的星星会归到插入后的第 6 关），
     需要重置进度可在浏览器控制台执行：
     localStorage.removeItem('typing-kids-progress-v1')
   · color 可选：不写会自动随机配色

   字段说明：
     name        关卡名称（显示在卡片上）
     kind        lesson=指法课堂 / letters=字母练习 / words=单词短句 / timer=限时挑战
     chars       本关练习的字符（lesson / letters 用）
     count       本关要打多少个（lesson / letters / words 用）
     words       单词或短句列表（kind=words 用）
     time        限时秒数（kind=timer 用）
     desc        卡片上的说明文字
     badge       卡片左上角标签
     color       卡片颜色（可选，不写自动随机）
     alwaysOpen  true=此关不锁定，无需通关也能进入
   ============================================ */
window.KID_TYPING_CONFIG = {
  "levels": [
    {
      "name": "指法小课堂",
      "kind": "lesson",
      "chars": "fj",
      "count": 8,
      "desc": "先认识基本键，学会放手指",
      "badge": "入门",
      "color": "#4D9DE0"
    },
    {
      "name": "基本键左手",
      "kind": "letters",
      "chars": "asdfg",
      "count": 20,
      "desc": "左手 ASDFG",
      "badge": "基本键",
      "color": "#E85D3F"
    },
    {
      "name": "基本键右手",
      "kind": "letters",
      "chars": "hjkl;",
      "count": 20,
      "desc": "右手 HJKL；",
      "badge": "基本键",
      "color": "#F09B2E"
    },
    {
      "name": "基本键训练",
      "kind": "letters",
      "chars": "asdfghjkl;",
      "count": 20,
      "desc": "左手 ASDFG · 右手 HJKL;",
      "badge": "基本键",
      "color": "#7B6CF0"
    },
    {
      "name": "上排键左手",
      "kind": "letters",
      "chars": "qwert",
      "count": 20,
      "desc": "QWERT 左手往上伸",
      "badge": "上排键",
      "color": "#E85D3F"
    },
    {
      "name": "上排键右手",
      "kind": "letters",
      "chars": "yuiop",
      "count": 20,
      "desc": "YUIOP 右手往上伸",
      "badge": "上排键",
      "color": "#FF9F1C"
    },
    {
      "name": "上排键混合",
      "kind": "letters",
      "chars": "qwertyuiop",
      "count": 20,
      "desc": "上排混合练习",
      "badge": "上排键",
      "color": "#E8537A"
    },
    {
      "name": "上中排混合练习",
      "kind": "letters",
      "chars": "qwertyuiopasdfghjkl;",
      "count": 20,
      "desc": "上排混合练习",
      "badge": "上排键",
      "color": "#43AA8B"
    },
    {
      "name": "下排键左手",
      "kind": "letters",
      "chars": "zxcvb",
      "count": 24,
      "desc": "ZXCVB 左手往下伸手",
      "badge": "下排键",
      "color": "#E8537A"
    },
    {
      "name": "下排键右手",
      "kind": "letters",
      "chars": "nm,./",
      "count": 24,
      "desc": "NM,./ 右手往下伸手",
      "badge": "下排键",
      "color": "#F09B2E"
    },
    {
      "name": "下排键混合",
      "kind": "letters",
      "chars": "zxcvbnm,./",
      "count": 24,
      "desc": "双手往下伸手",
      "badge": "下排键",
      "color": "#E8537A"
    },
    {
      "name": "字母大挑战",
      "kind": "letters",
      "chars": "abcdefghijklmnopqrstuvwxyz",
      "count": 30,
      "desc": "26 个字母混着来",
      "badge": "挑战",
      "color": "#E8537A"
    },
    {
      "name": "单词练习",
      "kind": "words",
      "count": 16,
      "desc": "把一个个单词打出来",
      "badge": "组合",
      "color": "#E85D3F"
    },
    {
      "name": "短句练习",
      "kind": "words",
      "words": [
        "i can run.",
        "a red ball.",
        "my cat is fat.",
        "i like milk.",
        "let us play.",
        "the sun is hot.",
        "a big bird.",
        "look at the fish.",
        "this is my dog."
      ],
      "count": 8,
      "desc": "连起来打一个小短句",
      "badge": "组合",
      "color": "#7B6CF0"
    },
    {
      "name": "计时挑战",
      "kind": "timer",
      "chars": "abcdefghijklmnopqrstuvwxyz",
      "time": 60,
      "desc": "60 秒，看你能打对多少个",
      "badge": "计时",
      "color": "#7B6CF0"
    },
    {
      "name": "自由练习",
      "kind": "letters",
      "chars": "abcdefghijklmnopqrstuvwxyz",
      "count": 40,
      "desc": "想打什么就打什么",
      "badge": "自由",
      "alwaysOpen": true,
      "color": "#F09B2E"
    }
  ],
  "words": [
    "cat",
    "dog",
    "sun",
    "hat",
    "red",
    "big",
    "fun",
    "run",
    "pig",
    "cup",
    "ball",
    "star",
    "tree",
    "bird",
    "fish",
    "book",
    "milk",
    "cake",
    "play",
    "jump",
    "duck",
    "frog",
    "lion",
    "bear",
    "happy",
    "hello"
  ]
};
