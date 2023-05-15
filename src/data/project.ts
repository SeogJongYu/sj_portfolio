import Sommelier0 from '~/assets/image/projects/sommelier_0.png';
import Sommelier1 from '~/assets/image/projects/sommelier_1.png';
import Sommelier2 from '~/assets/image/projects/sommelier_2.png';
import Sommelier3 from '~/assets/image/projects/sommelier_3.png';
import Sommelier4 from '~/assets/image/projects/sommelier_4.png';
import Sommelier5 from '~/assets/image/projects/sommelier_5.png';
import Ypbooks0 from '~/assets/image/projects/ypbooks_0.png';
import Mediwriter0 from '~/assets/image/projects/mediwriter_0.png';
import Mediwriter1 from '~/assets/image/projects/mediwriter_1.png';
import Mediwriter2 from '~/assets/image/projects/mediwriter_2.png';
import Mediwriter3 from '~/assets/image/projects/mediwriter_3.png';
import Mediwriter4 from '~/assets/image/projects/mediwriter_4.png';
import Mediwriter5 from '~/assets/image/projects/mediwriter_5.png';
import Mediwriter6 from '~/assets/image/projects/mediwriter_6.png';
import Investpick0 from '~/assets/image/projects/investpick_0.jpg';
import Investpick1 from '~/assets/image/projects/investpick_1.jpg';
import Investpick2 from '~/assets/image/projects/investpick_2.jpg';
import Investpick3 from '~/assets/image/projects/investpick_3.jpg';
import Investpick4 from '~/assets/image/projects/investpick_4.jpg';
import Expert0 from '~/assets/image/projects/expert_0.png';
import Pacific0 from '~/assets/image/projects/pacific_0.png';
import {ProjectInfo} from '~/types/common';

