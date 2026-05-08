export const siteContent = {
  invitation: {
    siteTitle: "사랑하는 엄마, 아빠께 드리는 작은 초대장",

    badgeText: "김진수, 임정희 귀하",

    heroTitle: {
      line1: "우리의 마음을 담은",
      line2: "어버이날 초대장",
    },

    heroDescription: {
      line1: "엄마 아빠를 위한 공간을 준비했어요.",
      line2: "먼저 이 편지를 열어 초대장을 확인해주세요.",
    },

    heroNote: {
      line1: "- 김예은, 김나은 올림 -",
      line2: "2026, 우리와 함께하는 20번째 어버이날",
    },

    sealGuideText: "실링을 눌러 초대장을 열어주세요",

    letter: {
      label: "Invitation",
      title: "사랑하는 엄마, 아빠에게",
      body:
        "올해 어버이날에는 꽃다발보다 더 오래 남을 수 있는 것을 준비했어요. 추억을 두고두고 꺼내보는 것을 좋아하는 엄마 아빠를 위해, 우리 가족의 기록을 이곳에 담아두었습니다.",
      scheduleTitle: "초대 일정",
      scheduleBody: [
        "2026년 5월 7일 12:00 - 첫 번째 선물 선공개",
        "2026년 5월 8일 19:30 - 전체 공개",
      ],
    },

    acceptButtonText: "초대 수락하기",
  },

  revealSchedule: {
    camera: "2026-05-07T12:00:00+09:00",
    main: "2026-05-08T19:30:00+09:00",
  },

  acceptedScreen: {
    eyebrow: "Invitation Accepted",
    title: "엄마, 아빠에게 드리는 상자",
    description: [
      "상자를 열어볼 수 있어요.",
      "각 선물은 정해진 시간에 맞춰 하나씩 공개됩니다.",
    ],
    openBoxButtonText: "상자 열기",
  },

  memoryBox: {
    eyebrow: "Memory Box",
    title: "엄마, 아빠에게 드리는 상자",
    description: [
      "상자 안에 담긴 오브젝트를 하나씩 눌러보세요.",
      "아직 공개 시간이 되지 않은 선물은 정해진 시간에 열립니다.",
    ],
  },

  lockedMessages: {
    camera:
      "첫 번째 선물은 2026년 5월 7일 12:00에 공개됩니다. 그때 다시 이 오브젝트를 눌러주세요.",
    main:
      "이 선물은 2026년 5월 8일 19:30에 공개됩니다. 그때 다시 이 오브젝트를 눌러주세요.",
  },

  objects: [
  {
    id: "camera",
    type: "camera",
    title: "폴라로이드 사진기",
    label: "Polaroid",
    unlockAt: "2026-05-07T12:00:00+09:00",
    lockedMessage:
      "폴라로이드 사진기는 2026년 5월 7일 12:00에 공개됩니다. 그때 다시 눌러주세요.",
    description:
      "사진기 버튼을 누르면, 준비해둔 첫 번째 선물이 천천히 인화됩니다.",
    revealTitle: "첫 번째 서프라이즈",
    revealDescription:
      "첫 번째 선물은 바로... 예은, 나은입니다! 그게 무슨 뜻이냐고요? 이 초대장은 성동구 텐즈힐 116동 601호에서 5.8 19:00 어버이날 축하 파티의 초대장입니다. 관악구와 대전 유성구에서 예은, 나은이 엄마, 아빠를 만나러 갈 예정입니다! 내일 파티를 하면서 공개될 다른 선물들도 기대해 주세요 :)",
    photoSrc: "/imgs/polaroidphotoedit.jpg",
    developDurationMs: 20000,
  },

  {
    id: "mom-letter",
    type: "mailbox",
    recipientKey: "mom",
    title: "엄마에게",
    label: "Letter",
    unlockAt: "2026-05-08T19:30:00+09:00",
    lockedMessage:
      "엄마에게 쓰는 편지는 2026년 5월 8일 19:30에 공개됩니다.",
  },

  {
    id: "dad-letter",
    type: "mailbox",
    recipientKey: "dad",
    title: "아빠에게",
    label: "Letter",
    unlockAt: "2026-05-08T19:30:00+09:00",
    lockedMessage:
      "아빠에게 쓰는 편지는 2026년 5월 8일 19:30에 공개됩니다.",
  },

  {
    id: "album",
    type: "album",
    title: "가족 앨범",
    label: "Album",
    unlockAt: "2026-05-08T19:30:00+09:00",
    lockedMessage:
      "가족 앨범은 2026년 5월 8일 19:30에 공개됩니다.",
  },

  {
    id: "gift-box",
    type: "gift",
    title: "선물 상자",
    label: "Gift",
    unlockAt: "2026-05-08T19:30:00+09:00",
    lockedMessage:
      "선물 상자는 2026년 5월 8일 19:30에 공개됩니다.",
  },
],
};