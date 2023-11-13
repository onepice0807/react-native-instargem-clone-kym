import { USERS } from "./Users";

export const POSTS = [
  {
    imageUrl: [
      "https://cdn.pixabay.com/photo/2023/08/26/09/04/strawberry-8214486_640.jpg",
      "https://cdn.pixabay.com/photo/2023/04/03/17/46/coffee-7897414_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/01/14/15/11/relaxing-1979674_1280.jpg",
    ],
    user: USERS[0].user,
    likes: 46345,
    caption:
      "이 케익을 먹고 있어요~! 나와 함께 드실분! 소풍가서 커피와 함께 이 가을을!@@@",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "sonnysangha",
        comment: "Wow! 맛나게 보이네잉.",
      },
      {
        user: "monkeybgm",
        comment: "워메 침고여~~~~ 👻",
      },
    ],
  },
  {
    imageUrl: [
      "https://i.ibb.co/182bP1y/4k.png",
      "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg",
    ],
    user: USERS[0].user,
    likes: 7870,
    caption: "Train Ride to Hogwarts 😭👻",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "sonnysangha",
        comment: "Wow! This build looks fire. Super excited about that.",
      },
      {
        user: "monkeybgm",
        comment: "This is awesome!",
      },
    ],
  },
  {
    imageUrl: [
      "https://mblogthumb-phinf.pstatic.net/MjAxODA4MTBfMjM3/MDAxNTMzODk5NTQzNTAy.0QH-SnMZvDVA-63r9zo_WYfuHDFeVOLOje2QySO_iWcg.3Y0Nl_zu57LyMbzOfZeVt0FA2SwtxqKSyiIaUhaNWpsg.PNG.ckchungkang/2.png?type=w800",
    ],
    user: USERS[4].user,
    likes: 123,
    caption: "이겼닭, 오늘 저녁은 치킨이닭!!!",
    profile_picture: USERS[4].image,
    comments: [
      {
        user: "sonnysangha",
        comment: "Wow! 대박!!!.",
      },
    ],
  },
  {
    imageUrl: [
      "https://cdn.pixabay.com/photo/2023/06/22/05/35/nature-8080591_1280.jpg",
    ],
    user: USERS[2].user,
    likes: 12,
    caption: "아름다운 꽃",
    profile_picture: USERS[2].image,
    comments: [],
  },
  {
    imageUrl: [
      "https://cdn.pixabay.com/photo/2017/08/10/07/29/sony-2619483_1280.jpg",
    ],
    user: USERS[5].user,
    likes: 763432,
    caption: "겜 하고 프다 😱",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "sonnysangha",
        comment: "나도..!",
      },
      {
        user: "monkeybgm",
        comment: "ㅇㅏ.. 아..",
      },
      {
        user: "jace",
        comment: "으아~~~~~~~~~~~~~~~~~~~~~~~~~~",
      },
    ],
  },
  {
    imageUrl: [
      "https://cdn.pixabay.com/photo/2023/08/21/23/11/woman-8205187_640.jpg",
    ],
    user: USERS[2].user,
    likes: 12345,
    caption: "독서 모드 중……",
    profile_picture: USERS[2].image,
    comments: [
      {
        user: "sonnysangha",
        comment: "자냐~~~~~?",
      },
      {
        user: "monkeybgm",
        comment: "이미 잘듯..!",
      },
    ],
  },
];