export const projectInfos: ProjectInfo[] = [
  {
    id: 1,
    type: 'desktop',
    title: '주류 검색 및 추천 서비스',
    project_name: 'AI 소믈리에',
    summary:
      '주류와 커피를 각종 필터를 통해 검색하고, 유저가 찜한 상품과 관련된 상품을 추천해주는 서비스',
    stacks: ['React', 'Typescript'],
    thumbnail: Sommelier0,
    images: [Sommelier1, Sommelier4, Sommelier5, Sommelier2, Sommelier3],
    intro_summary:
      '사용자가 찜한 음료와 비슷한 취향의 음료를 알고리즘을 통해 추천해 주는 서비스입니다. 내장된 기능은 다음과 같습니다.',
    intros: [
      '각 음료별 3,000개 이상의 데이터를 통해 다양한 음료를 필터 통해 검색',
      '음료의 상세 정보 검색',
      '자연어 검색',
      '찜목록을 이용해 내 취향 음료 수집 및 연관음료 추천',
      '테이스팅 노트 작성 및 수정, 삭제',
    ],
    date_range: '2023.01 ~ 2023.04',
    positions: ['프론트엔드', '퍼블리싱', '배포'],
    app_types: ['Web'],
    front_stacks: ['React', 'Typescript'],
    stylings: ['Tailwindcss', 'Emotion', 'twin.macro'],
    state_manages: ['React-Query', 'Recoil'],
    bundlers: ['Webpack'],
    distributions: ['EC2', 'Nginx'],
    collaboration_tools: ['Figma', 'Notion'],
    purposes: [
      '음료의 필터 컴포넌트 유지보수 가능하고 가독성 좋은 구조 고민',
      'react-hook-form 라이브러리 적용',
      'tailwindcss와 emotion을 결합한 twin.macro 적용',
      'SNS 로그인 구현',
    ],
    learing_summary:
      '비제어 컴포넌트로 렌더링 최적화가 어떻게 이루어지는지와 스타일링을 좀 더 간결하고 유지 보수하기 좋은 구조를 만들고자 했습니다.\n또한 지금까지 프론트엔드 세팅은 기존 만들어져있던 템플릿을 사용했는데, 프로젝트 자체도 직접 세팅해 보며 웹팩의 상세 설정에 대해 알아보았습니다.',
    learnings: [
      'react-hook-form의 상태 값은 실시간으로 업데이트되지 않고, submit시 최신 상태 값을 받아온다.',
      'FormProvider 안에서 useFormContext를 사용하여 별도의 컴포넌트를 제작하여 필터를 분리시키면 prop drilling 할 필요 없이 간결하게 컴포넌트화할 수 있다.',
      '모든 게 완벽했던 tailwindcss에서 한 가지 아쉬웠던 점은 변수 할당을 할 수 없었던 점인데, twin.macro를 이용해 emotion과 조합하여 변수 할당 가능한 tailwindcss 컴포넌트를 제작할 수 있었다.',
      '카카오, 구글 API + 라이브러리를 이용하여 유저 인증 로그인을 구현했는데, 다음엔 라이브러리를 사용하지 않고 직접 구현해 보고 싶다.',
    ],
    website_link: 'https://aisommelier.co.kr',
    requireds: [
      '로그인이 필요한 서비스 입니다.',
      '만약 가입을 한다면 구글을 추천합니다. (카카오는 이메일 수집에 체크해야 사용 가능합니다.)',
    ],
  },
  {
    id: 2,
    type: 'desktop',
    title: '쇼핑몰 차세대 프로젝트',
    project_name: '영풍문고 리뉴얼',
    summary: '영풍문고의 신규 쇼핑몰, 어드민 페이지 프론트 개발',
    stacks: ['Vue3', 'Typescript'],
    thumbnail: Ypbooks0,
    intro_summary:
      '빅트리 회사에 재직중 SI프로젝트로 처음 Vue3 개발을 진행한 프로젝트이고, 퇴사 후 개발업체 대표님의 요청으로 프리랜서로 추가로 작업 했습니다.',
    intros: [
      '쇼핑몰 상품페이지, 검색페이지 프론트 개발',
      '어드민 시스템관리, 상품관리, 주문관리 프론트 개발',
      'QA 대응 및 버그 수정',
    ],
    date_range: '2022.06 ~ 2022.12 / 2023.03 ~ 2023.04',
    positions: ['프론트엔드'],
    app_types: ['Web'],
    front_stacks: ['Vue3', 'Typescript'],
    state_manages: ['Vuex'],
    bundlers: ['Vite'],
    collaboration_tools: ['Notion', 'Slack'],
    purposes: [
      '새로운 JS 프레임워크 경험 및 Vue3 문법 숙달',
      '다수 개발자와의 원활한 협업',
    ],
    learing_summary:
      '리액트와 비교하여 단순 개발에 있어서는 뷰가 확실히 빠르게 최적화된 페이지를 개발할 수 있겠다는 생각을 했습니다.\n또한 vue의 reactive 상태관리는 컴포넌트 내에서 사용시 아주 편리했지만 외부로 해당 상태값을 공유하기가 힘들었습니다. JSX가 매우 자유롭고 개발친화적인 문법이라는 것을 느꼈습니다.',
    learnings: [
      'Vue는 컴포넌트의 종속성이 자동으로 추적되어 렌더링 최적화에 React만큼 주의하지 않아도 되어 개발의 피로도가 덜하다.',
      '문법구조가 단순하고 단일화되어 있어서, 가독성 좋은 코드가 생성되고 개발 속도가 빨랐다. modelValue는 리액트 개발 시 그리운 점 중 하나다.',
      'vue-router에서 컴포넌트마다 path가 아닌 이름을 지정하여 라우팅이 가능하다. 가독성이 좋았고, 개발 도중이나 후에 path가 변경될 때 유지 보수하기 좋을 거 같다는 생각을 했다.',
      '파일당 하나의 컴포넌트만 생성 가능하여(SFC), 추가되는 컴포넌트 파일이 리액트에 비해 많았다.',
      'Typescript와 친화적이지 않았다. 잦은 이유 없는 타입 오류와 sfc 파일에서 타입을 export 할 수 없는 점, Vuex에서의 호환성이 좋지 않았다.',
      '생태계가 좁아서 선택할 수 있는 라이브러리가 별로 없다.',
      'Vite의 개발 서버 구동시간이 굉장히 빨랐다.(Webpack과 비교 불가할 정도로..)',
    ],
  },
  {
    id: 3,
    type: 'desktop',
    title: '임상시험 문서 실시간 편집 서비스',
    project_name: 'Mediwriter',
    summary: '임상시험 문서를 유저가 동시에 편집할 수 있는 서비스',
    stacks: ['React', 'Typescript', 'Django'],
    thumbnail: Mediwriter0,
    images: [
      Mediwriter1,
      Mediwriter2,
      Mediwriter3,
      Mediwriter4,
      Mediwriter5,
      Mediwriter6,
    ],
    intro_summary:
      '로그인한 유저 2명이 동시에 실시간으로 임상시험 문서를 등록, 편집, 삭제할 수 있습니다.\n실시간 편집 서비스는 에디터에서 제공하는 websocket 서버를 이용했습니다.',
    intros: [
      '문서를 작성하며 다른 임상시험 문서와 용어 검색 가능',
      '문서 작성 중 코멘트 작성',
      '문서 편집 히스토리 보기',
      '어드민 페이지에서 모든 문서, 유저 관리 가능',
    ],
    date_range: '2022.09 ~ 2022.12',
    positions: ['프론트엔드', '백엔드', '퍼블리싱', 'DB설계', '배포'],
    app_types: ['Web'],
    front_stacks: ['React', 'Typescript'],
    back_stacks: ['Django', 'Python', 'Django-Ninja'],
    stylings: ['Tailwindcss'],
    state_manages: ['React-Query'],
    bundlers: ['Webpack'],
    distributions: ['EC2', 'Nginx'],
    collaboration_tools: ['Figma', 'Notion'],
    dbs: ['PostgreSQL'],
    purposes: [
      'Django를 이용하여 백엔드 서비스 개발',
      'AWS RDS, EC2 서비스 사용 및 경험',
      'CKEditor 에디터 라이브러리에서 제공하는 실시간 협업편집서비스 적용',
    ],
    learing_summary:
      '서버개발을 하며 Webserver, Web Application Server에 대해 온전히 이해하게 되었습니다.\n또한 프로젝트를 직접 배포해보며 실제 서비스를 클라우드 서비스를 통해 운영해 볼 수 있었던 프로젝트 였습니다.',
    learnings: [
      'ORM을 이용하여 데이터베이스에 접근하고, 원하는 형태로 가공하여 api를 만들 수 있었다.',
      '웹서버와 파이썬 프레임워크 사이에서 통신하기 위해서 미들웨어가 필요하다는 것을 알았고, WSGI로 Gunicorn, uWSGI 등이 있다.',
      '빠르게 API를 만들기 위해 django-ninja 프레임워크를 사용했는데, 후에 django-rest-framework를 사용하여 좀 더 깔끔한 rest api 구조로 만들어보고 싶다.',
      '양방향 통신을 하는 WebSocket을 이용한다면 실시간 서비스를 만들 수 있다.',
      'Django에서 기본으로 제공하는 서비스가 편리했다. (유저, 인증, 어드민 등)',
    ],
    website_link: 'https://www.mediwriter.co.kr',
    requireds: [
      '로그인이 필요한 서비스 입니다.',
      '에디터는 현재 사용 할 수 없습니다.',
    ],
  },
  {
    id: 4,
    type: 'desktop',
    title: '뉴스분석서비스',
    project_name: 'Pacific Analyzer',
    summary: '크롤링한 세계 뉴스를 자연어 분석 후 시각화하여 제공하는 서비스',
    stacks: ['React', 'Typescript'],
    thumbnail: Pacific0,
    intro_summary:
      '세계 뉴스를 크롤링 하여 자연어 분석 후 인물, 회사, 키워드를 도출하여 각종 차트로 보여주는 서비스입니다.',
    intros: [
      '일간, 주간, 월간 떠오르는 키워드 제공',
      '분석된 키워드의 언급횟수와 특정 종목의 주가를 비교하여 기간별 상관관계 비교',
      '키워드 상세 분석 정보를 네트워크 차트를 통해 시각화하여 제공',
    ],
    date_range: '2022.02 ~ 2022.04',
    app_types: ['Web'],
    positions: ['프론트엔드', 'API 데이터구조 설계'],
    front_stacks: ['React', 'Typescript'],
    state_manages: ['React-Query', 'Recoil'],
    collaboration_tools: ['MS Teams'],
    purposes: [
      'Highcharts Stock과 별도 가공데이터 조합해서 비교분석 가능 차트 만들기',
      '대용량 데이터를 네트워크 차트에 매끄럽게 렌더링하기',
      'API 구조 설계',
    ],
    learing_summary:
      '처음으로 대용량 데이터를 다뤄본 프로젝트입니다. 렌더링 이슈와 가독성이 떨어지는 문제를 해결하기 위해 많은 고민을 했고, 직접 API 데이터를 설계하여 백엔드 역할도 경험해 볼 수 있었습니다.',
    learnings: [
      '네트워크 차트에는 너무 많은 이벤트(tap, mouseover, mouseout, createCore, wordcloudClick 등)가 있었고, 연동된 컴포넌트(Wordcloud, 연관뉴스리스트)가 많았다.\n이 이벤트들을 별도의 Hook으로 분리하여(useNetworkChart) 로직은 hook에서 관리하고 컴포넌트에서는 해당 이벤트를 가져다 쓰기만 하면 되어 가독성과 유지보수성이 좋아졌다.',
      '분석된 키워드도 많았는데, 그에 매칭된 뉴스도 상당량이어서 첫 화면 렌더링 시간이 30초 이상 걸렸었다. 그래서 화면에서 바로 보이지 않아도 되는 뉴스 데이터는 제거하고 뉴스 타이틀을 클릭 시 해당 뉴스 정보를 가져오는 식으로 api를 재설계하여 렌더링 시간을 60% 이상 단축시켰다. (30초 => 10초)',
    ],
  },
  {
    id: 5,
    type: 'desktop',
    title: '투자추천서비스 전문가용',
    project_name: 'Investpick Expert',
    summary:
      '미국 주식시장 흐름을 분석하여 ETF 상품을 선별해 추천해 주는 기업용 서비스',
    stacks: ['React', 'Typescript'],
    stylings: ['Tailwindcss'],
    thumbnail: Expert0,
    intro_summary:
      '로보어드바이저가 선별한 미국 투자 상품을 추천해주고 각종 차트로 시각화하여 제공하는 서비스입니다.',
    intros: [
      '주식시장의 흐름과 섹터, 업종별 ETF 상품 분석 및 선별',
      '원하는 상품을 각각 선택 후 시각화 형태로 비교',
    ],
    date_range: '2021.10 ~ 2022.01',
    app_types: ['Web'],
    positions: [
      '프론트엔드',
      '퍼블리싱',
      '디자인',
      '기획',
      'API 데이터구조 설계',
    ],
    front_stacks: ['React', 'Typescript'],
    state_manages: ['React-Query', 'Recoil'],
    collaboration_tools: ['MS Teams'],
    purposes: [
      '프론트 개발 이외에 디자인 선정부터 기획까지 직접 참여',
      '대시보드 형태의 레이아웃 well-made 구조 고민',
    ],
    learing_summary:
      '프로젝트의 기획, 디자인선정, 개발 모두 참여하면서 많은 소통이 있었던 프로젝트 였습니다.',
    learnings: [
      'Typescript를 본격적으로 쓰기 시작한 프로젝트로, 각종 타입형태에 대해 배우며 알아갔고, 타입에러 핸들링을 하는 방법을 배웠다.',
      'Tailwindcss기반의 무료 템플릿을 가져와 수정하여 빠르게 잘 만들어진 화면 레이아웃을 구성할 수 있었다.',
    ],
  },
  {
    id: 6,
    type: 'mobile',
    title: '투자추천서비스',
    project_name: '투자콕',
    summary: '주식시장 흐름을 분석하여 투자 상품을 추천해 주는 서비스',
    stacks: ['React'],
    stylings: ['Bookstrap', 'Styled-Components'],
    thumbnail: Investpick0,
    images: [Investpick1, Investpick2, Investpick3, Investpick4],
    intro_summary:
      '유저에게 주식시장의 흐름을 보여주고 로보어드바이저가 선별한 투자 상품을 제공하는 서비스입니다.',
    intros: [
      '주식시장의 흐름과 섹터, 토픽, 뉴스, 업종 등 분석 및 제공',
      '자체 분석한 펀드상품 제공',
      '종목 검색 및 종목별 분석정보 제공',
    ],
    date_range: '2020.11 ~ 2021.03',
    positions: ['프론트엔드(only react)', '퍼블리싱'],
    app_types: ['Mobile WebView'],
    front_stacks: ['React', 'React-Native'],
    state_manages: ['SWR', 'Context API'],
    collaboration_tools: ['Zeplin', 'MS Teams'],
    purposes: [
      '실무 코드 학습 및 업무능률 향상',
      '유지 보수 용이한 컴포넌트 구조 고민',
      '에러 대처 능력 향상',
    ],
    learing_summary:
      '처음 입사하여 진행한 프로젝트로, 프론트엔드 개발의 모든 것을 배우고 적용해 볼 수 있는 프로젝트였습니다.',
    learnings: [
      '컴포넌트 내부에 로직을 추가하면 확장성이 떨어지는 컴포넌트가 된다. (컴포넌트는 데이터를 보여주는 용도로만 쓰자)',
      '모바일 앱은 Webview로 브라우저를 띄워서 보여 줄 수 있고 앱스토어 업데이트 대응에 용이하다.',
      '차트 라이브러리(Echarts)를 이용하여 line, pie, scatter, treemap 등 다양한 차트를 개발했다.',
      '렌더링 최적화를 하지 않는다면 매끈한 화면(특히 차트)을 보여줄 수 없다',
    ],
    website_link: 'https://www.ibigtree.kr/products/investpick',
    requireds: ['2022년까지 관리된 앱서비스 입니다.'],
  },
];
