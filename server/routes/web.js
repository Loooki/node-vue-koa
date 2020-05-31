const router = require('koa-router')()

router.prefix('/web/api')

//新闻资讯中用到的数据模型先引入
const mongoose=require('mongoose')
const Category=mongoose.model('Category')
const Article = mongoose.model('Article')
const Hero = mongoose.model('Hero')

//非正式环境，用于测试，向数据库中添加内容，
//导入新闻数据
router.get('/news/init',async (ctx)=>{
    //向数据模型中添加数据,find({}) 返回一个数组，findOne({}) 返回一个对象
    const parent=await Category.findOne({
        name: '新闻咨讯'
    })
    // const parent=await Category.find({
    //     name: '新闻咨讯'
    // })

    //lean方法表示取纯粹的json数据
    // const cates = await Category.find({
    //         parent: parent
    //     }).lean()
    const cates=await Category.find().where({
        parent:parent
    }).lean()
    // console.log(cates) 以上两种写法效果一致
    const newsTitles = ["5月20日全服不停机更新公告", "爱在峡谷 甜蜜520", "5月20日英雄平衡性调整公告", "5月19日体验服停机更新公告", "5月18日体验服停机更新公告", "【520情侣皮肤】所有等待，只为重逢", "UI改造日志第四期：背包系统优化在即，局内快捷消息更智能！", "《五虎上将交响曲》揭秘，一起来看看你的音乐公开课随堂笔记吧！", "0元免流畅玩包，轻轻松松上王者", "王者荣耀联合乘车码送豪华大礼，五五开黑不氪金！", "5月21日“演员”惩罚名单", "5月21日外挂专项打击公告", "5月21日净化游戏环境声明及处罚公告", "5月20日体验服停机更新公告", "时之恋人皮肤及商城赠礼中心皮肤展示动画显示异常问题说明", "爱在峡谷 甜蜜520", "DIY告白信 520陪您花式告白", "峡谷迎初夏，好礼领不停", "黄忠-烈魂五虎上将限定皮肤即将上架，缤纷好礼齐降临", "“五五打卡游”活动开启", "虎牙明星主播踢馆名校战队，峡谷高材生与学霸的荣耀对决", "2020年KPL春季赛常规赛最佳阵容及最佳选手评选方式公布", "2020年KPL春季赛季后赛赛程赛制公布，5月28日16:00热血开战", "【原创内容大赛音乐比赛】优秀作品合集（二）", "大众赛事合作赛道全面开启，携手合作伙伴共建王者电竞生态"]
    const newsLists = newsTitles.map( title =>{
        // cates随机排序，得到新数组用slice
        let randomCates=cates.slice(0).sort((a,b)=>Math.random() - 0.5)
        return {
            categories: randomCates.slice(0, 2),
            title:title
        }
    })
    //清空原有数据库，慎用
    // await Article.deleteMany({})
    //插入上面添加的数据
    await Article.insertMany(newsLists)
    ctx.body = newsLists
})

