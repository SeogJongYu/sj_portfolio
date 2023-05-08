import Sommelier0 from '~/assets/image/projects/sommelier_0.png';
import Sommelier1 from '~/assets/image/projects/sommelier_1.png';
import Sommelier2 from '~/assets/image/projects/sommelier_2.png';
import Sommelier3 from '~/assets/image/projects/sommelier_3.png';
import Sommelier4 from '~/assets/image/projects/sommelier_4.png';

export interface ProjectInfo {
  id: number;
  title: string;
  project_name: string;
  summary: string;
  stacks: string[];
  thumbnail: string;
  images: string[];
  intro: string;
}

export const projectInfos: ProjectInfo[] = [
  {
    id: 1,
    title: '주류 검색 및 추천 서비스',
    project_name: 'AI 소믈리에',
    summary:
      '주류와 커피를 각종 필터를 통해 검색하고, 유저가 찜한 상품과 관련된 상품을 추천해주는 서비스',
    stacks: ['React', 'Typescript', 'React-Query', 'Tailwindcss', 'Emotion'],
    thumbnail: Sommelier0,
    images: [Sommelier1, Sommelier2, Sommelier3, Sommelier4],
    intro:
      '사용자가 찜한 음료와 비슷한 취향의 음료를 알고리즘을 통해 추천해주는 서비스 입니다. 내장된 기능은 다음과 같습니다.\n\n• 각 음료별 3,000개 이상의 데이터를 통해 다양한 음료를 필터 통해 검색\n• 음료의 상세 정보 검색\n• 자연어 검색\n• 찜목록을 이용해 내 취향 음료 수집\n• 테이스팅 노트 작성 및 수정, 삭제',
    // intro:
    //   '사용자가 찜한 음료와 비슷한 취향의 음료를 알고리즘을 통해 추천해주는 서비스 입니다. 내장된 기능은 다음과 같습니다.\n또한 각 음료별 3,000개 이상의 데이터가 있어서 다양한 음료를 검색해 볼 수 있고, 테이스팅 노트를 작성 할 수 있습니다.',
  },
];
