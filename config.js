const config = {
  mode: "in", // 签到:in,签退:out
  accounts: [
    {
      username: "15936241956", //用户名
      password: "v20017245", //密码
      openId: "", //微信小程序抓包openid(可选)
      unionId: "", //微信小程序抓包unionId(可选)
      sign: true, //是否自动签到
      reSign: false, //是否重新签到
      location: "119.947654,31.713441", //经纬度 (可选),例如 "120.210792,30.246026"、"经度,纬度",不填写则自动获取（推荐）
      // signImagePath: "./images/1.jpeg", //签到图片
      // needReport: false, //是否自动填写周报
    },
    // 添加多个账户
    // {
    //   username: "",
    //   password: "",
    //   openId: "",
    //   unionId: "",
    //   sign: true, //是否自动签到
    //   reSign: true, //是否重新签到
    //   signImagePath: "./images/1.jpeg", //签到图片
    //   needReport: false, //是否自动填写周报
    // },
  ],
  qmsgKey: "", //qmsg酱key
  qmsgTo: "", //推送的qq号,用,分隔(可选)
  wxPusherAppToken: "", // wxPusher 的 appToken
  // TODO: feat: (wxpusher/topic) support wxpusher/topic push
};

const modeCN = {
  in: "签到",
  out: "签退",
};
config.modeCN = modeCN[config.mode];

const apis = {
  login: "login/login.action",
  accountInfo: "account/LoadAccountInfo.action",
  projects: "student/progress/ProjectList.action",
  tasks: "student/progress/ProjectProgressInfo.action",
  //周报
  weekBlogStatus: "student/blog/Plan!getDefault.action",
  weekReportsDate: "student/blog/LoadBlogDate!weekYear.action",
  weekReports: "student/blog/LoadBlogDate!week.action",
  weelBlogSave: "student/blog/Blog!save.action",
  weelBlogSubmit: "student/blog/Blog!getSubmitData.action",
  //签到
  clockDefault: "student/clock/GetPlan!getDefault.action", //planId => traineeId
  clockDetail: "student/clock/GetPlan!detail.action", //traineeId => postInfo
  clock: "student/clock/Post!autoClock.action", //首次签到
  clockNew: "student/clock/PostNew.action", //重新签到或签退
  // clockUpdate: "student/clock/PostNew!updateClock.action", //更新最近的签到/签退记录，已有签退记录时无法更新之前的签到记录
  clockUpdate: "student/clock/Post!updateClock.action", // reClock
  // clockNew: "student/clock/Post!autoClock.action", //临时接口
  // clockUpdate: "student/clock/postTemporary!updateClock.action", // reClock 临时接口
  //上传
  uploadInfo: "uploadfile/commonPostPolicy.action", //oss info
  uploadFile: "https://xyb001.oss-cn-hangzhou.aliyuncs.com/",
  duration: "behavior/Duration.action",
  ip: "behavior/Duration!getIp.action",
  // 地图api
  map: "https://restapi.amap.com/v3/geocode/regeo",
};

