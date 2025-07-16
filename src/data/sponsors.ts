
import logoPlaceHolder from "@assets/logo_placeholder.svg";
import canonicalLogo from "@assets/sponsors/ubuntu.svg";
import microsoftLogo from "@assets/sponsors/microsoft.png";
import hanbitMediaLogo from "@assets/sponsors/hanbit-media.svg";
import lablupLogo from "@assets/sponsors/lablup.svg";
import whatapLogo from "@assets/sponsors/whatap.png";
import grometric from "@assets/sponsors/grometric.svg";
import yozmitLogo from "@assets/sponsors/yozmit.svg";
import telechipsLogo from "@assets/sponsors/TOPST.svg";
import openinfraLogo from "@assets/sponsors/openinfra.svg";
import cppKoreaLogo from "@assets/sponsors/cppkorea.svg";

export const sponsors = [
    {
        sponsorLevelName: "Gold",
        sizeOnLargeScreen: 5,
        sizeOnMediumScreen: 5,
        sizeOnSmallScreen: 4,
        showPopup: true,
        list: [
            {
                name: "Ubuntu",
                logoUrl: canonicalLogo.src,
                url: "https://ubuntu.com/",
                description: "Canonical은 대부분의 퍼블릭 클라우드 워크로드를 위한 OS이자 스마트 게이트웨이, 자율 주행 자동차 및 Advanced robot 등 새롭게 떠오르는 분야를 위한 OS인 Ubuntu를 개발 및 배포하는 회사입니다. Canonical은 상용 Ubuntu 사용자에게 엔터프라이즈 보안, 지원 및 서비스를 제공합니다."
            },
            {
                name: "Telechips",
                logoUrl: telechipsLogo.src,
                url: "https://topst.ai/",
                description: `텔레칩스는 차량용 반도체 기술력을 바탕으로, 이제 차량 외 분야로 확장하며 TOPST 브랜드를 통해 Single Board Computer(SBC) 시장에 진입합니다.
TOPST는 개발자 친화적인 환경을 위해 Ubuntu를 주요 지원 OS로 채택했으며, TOPST 전용 Ubuntu를 통해 고성능 SBC를 보다 손쉽게 경험하실 수 있습니다.`
            }
        ]
    },
    {
        sponsorLevelName: "Venue",
        sizeOnLargeScreen: 5,
        sizeOnMediumScreen: 5,
        sizeOnSmallScreen: 4,
        showPopup: true,
        list: [
            {
                name: "Microsoft Korea",
                logoUrl: microsoftLogo.src,
                url: "https://azure.microsoft.com/en-us/ubuntu/?ocid=AID3035196",
                description: "Microsoft는 지구상의 모든 사람과 조직이 더 많은 것을 성취할 수 있도록 역량을 지원하는 것을 사명으로 삼고 있습니다. Ubuntu 기반 워크로드는 Azure에서 가장 빠르게 성장하고 있는 워크로드 중 하나입니다. Microsoft는 Canonical과 제휴하여 Azure에서 동작하는 Ubuntu와 오픈 소스 커뮤니티 참여를 통해 Azure에 최적화된 커널, 개선된 성능, 고급 보안, 자동 패치 및 업데이트, 유연한 가격 책정 옵션을 제공합니다."
            },

        ]
    },
    {
        sponsorLevelName: "Bronze",
        sizeOnLargeScreen: 3,
        sizeOnMediumScreen: 3,
        sizeOnSmallScreen: 2,
        showPopup: true,
        list: [
            {
                name: "GroMetric",
                logoUrl: grometric.src,
                url: "http://www.grometric.kr/",
                description: "그로메트릭은 고객의 지속가능한 성장을 위한 인텔리전스와 안전함을 제공합니다. 중장기적인 관점에서 데이터 메트릭을 통한 고객의 성장을 돕는 솔루션 개발을 목표하고 있어요. 아울러 다양한 OpenSource Software, Cloud, Security 솔루션으로 여러분의 성장과 함께 하고 싶어요."
            },
            {
                name: "Lablup",
                logoUrl: lablupLogo.src,
                url: "https://www.lablup.com/ko",
                description:
                    `*Make AI Accessible.* 

AI 도입 과정의 장벽을 낮추는 AI 인프라 혁신 기업 래블업은 클라우드 컴퓨팅과 인공지능(AI) 기술을 통해 컴퓨팅 기반 연구 및 서비스의 새로운 패러다임을 선도합니다.

업계를 선도하는 GPU 가상화 기술을 제공하는 [Backend.AI](https://www.backend.ai/ko)는 개발자들이 사용하기 쉬운 플랫폼입니다. 클라우드, 온프레미스, 또는 그 중간 어디에 있더라도, Backend.AI는 여러분에게 맞춘 유연한 백엔드 인프라가 되어 드립니다.`,
            },
            {
                name: "WhaTap Labs",
                logoUrl: whatapLogo.src,
                url: "https://www.whatap.io/",
                description: "WhaTap Labs 에서는 IT 모니터링 서비스인 “WhaTap”으로, 개발자와 운영자가 IT 서비스를 더 쉽고 안정적으로 운영할 수 있도록 하고 있습니다."
            }
        ]
    },
    {
        sponsorLevelName: "Media",
        sizeOnLargeScreen: 3,
        sizeOnMediumScreen: 3,
        sizeOnSmallScreen: 2,
        showPopup: true,
        list: [
            {
                name: "한빛미디어",
                logoUrl: hanbitMediaLogo.src,
                url: "https://www.hanbit.co.kr/media",
                description:
                    `한빛미디어(주)는 책으로 여는 IT 세상을 만들고 있습니다.

우리 시대의 주역들을 위한 프로그래밍, 컴퓨터 공학, IT 에세이와 더불어 일반 사용자를 위한 OA, 그래픽 등 IT 활용서와 나와 내 아이를 위한 실용서까지 다양한 분야의 책으로 IT 세상을 만들어 가고 있습니다.
                
IT 전문가와 미래의 전문가를 꿈꾸는 이의 동반자로 30년 한 길을 걸어온 한빛미디어(주)는 앞으로도 여러분과 함께 그려가는 멋진 미래를 꿈꾸며 '책으로 여는 IT 세상'을 만들어 가겠습니다. 한빛미디어가 만드는 IT뉴스레터 데브잇냥에도 많은 응원 부탁드립니다.
                
😸데브잇냥 구독하기 [https://hanbit.co.kr/devletter/](https://hanbit.co.kr/devletter/)`
            },
            {
                name: "요즘IT",
                logoUrl: yozmitLogo.src,
                url: "https://yozm.wishket.com",
                description:
                    `
요즘IT는 IT업계 현업 실무 전문가의 경험과 지식, 인사이트를 전하는 콘텐츠 플랫폼입니다. AI, 개발, 기획, 디자인 등 다양한 IT 실무 정보와 트렌드가 매일 올라오고, 뉴스레터 PICK IT을 통해 주 1회 큐레이션된 정보를 받아볼 수 있습니다. 실무 전문가의 신뢰할 만한 콘텐츠와 독자를 연결해, IT업계가 함께 학습하며 성장할 수 있는 선순환을 만드는 데 기여하고자 합니다. 요즘IT X에서 가끔 이벤트도 진행하니 놀러오세요! 

👉요즘IT X: [https://x.com/yozm_it](https://x.com/yozm_it)

👉요즘IT 인스타그램: [https://www.instagram.com/yozm.it/](https://www.instagram.com/yozm.it/)
`
            }
        ]
    },
    {
        sponsorLevelName: "Community",
        sizeOnLargeScreen: 3,
        sizeOnMediumScreen: 3,
        sizeOnSmallScreen: 2,
        showPopup: true,
        list: [
            {
                name: "오픈 인프라 한국 사용자 모임",
                logoUrl: openinfraLogo.src,
                url: "https://openinfra-kr.org/",
                description: `**오픈스택을 포함, 오픈 인프라에 대한 주제를 자유롭게 논의하는 커뮤니티입니다.**

2011년 2월 시작한 오픈스택 한국 커뮤니티는 2012년 9월 설립된 OpenStack Foundation으로부터 공식 커뮤니티로 인정받아 클라우드를 구축하는 오픈 소스인 OpenStack과 함께 발전하였습니다.

2020년 10월 재단이 Open Infrastructure Foundation으로 명칭 변경을 하였고, 국내 커뮤니티 또한 발맞추어 현재는 "오픈 인프라 한국 사용자 모임"을 공식 명칭으로 사용하고 있습니다.

온라인 커뮤니티 및 문서 서비스 제공, 각종 세미나와 컨퍼런스 개최, 오픈스택 및 관련 오픈소스 기술에 대한 그룹 스터디와 연구/개발 및 프로젝트 등 다양한 활동을 하고 있습니다.
                
- 국내 엔지니어 및 개발자를 대상으로 정기 세미나 개최
- 오픈 인프라 프로젝트를 스터디하는데 돕기
- 업스트림 트레이닝을 통한 오픈인프라 프로젝트 참여, 컨트리뷰션 및 확산
- 관련 커뮤니티와 오픈 인프라 커뮤니티 데이 행사를 매년 개최

[포럼](https://forum.openinfra-kr.org/) / [Facebook 그룹](https://fb.com/groups/openstack-kr) / [위키](https://wiki.openstack.org/wiki/Korea)
`
            },
            {
                name: "C++ Korea",
                logoUrl: cppKoreaLogo.src,
                url: "https://github.com/cppkorea",
                description: "한국에서 C++을 사용하는 사람들에게 도움이 되는 정보를 공유하고 서로 발전하기 위한 취지로 2013년 10월 8일에 개설한 커뮤니티입니다."
            }
        ]
    }
]
