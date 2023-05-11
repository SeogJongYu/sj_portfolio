import Sommelier0 from '~/assets/image/projects/sommelier_0.png';
import Sommelier1 from '~/assets/image/projects/sommelier_1.png';
import Sommelier2 from '~/assets/image/projects/sommelier_2.png';
import Sommelier3 from '~/assets/image/projects/sommelier_3.png';
import Sommelier4 from '~/assets/image/projects/sommelier_4.png';
import Sommelier5 from '~/assets/image/projects/sommelier_5.png';
import {ProjectInfo} from '~/types/common';

export const projectInfos: ProjectInfo[] = [
  {
    id: 1,
    title: '주류 검색 및 추천 서비스',
    project_name: 'AI 소믈리에',
    summary:
      '주류와 커피를 각종 필터를 통해 검색하고, 유저가 찜한 상품과 관련된 상품을 추천해주는 서비스',
    stacks: ['React', 'Typescript', 'React-Query', 'Tailwindcss', 'Emotion'],
    thumbnail: Sommelier0,
    images: [Sommelier1, Sommelier4, Sommelier5, Sommelier2, Sommelier3],
    intro:
      '사용자가 찜한 음료와 비슷한 취향의 음료를 알고리즘을 통해 추천해주는 서비스 입니다. 내장된 기능은 다음과 같습니다.',
    intro_list: [
      '각 음료별 3,000개 이상의 데이터를 통해 다양한 음료를 필터 통해 검색',
      '음료의 상세 정보 검색',
      '자연어 검색',
      '찜목록을 이용해 내 취향 음료 수집 및 연관음료 추천',
      '테이스팅 노트 작성 및 수정, 삭제',
    ],
    date_range: '2023.01 ~ 2023.04',
    position: ['프론트엔드', '퍼블리싱', '배포'],
    language: ['React', 'Typescript'],
    styling: ['Tailwindcss', 'Emotion', 'twin.macro'],
    state_manage: ['React-Query', 'Recoil'],
    bundler: ['Webpack'],
    distribution: ['EC2', 'Nginx'],
    collaboration_tool: ['Notion'],
    purpose:
      '• 음료의 필터 컴포넌트 유지보수 가능하고 가독성 좋은 구조 고민\n• react-hook-form 라이브러리 적용\n• tailwindcss와 emotion을 결합한 twin.macro 적용\n• SNS 로그인 구현',
    purpose_list: [
      '음료의 필터 컴포넌트 유지보수 가능하고 가독성 좋은 구조 고민',
      'react-hook-form 라이브러리 적용',
      'tailwindcss와 emotion을 결합한 twin.macro 적용',
      'SNS 로그인 구현',
    ],
    learing_summary:
      '비제어 컴포넌트로 렌더링 최적화가 어떻게 이루어지는지와 스타일링을 좀 더 간결하고 유지보수하기 좋은 구조를 만들고자 했습니다.\n또한 지금까지 프론트엔드 세팅은 기존 만들어져있던 템플릿을 사용했는데, 프로젝트 자체도 직접 세팅해보며 웹팩의 상세 설정에 대해 알아보았습니다.',
    learning_list: [
      'react-hook-form의 상태값은 실시간으로 업데이트 되지 않고, submit시 최신 상태값을 받아온다.',
      '프로젝트에서 필터는 상태값에 따라 UI가 바뀌고 데이터를 fetch해야 하므로 렌더링 최적화를 한다는것은 잘못된 방향이었다.',
      'FormProvider 안에서 useFormContext를 사용하여 별도의 컴포넌트를 제작하여 필터를 분리시키면 prop drilling 할 필요 없이 간결하게 컴포넌트화 할 수 있다.',
      '모든게 완벽했던 tailwindcss에서 한가지 아쉬웠던 점은 변수할당을 할 수 없었던 점인데, twin.macro를 이용해 emotion과 조합하여 변수할당 가능한 tailwindcss 컴포넌트를 제작할 수 있었다.',
      '카카오, 구글 API + 라이브러리를 이용하여 유저 인증 로그인을 구현했는데, 다음엔 라이브러리를 사용하지 않고 직접 구현 예정',
    ],
    website_link: 'https://aisommelier.co.kr',
    required_list: [
      '로그인이 필요한 서비스 입니다.',
      '만약 가입을 한다면 구글을 추천합니다. (카카오는 이메일 수집에 체크해야 사용가능합니다.)',
    ],
  },
];