const reports = [
  [
    `本周，是我实习的第一周。刚进入公司的时候，很茫然，不知道要做些什么，对自己的岗位充满期待，对公司充满好奇。领导叫做什么，我们就做什么，最开始的时候是培训。也怕自己没有能够做好相关的工作,带来不好的影响以及麻烦。好在公司给我安排了一位和我年纪相仿的小姐姐带我熟悉工作环境，工作内容。由于我初来乍到，对这个岗位的工作流程还不太熟悉，幸好我的实习负责人耐心的给我讲解了一些（什么工作）需要注意的地方，然后慢慢让我尝试自己做一下，自己去理解，我自己做的过程中，产生了很多疑问，我经常带着我不懂的问题去问负责人，负责人都耐心的教我。这一周的学习内容虽然不是很多，但是最主要的还是尽快适应工作的节奏，以及熟悉工作，我也对我的工作环境以及工作内容有了初步的了解。经过这一周的相处，公司的人也都很好，很好相处，在接下来的时间里，我会更加努力认真的学习，多问多听多学多看，努力的工作。`,
    "本周充满了新奇和挑战。在这一周中，我学到了许多新知识和技能，也体验了职场的工作氛围。首先，我参与了团队的日常工作，包括与同事合作完成项目、参加会议并记录会议纪要等。通过与团队成员的互动，我深刻体会到了团队协作的重要性。大家相互合作，共同解决问题，以达到项目的目标。我学会了如何与他人进行有效的沟通和合作，这对于未来的职业发展将是非常宝贵的。其次，我还接触了一些新的工作工具和流程。在实习的过程中，我学会了如何利用公司提供的软件来进行数据分析和报告的制作。这项技能不仅提高了我的工作效率，还使我更加熟悉了行业内的常用工具和流程。我也深刻认识到，在不断发展的数字化时代，掌握和适应新技术是非常重要的。此外，我还参与了一些培训和学习活动。公司组织了一次关于市场营销策略的讲座，我从中学到了许多关于市场调研和市场推广的知识。这次讲座为我未来的职业发展提供了很大的帮助，并且让我对市场营销这个领域产生了浓厚的兴趣。在这一周中，我还面临了一些挑战。由于我对公司的业务和流程还不够熟悉，有时候需要花费更多的时间来理解和完成工作。但是，我通过请教同事和自己不断的学习，逐渐克服了这些困难，并且在实践中不断提升自己。总的来说，这一周的实习经历让我受益匪浅。我不仅学到了专业知识和技能，还提高了自己的工作能力和团队合作能力。我期待在接下来的实习中，继续学习和成长，为公司做出更大的贡献。",
    `临近毕业的最后一年，是我们真正实习生活的开始，是汇报我们这三年来在学校学习成果的开始，是步入社会大展宏图的开始。从学校到社会的大环境的转变，身边接触的人也完全换了角色，老师变成老板，同学变成同事，相处之道完全不同。突然面对这么大的转变，我知道我必须得适应。好在同事们都很乐意帮助我，这也给我了很大的动力去学习每件事情。
    
    才来的那天最糗的事情就是去复印一点资料。平时在学校复印东西都是打印店的人复印的，从来没有自己亲手复印过。以为也没什么难的吧，谁知道我弄了半天都没复印出来，想想这么简单的事情又不好意思问同事，可急死我了。好在一个同事姐姐看见了，主动教我怎么用，还跟我说以后再有什么不懂的就问她，不用觉得不好意思。后来我就经常请教同事问题了，不会再觉得有什么好尴尬的了。
    
    由于现在还住校，所以我每天7点不到就得起床去挤公交车，就算再寒冷再差的天气，只要不是周末，都得去上班，有时候公司业务繁忙，晚上或周末得加班，那留给个人支配的时间更少。我必须克制自己，不能随心所欲地不想上班就不来，这也锻炼了我的自制能力。
    
    常言道：工作一两年胜过十多年的读书。实习时间虽然才几天，但是我从中学到了很多知识，关于做人，做事，做学问。每日重复单调繁琐的工作，时间久了容易厌倦。“在大学里学的不是知识，而是一种叫做自学的能力”。参加工作后才能深刻体会这句话的含义。我发现除了英语和计算机操作外，课本上学的理论知识用到的很少很少。我担任的是文员一职，每天都是整理文档，负责人员考勤，薪资福利，接听电话等工作，虽然工作简单但也不能马虎，一个小小的错误可能会给公司带来巨大的麻烦或损失，还是得认真完成。
    
    1个星期的实习时间看似不长，但是因为刚进公司，也许是最艰难的几天，需要适应的东西太多，我想我能够克服的，在克服的同时也尽量把工作做到最好。`,
  ],
  [
    `不觉中，来这里实习已十来天了，虽然时间已接近两星期，但是很多工作都还不是那么得心应手。不过同事们都很热心，很好相处，我一有什么不懂的都会请教他们，在他们的帮助下我也能够独自完成很多事情啦。虽然在他们的眼里我看起来很小很年轻，都把我当作小妹妹似的，但是我自己却不那么想，我觉得既然在一起工作就要以同样的态度对待每件事，不能因为自己小就把事情推给别人。

    为了能够真正的学到知识，我很严格的要求自己去做好每一件事情，即使再简单的事情我都会认真考虑几遍，因此，虽然做得不算快，但能够保证让同事们满意。同事通常也不催促，都把任务安排好，然后便交给我自己去处理，同时还不时提供一些帮助。等慢慢熟悉起来，相信做起事情也会越来越顺手的。一方面要发扬自主思考问题的能力，在碰到问题的事情，自觉努力去独立解决，这样对问题便能够有一个更深刻的了解，当解决的时候也会获益良多。另一方面，要发扬团队精神。公司是一个整体，公司产品是团队的结晶，每个人都需要跟其他人更好的沟通和交流，互相帮助，合力完成共同的目标，团结众人的智慧才能够发挥最大的效能。
    
    我觉得自己进入工作的状态越来越好了，与同事们也越来越融洽，期待所有的事都越来越好!`,
  ],
  [
    `本周我在这一周中继续积极地投入工作，提高自己的能力。在本周的实习中，我更加熟悉了公司的业务和流程。我参与了更多的项目，并且在团队中承担了更多的责任。通过这些实践，我逐渐掌握了项目的执行步骤和方法，并学会了如何高效地与团队合作，以确保项目的顺利进行。在与团队成员的合作中，我学到了许多重要的团队协作技巧。我们相互支持，共同解决问题，充分发挥了每个人的优势。我意识到团队的力量是巨大的，只有通过相互合作和协调，我们才能取得更好的成果。此外，在本周的实习中，我还参与了一次专业培训。这次培训涵盖了我们所从事行业的最新发展趋势和技术应用。通过学习和讨论，我对行业的前沿动态有了更深入的了解，并且掌握了一些实用的工具和方法。这对于我的个人成长和职业发展非常有益。在实习的过程中，我也遇到了一些挑战。有时候，工作任务的紧迫性和复杂性让我感到压力很大。但是，我学会了调整心态，分解任务，合理安排时间，并与同事进行密切合作，最终顺利完成了任务。这些经历让我更加坚定了自己的意志和决心，无论面对什么样的困难，我都能够勇往直前。总的来说，这一周的实习经历让我不断成长。我通过实践锻炼了自己的专业能力和团队合作能力，也学到了许多宝贵的经验。我期待在接下来的实习中，继续挑战自己，不断提升自己的能力。`,
  ],
  [
    `经过一周的实习，对公司的运作流程也有了一些了解，虽然还没有具体的操作过，但是在接触到新的事务不再不知所措，学会了如何去处理一些突发事件。懂得从中学到一定的处理事情的发那个发，而且从工作地过程中明白了主动出击的重要性，在你可以选择的时候，就要把主动权握在自己手中。相信大家刚开始实习的时候，都做过类似复印打字、整理文档等的“杂活”，因为刚开始对于公司的工作内容、流程还不了解，所以做“杂活”成了实习工作必做的工作。虽然工作比较繁杂但是从中也学到不少的东西。所以说事情是不分大小，只要积极学习积极办事，做好份内事，勤学、勤问、勤做，就会有意想不到的收获。`,
  ],
  [
    `在经历了一周的打杂工作，让我对公司的运作流程以及业务有了一个整体的了解，因此这一周我们的工作内容也有了一个小变化，除了进行简单的技术资料整理， 还有就是如何去做好这个产品方面的设计，我本来以为就要将具体的尺寸用工具测量出来，然后通过autocad画出来就可以了，但是结果并不是想象中那么简单。老板总是叫我一遍又一遍的检查画的图是否还有其他的错误，经过几天的检查，我开始感觉到一整天坐在电脑面前开始有些疲倦，整天面对着电脑，看着那枯燥无谓的图形，我有点开始厌倦了，但是我还是坚持着做着，细心的检查着。就这样我熬过了枯燥的一个星期。`,
  ],
  [
    `俗话说的好一年之季在于春，一天之季在于晨，又是一个星期的开始，早上起来呼吸着窗外的新鲜空气，来到厂里开始新的工作，将上个星期的零件图把他装

    配起来，我以为本来是很简单的事，不过事实并不是想象中的那样的简单，在装配过程中出现了许多问题，这下可把我个弄荤了，都不知道该从何下手，比如说在装配的过程中出现尺寸的不一样，出现很大的间隙等等其他的许多问题。一时间看出许多的毛病和错误，只好在次慢慢的修改，寻找还有没有其他的错误。经过几天的奋斗，修改和检查这个工作快临近尾声了，我总是在希望我的图不要在出现其他的错误。这个星期虽然结束了，但是我还是有地方值得我去学习的，真的是不易乐呼。`,
  ],
  [
    "图是弄好了，接下来是开始进行生产，调试。真是毛病重重，错误多多啊!产品刚出来进行调试微出现这样那样的毛病。后来才清楚知道是怎么一回事。不过通过这件事可以学到不少在学校所学不到的知识与经验，原来在设计绘图，这个零件是考虑的并不单单是把图绘出来，还要了解一些关于市场方面的信息，比如说价格，一些常用的毛坯，怎么做起来才方便简洁，如何把他设计成又好又方便的产品。还要考虑在加工过程中出现的误差，还有一些热处理方面的知识等等。如果不想到这些结果会是难以想象的，浪费时间上其次的，最重要的是公司经济的损失。",
  ],
  [
    `经过一个多月的实习，虽然对公司不是那么的太了解，但是多少不等也有所了解。天天做着一样的事，感觉得无比的枯燥只有自己一个人坐在电脑面前一整天，只有电脑从早到晚的陪者我，觉得好孤独，没有了以前在学校的那种欢声笑语，没有在学校的那种轻松悠闲自在了，有的只是空虚和寂寞。有些时候闲下来就坐在电脑面前发呆，不知道做什么。 就这样一天一天的耗着，感觉除了工作以外，自己的生活中就没有其他的新鲜的事情，或者是值得人去回忆，留念的了，没有了色彩斑斓的生活，有的只是枯燥的工作有些时候都有点冲动想不干了，去换换别的工作，想给累积更多的社会知识和经验，但是想了想还没有那么的冲动，还是在原来的地方老实的呆着。`,
  ],
  [
    `虽然时间是过的那么的艰苦，但是还是有快乐的时光的，那天我和师傅出去吃饭了，在饭桌上，师傅没有以前那一脸的严肃，让我感觉到自己和他们就象兄弟一样，并没有那么的陌生。在吃饭的时候叫我注意一些细节方面，并不象在学校大家在一起吃饭那么的随便，要有一定的规矩和礼数。叫我如何去喝酒，虽然我不会喝，他们就让我少喝点，意思一下，叫怎么在这里结交新朋友，也好为自己以后在社会混多一条路，多见见世面。那天我们吃的很高兴，也很开心，我第一次感觉这样无拘无束。回到厂里的宿舍，呼吸着外面的空气，感觉到无比的舒畅，来到厂里终于有了一次真正的放松，心理觉得乐滋滋的。`,
  ],
  [
    `经过了一段时间的工作，又开始踏上了新的征程，进行新的锻炼。经过一段时间的匆匆忙碌后，终于有了可以闲下来的一点时间。可以稍微的偷懒一下，好好的享受一下工作之余的快乐。在这以后才上体验生活那种家庭生活的开始，开始我的新的工作：学习怎么做好日常生活中的细事，比如说说是挖排水沟，看似一件简单事，但是实际哂纳感做起来就显得的非常的棘手，对于我们刚步入社会的新大学生来说无疑是一个重大的考验，虽然我并不知道怎么去弄，更不知道如何弄好，但是我还是在其中努力的学习，领悟其中的心得。这些活原来在家里并要自己去做，但我在这里能够亲身的体验到家人的辛苦与劳累。只有自己亲身经历，才能深刻体会。`,
  ],
  [
    `上一周的劳累与辛苦使我牢记心理，不过这一周又学到新的东西，虽然简单但是也很容易出错，我和我一个师傅去浇水泥板，在浇焊一块铁架子，放在里面来增加的它的强度，以防被什么大型__从上面走的时候压坏了，我看着师傅做，便好奇的问你为什么不做成和扳子一样大的架子呢?师傅起初并没有告诉我为什么这样做，我一直带着这样的疑问。后来和他一起浇的时候才发现，如果和它弄成一样大的话结果就放不进去，或者说以后弄出来，边上就会不平齐，不仅外观上面不怎么好看，而且有些时候不注意的话，他人从它旁边经过的会弄伤其他人。这个虽然简单，也许在书上的时候大家都会说，但你一旦在真正实践的时候就会想不到，只有实践了，才能更深的体会。`,
  ],
  [
    `本周是我在公司C的第三周实习，我在这一周中积极参与工作，并不断学习和成长。在本周的实习中，我继续参与了公司的日常工作，并且承担了一些更具挑战性的任务。通过这些工作，我进一步提高了自己的专业知识和技能，并学会了更加高效地处理工作。与此同时，我也注意到了团队合作的重要性。在与同事的合作中，我学到了如何更好地沟通和协调，以实现共同的目标。大家相互支持和理解，共同努力，使我们能够充分发挥个人的优势，以最佳的方式完成工作。在这一周的实习中，我还有幸参与了一次行业内的研讨会。在研讨会中，专家们分享了他们的经验和见解，让我对行业的未来发展有了更清晰的认识。我也有机会与其他实习生和专业人士进行交流和讨论，拓宽了我的视野。尽管在实习过程中遇到了一些困难和挑战，但我通过积极的态度和不断努力克服了它们。我相信，挑战是成长的机遇，只有在面对困难时，我们才能够发挥出自己的潜力。总的来说，这一周的实习经历让我受益匪浅。我不仅学到了专业知识和技能，还提高了自己的团队合作能力和解决问题的能力。我期待在接下来的实习中，继续努力学习和成长，为公司做出更大的贡献。`,
  ],
  [
    `不知不自觉中在实习已经两个多月了。很多时候觉得自己没有受到领导重用，所干的只是一些无关重要的杂活，自己的提议或工作不能得到老板的肯定。做不出成绩时，会有来自各方面的压力，老板的眼色同事的嘲讽。而在学校，有同学老师的关心和支持，每日只是上上课，很轻松。常言道：工作一两年胜过十多年的读书。两个月的实习时间虽然不长，但是我从中学到了很多知识，关于做人，做事，做学问。“天下英雄皆我辈，一入江湖立马催。”从学校到社会的大环境的转变，身边接触的人也完全换了角色，老师变成老板，同学变成同事，相处之道完全不同。在这巨大的转变中，我们可能彷徨，迷茫，无法马上适应新的环境。我们也许看不惯企业之间残酷的竞争，无法忍受同事之间漠不关心的眼神和言语。`,
  ],
  [
    `这周星期一是我实习单位，_周年庆祝活动，同事们就提议说晚上搞个聚会，没有结婚的人都可以参加，结了婚的也可以参加，正式员工可以参加，实习员工也可以参加。虽然我来的时间不长，但是同事们说我必须参加，不许找借口不去。我想这是个很好的机会让我更加了解这些对我这么好，这么照顾我的同事们。我对他们说过，这里的工作氛围让人感觉好轻松，每个人都好亲切。他们告诉我，除了主任是本地人，其他的工作人员都是来自五湖四海，本来就是背井离乡，所以大家在一起就难免变得互相理解，互相帮助，人在外，谁没有个难处呢。是啊，人在外，谁没个难处呢。多么朴实却温暖的一句话。

    这周即将结束，我发现工作作中遇到问题，我们最好采取请教的态度与口吻与他们说话，虽然他们现在的职位和你同等或者还不如你，但三人行必有我师，或许他们就掌握着很多工作中实用的东西。刚刚参加工作或者新到一个单位，应该如何与周围的同事相处，这对新走上工作岗位的年轻人来说极为重要。学会与人相处，可以让你少走弯路，尽早成功。其实，
    
    每一个人要取得成功，仅有很强的工作能力是不够的，你必须两条腿走路，既要努力做好自己分内的工作，又要处理好人际关系。`,
  ],
  [
    `周一开始我跟其他几位同事去分部工作，所以最近上班的场所一直都是在单位分部，每

    天早上到总单位之后，就直奔单位分部。在单位分部虽然没有在办公室那么舒适和轻松，但是毕竟现在是有目标要去达成，所以比在前一段时间在办公室时更加的充实，时间也会觉得过得更加快。
    
    在这期间，单位分部的工作人员都对我很好。在实际工作中，大学里面最专业的知识还是不够用，很多需要在工作中继续学习，因此我在工作岗位上遇到了一些麻烦。同事们在知道的我的工作任务后，都积极主动的帮助我，告诉我他们总结出来的区别，让我突然觉得每个任务都能轻车熟路，因为他们的帮助，让我完全加快了我的工作进程。想真正地做成一件事情，需要你有锲而不舍的精神。不管我们想在哪个领域做成一件事情，如果你已经认准了目标，那就一定坚持不懈地做下去。罗马不是一天建成的，只要你一天天用心地去做，总有一天，量变会发生质变。
    
    这一周，我总结了工作过程中的关于挫折的感悟。在工作过程经过遇到一些挫折。关于挫折，早有职场高手总结出至理名言：“人在职场飘，哪能不挨刀?”这是一种对工作洒脱的态度。对待工作的挫折，就稍微转换一下努力的方向。说不定更好。另外一点也很重要，困境中请你自己鼓励自己，不到万不得已，请不要把自己的底牌亮给别人。要知道，困难时要求得到的帮助，价码总是会更贵一些的。`,
  ],
  [
    `今天指导师父说十分钟后让我和陪他一起去其他单位参观学习，让我带上笔和笔记本，他还跟我说了一句，“上次的那个任务完成的很漂亮，圆满到达了我的要求，我很满意。”他还表扬我最专业相关基础知识非常扎实，是他见过最专业学生中动手能力比较强的学生。当时我差一点儿兴奋得尖叫出来。几天的努力总算我的努力没有白费，没有什么能比得上得到师父的认可更加让我激动了。

    通过这段时间的了解，原来师父并不是看上去那样一个不起眼的人，听同事说了很多他厉害的事迹，如果能从他身上学到东西，对我这次实习所得和以后的职业发展之路一定有很大的帮助。在外面的路上，师父说，这几天我的任务就是在上次的基础进行扩展。
    
    本周我总结出：在职场上取胜的黄金定律之一便是要有责任心，凡事尽力而为，并且要任劳任怨。在工作上，永远不要试图去敷衍自己的老板。有人曾经访问过许多在事业上功成名就的人，他们一个共同的特点便是，在工作上投入的时间及精力，远远要比工作本身所要求的多。我相信我能做的更好。`,
  ],
  [
    `这一周，我开始深入学习与自己岗位相关业务知识，得到同事的帮助下，我先从规范下手，就是熟悉下当前最专业行业方面的规范，再就是记各种工作相关的必备知识。经过两天的苦研，我终于能基本看懂结构施工图了。经过前期实习后，我大概了解了整个工作程序。

    今天我开始正式参与部分核心工作了，师傅给我布置了一个任务。大学里面学习的最专业的知识能真正得到实际应用，我很高兴，这是他对我的一次考验，同时也给了我一次机会。因此，我要尽力做好它。
    
    工作过程我得出了一些体会：我工作过程要相信自己，如果做不到这一点，你就无法成为一个好的职员或者好的领导。一个相信自己的人，才会在走路时神采飞扬，让老板看上去你有无穷的精力;一个相信自己的人，才会在待人接物时落落大方，这一切能帮助老板培养对你的信心，必要时才会委你以重任。你怎么对待别人，别人就会怎么对待你。在工作中，要待人如待己。在你困难的时候，你的善行会衍生出另一个善行。在别人遇到困境时，热情地伸出援手。在职场上，尽可能地做一个与人为善的好人，这样，当你在工作上不小心出现纰漏，或当你面临加薪或升职的关键时刻，可尽可能减少别人放冷箭的危险。`,
  ],
  [
    `渐渐的我也是进入到工作的一个状态上来了，当然这一周的工作任务也是加重了，毕竟之前也是适应了，每天要拨出的数量也是让我从早忙到晚，基本没有什么太多的休息时间，不过在这忙碌之中，我对于话术也是更加的熟练去掌握了，同时我也是通过量的积累，以及上周完成了目标的成就感，这周也是超额的完成，得到了部长的肯定，不过看到我的周排行在同事中的位置，我也是感到有些失落，的确实习的水平和那些优秀同事的业绩水平差距真的巨大啊。

    不过我也是不气馁，我来到公司都还没有一个月，而且真的工作也才两周的时间，我想再努力努力，肯定可以迎头追上去的。毕竟我的能力我还是相信能做好的。`,
  ],
  [
    `这周，我感受到自己遇到的客户真的特别的难缠，而且也是目标的增加，让我感觉到了压力，最终这周的业绩目标还是差一些，没有完成，我也是特别的懊恼，周五下班之后，部长也是找我谈话，对于我没有完成业绩，他也是没有说太多，也是鼓励了我，说虽然目标是没完成，但是和之前相比，其实也是一直都在进步的，而且工作之中，怎么可能不会遇到挫折。

    遇到了，跌倒了，并不可怕，只要站起来，勇敢的前行，下次努力，达成就好了，也是让我觉得部长真的关心我们，照顾我们，虽然目标是差了一些，但是我并没有特别的低落，特别是部长说完之后，我也是想着，下周一定要做好，不能让部长失望，周末的时候，我也是要去多思考这周做的不好的地方是哪些，要去改进。`,
  ],
  [
    `这一周，我又是重新的出发，重新的达成了目标，我也是感到特别的高兴，之前在周末的反思还是非常的有用，特别是部长跟我的谈话，也是让我意识到，一时的挫折并没有什么，再接再厉就是了，特别是我也是感受到自己的进步很大，和优秀的同事差距也是越拉越近了，虽然还没有超过他们，但是也不算差了。

    况且我还是个实习的，我想等我经历得更多，对于客户更加的熟悉，有了更多的经验，那么我的业绩也是会名列前茅的，特别是我也是感受到看到我的成绩，其他和我一起来到公司实习的同事，也是更加的努力了，的确别人可以，那么我为什么就不行，其实也是努力，去执行，去多反思把方法用对，业绩的目标是完全可以达成的。`,
  ],
];

module.exports = { config, apis, reports };