//导入英雄数据
router.get('/heroes/init',async ctx=>{
    //清空数据库数据,慎用
    // await Hero.deleteMany({})
    let heroes = [{ "name": "热门", "heroes": [{ "name": "后羿", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg" }, { "name": "孙悟空", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg" }, { "name": "铠", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg" }, { "name": "安琪拉", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg" }, { "name": "亚瑟", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg" }, { "name": "鲁班七号", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg" }, { "name": "妲己", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg" }, { "name": "甄姬", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg" }, { "name": "韩信", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg" }, { "name": "伽罗", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg" }] }, { "name": "战士", "heroes": [{ "name": "赵云", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg" }, { "name": "墨子", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg" }, { "name": "钟无艳", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg" }, { "name": "吕布", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg" }, { "name": "夏侯惇", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg" }, { "name": "曹操", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg" }, { "name": "典韦", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg" }, { "name": "宫本武藏", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg" }, { "name": "达摩", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg" }, { "name": "老夫子", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg" }, { "name": "关羽", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg" }, { "name": "程咬金", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg" }, { "name": "露娜", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg" }, { "name": "花木兰", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg" }, { "name": "橘右京", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg" }, { "name": "亚瑟", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg" }, { "name": "孙悟空", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg" }, { "name": "刘备", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg" }, { "name": "钟馗", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg" }, { "name": "杨戬", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg" }, { "name": "雅典娜", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg" }, { "name": "哪吒", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg" }, { "name": "铠", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg" }, { "name": "苏烈", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg" }, { "name": "裴擒虎", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg" }, { "name": "狂铁", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg" }, { "name": "孙策", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg" }, { "name": "李信", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg" }, { "name": "盘古", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg" }, { "name": "云中君", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg" }, { "name": "曜", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg" }, { "name": "马超", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg" }] }, { "name": "法师", "heroes": [{ "name": "小乔", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg" }, { "name": "墨子", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg" }, { "name": "妲己", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg" }, { "name": "嬴政", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg" }, { "name": "高渐离", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg" }, { "name": "孙膑", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg" }, { "name": "扁鹊", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg" }, { "name": "芈月", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg" }, { "name": "周瑜", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg" }, { "name": "甄姬", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg" }, { "name": "武则天", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg" }, { "name": "貂蝉", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg" }, { "name": "安琪拉", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg" }, { "name": "露娜", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg" }, { "name": "姜子牙", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg" }, { "name": "王昭君", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg" }, { "name": "张良", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg" }, { "name": "不知火舞", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg" }, { "name": "钟馗", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg" }, { "name": "诸葛亮", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg" }, { "name": "干将莫邪", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg" }, { "name": "女娲", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg" }, { "name": "杨玉环", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg" }, { "name": "弈星", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg" }, { "name": "米莱狄", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg" }, { "name": "司马懿", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg" }, { "name": "沈梦溪", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg" }, { "name": "上官婉儿", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg" }, { "name": "嫦娥", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg" }, { "name": "西施", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/523/523.jpg" }] }, { "name": "坦克", "heroes": [{ "name": "廉颇", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg" }, { "name": "庄周", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg" }, { "name": "刘禅", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg" }, { "name": "钟无艳", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg" }, { "name": "白起", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg" }, { "name": "芈月", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg" }, { "name": "吕布", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg" }, { "name": "夏侯惇", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg" }, { "name": "达摩", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg" }, { "name": "项羽", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg" }, { "name": "程咬金", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg" }, { "name": "刘邦", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg" }, { "name": "亚瑟", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg" }, { "name": "牛魔", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg" }, { "name": "张飞", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg" }, { "name": "太乙真人", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg" }, { "name": "东皇太一", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg" }, { "name": "铠", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg" }, { "name": "苏烈", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg" }, { "name": "梦奇", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg" }, { "name": "孙策", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg" }, { "name": "嫦娥", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg" }, { "name": "猪八戒", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg" }] }, { "name": "刺客", "heroes": [{ "name": "赵云", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg" }, { "name": "阿轲", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg" }, { "name": "李白", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg" }, { "name": "貂蝉", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg" }, { "name": "韩信", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg" }, { "name": "兰陵王", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg" }, { "name": "花木兰", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg" }, { "name": "不知火舞", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg" }, { "name": "娜可露露", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg" }, { "name": "橘右京", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg" }, { "name": "孙悟空", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg" }, { "name": "百里守约", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg" }, { "name": "百里玄策", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg" }, { "name": "裴擒虎", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg" }, { "name": "元歌", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg" }, { "name": "司马懿", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg" }, { "name": "上官婉儿", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg" }, { "name": "云中君", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg" }, { "name": "马超", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg" }, { "name": "镜", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/531/531.jpg" }] }, { "name": "射手", "heroes": [{ "name": "孙尚香", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg" }, { "name": "鲁班七号", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg" }, { "name": "马可波罗", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg" }, { "name": "狄仁杰", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg" }, { "name": "后羿", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg" }, { "name": "李元芳", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg" }, { "name": "虞姬", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg" }, { "name": "成吉思汗", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg" }, { "name": "黄忠", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg" }, { "name": "百里守约", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg" }, { "name": "公孙离", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg" }, { "name": "伽罗", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg" }, { "name": "蒙犽", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/524/524.jpg" }] }, { "name": "辅助", "heroes": [{ "name": "庄周", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg" }, { "name": "刘禅", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg" }, { "name": "孙膑", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg" }, { "name": "姜子牙", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg" }, { "name": "牛魔", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg" }, { "name": "张飞", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg" }, { "name": "蔡文姬", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg" }, { "name": "太乙真人", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg" }, { "name": "大乔", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg" }, { "name": "鬼谷子", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg" }, { "name": "明世隐", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg" }, { "name": "杨玉环", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg" }, { "name": "盾山", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg" }, { "name": "瑶", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg" }, { "name": "鲁班大师", "avator": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/525/525.jpg" }] }]

    for(let item of heroes){
        if(item.name === '热门'){
            continue  //跳出本次循环，不向下执行代码，执行下一次循环
        }
        //找到当前分类在数据库中对应的数据
        let category=await Category.findOne({
            name:item.name
        })
        //向数据中添加categoreies字段
        item.heroes.map(hero=>{
            hero.categories=[category]
            return hero
        })
        //录入英雄
        await Hero.insertMany(item.heroes)
    }

    ctx.body = await Hero.find()
})

//以下为正式环境内容
router.get('/', (ctx) => {
    ctx.body = "web"
})

//新闻列表接口
router.get('/news/list',async (ctx)=>{
    //得到一级分类数据
    let parent = await Category.findOne({ name: '新闻咨讯' })
    // console.log(parent) //{ _id: 5eb93f48c002c03213854ac4, name: '新闻咨讯', __v: 0 }

    //以一级分类ID作为查询条件，Category表作为主表查询，关联article表中的数据，限制每个分类只返回5条
    let lists = await Category.aggregate([
        {$match:{parent:parent._id}},
        {
            $lookup:{
                from:'articles',
                localField:"_id",
                foreignField:"categories",
                as:"newsLists"
            }
        },
        {
            $addFields:{ //修改查询的数据数据
                newsLists: { $slice: ['$newsLists',5]} //每项只返回5条数据
            }
        }
    ])

    //添加热门分类
    let subcates= lists.map(v=>v._id)
   
    lists.unshift({
        name:"热门",
        newsLists: await Article.find().where({
            categories:{ $in : subcates }
        }).populate('categories').limit(5).lean()
       
    })

    //得到的数据进行整理,遍历向每个newslists里面添加属性categoryName
    //热门分类不是数据库中的数据，是随机抽取的在前台显示为原有数据库中的分类标签，需要在前面添加热门数据时时关联数据原有分类
    lists.map(list=>{
        list.newsLists.map(news=>{
            //判断，如果所属分类为热门，取关联的原有分类名称之一显示，否则显示其数据库分类
            news.categoryName = list.name ==="热门" ? 
            news.categories[0].name : list.name
            return news
        })
        return list
    })

    ctx.body=lists
})

//英雄列表接口
router.get('/heroes/list',async ctx=>{
    //得到一级分类数据
    let parent = await Category.findOne({ name: '英雄' })
    let lists = await Category.aggregate([
        { $match: { parent: parent._id } },
        {
            $lookup: {
                from: 'heros',
                localField: "_id",
                foreignField: "categories",
                as: "heroesLists"
            }
        }
    ])
    
    //添加热门分类
    let subcates = lists.map(v => v._id)
  
    lists.unshift({
        name: "热门",
        heroesLists: await Hero.find().where({
            categories: { $in: subcates }
        }).limit(10).lean()
    })
   
    ctx.body = lists
})

//文章详情接口
router.get('/articles/:id',async ctx=>{
    let data=await Article.findOne({_id:ctx.params.id}).lean()
    
    data.related=await Article.find().where({
        categories:{ $in : data.categories },
        title:{ $ne :data.title } //不包含本身
    }).limit(2)
    
    // console.log(data)

    ctx.body=data
})

//英雄详情接口
router.get('/heroes/:id',async ctx=>{
    let data = await Hero.findOne({ _id: ctx.params.id })
    .populate('categories')
    .populate('equipments1')
    .populate('equipments2')
    .populate('partners.hero')
    .populate('opponents.hero')
    .populate('controllers.hero')
    .lean()
    ctx.body=data
    // console.log(data)
})

module.exports = router


