import Sommelier0 from '~/assets/image/projects/sommelier_0.png';
import Sommelier1 from '~/assets/image/projects/sommelier_1.png';
import Sommelier2 from '~/assets/image/projects/sommelier_2.png';
import Sommelier3 from '~/assets/image/projects/sommelier_3.png';
import Sommelier4 from '~/assets/image/projects/sommelier_4.png';
import Sommelier5 from '~/assets/image/projects/sommelier_5.png';
import Ypbooks0 from '~/assets/image/projects/ypbooks_0.png';
import {ProjectInfo} from '~/types/common';

export const projectInfos: ProjectInfo[] = [
  {
    id: 1,
    title: '주류 검색 및 추천 서비스',
    project_name: 'AI 소믈리에',
    summary:
      '주류와 커피를 각종 필터를 통해 검색하고, 유저가 찜한 상품과 관련된 상품을 추천해주는 서비스',
    stacks: ['React', 'Typescript'],
    thumbnail: Sommelier0,
    images: [Sommelier1, Sommelier4, Sommelier5, Sommelier2, Sommelier3],
    intro_summary:
      '사용자가 찜한 음료와 비슷한 취향의 음료를 알고리즘을 통해 추천해주는 서비스 입니다. 내장된 기능은 다음과 같습니다.',
    intros: [
      '각 음료별 3,000개 이상의 데이터를 통해 다양한 음료를 필터 통해 검색',
      '음료의 상세 정보 검색',
      '자연어 검색',
      '찜목록을 이용해 내 취향 음료 수집 및 연관음료 추천',
      '테이스팅 노트 작성 및 수정, 삭제',
    ],
    date_range: '2023.01 ~ 2023.04',
    positions: ['프론트엔드', '퍼블리싱', '배포'],
    languages: ['React', 'Typescript'],
    stylings: ['Tailwindcss', 'Emotion', 'twin.macro'],
    state_manages: ['React-Query', 'Recoil'],
    bundlers: ['Webpack'],
    distributions: ['EC2', 'Nginx'],
    collaboration_tools: ['Notion'],
    purposes: [
      '음료의 필터 컴포넌트 유지보수 가능하고 가독성 좋은 구조 고민',
      'react-hook-form 라이브러리 적용',
      'tailwindcss와 emotion을 결합한 twin.macro 적용',
      'SNS 로그인 구현',
    ],
    learing_summary:
      '비제어 컴포넌트로 렌더링 최적화가 어떻게 이루어지는지와 스타일링을 좀 더 간결하고 유지보수하기 좋은 구조를 만들고자 했습니다.\n또한 지금까지 프론트엔드 세팅은 기존 만들어져있던 템플릿을 사용했는데, 프로젝트 자체도 직접 세팅해보며 웹팩의 상세 설정에 대해 알아보았습니다.',
    learnings: [
      'react-hook-form의 상태값은 실시간으로 업데이트 되지 않고, submit시 최신 상태값을 받아온다.',
      '프로젝트에서 필터는 상태값에 따라 UI가 바뀌고 데이터를 fetch해야 하므로 렌더링 최적화를 한다는것은 잘못된 방향이었다.',
      'FormProvider 안에서 useFormContext를 사용하여 별도의 컴포넌트를 제작하여 필터를 분리시키면 prop drilling 할 필요 없이 간결하게 컴포넌트화 할 수 있다.',
      '모든게 완벽했던 tailwindcss에서 한가지 아쉬웠던 점은 변수할당을 할 수 없었던 점인데, twin.macro를 이용해 emotion과 조합하여 변수할당 가능한 tailwindcss 컴포넌트를 제작할 수 있었다.',
      '카카오, 구글 API + 라이브러리를 이용하여 유저 인증 로그인을 구현했는데, 다음엔 라이브러리를 사용하지 않고 직접 구현 예정',
    ],
    website_link: 'https://aisommelier.co.kr',
    requireds: [
      '로그인이 필요한 서비스 입니다.',
      '만약 가입을 한다면 구글을 추천합니다. (카카오는 이메일 수집에 체크해야 사용가능합니다.)',
    ],
  },
  {
    id: 2,
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
    languages: ['Vue3', 'Typescript'],
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
      'vue-router에서 컴포넌트마다 path가 아닌 이름을 지정하여 라우팅이 가능하다. 가독성이 좋았고, 개발 도중이나 후에 path가 변경될 때 유지보수하기 좋을거 같다는 생각을 했다.',
      '파일당 하나의 컴포넌트만 생성 가능하여(SFC), 추가되는 컴포넌트 파일이 리액트에 비해 많았다.',
      'Typescript와 친화적이지 않았다. 잦은 이유없는 타입오류와 sfc 파일에서 타입을 export 할 수 없는 점, Vuex에서의 호환성이 좋지 않았다.',
      '생태계가 좁아서 선택할 수 있는 라이브러리가 별로 없다.',
      'Vite의 개발 서버 구동시간이 굉장히 빨랐다.(Webpack과 비교 불가할 정도로..)',
    ],
  },
];
