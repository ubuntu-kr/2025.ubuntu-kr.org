
import logoPlaceHolder from "@assets/logo_placeholder.svg";
import canonicalLogo from "@assets/sponsors/ubuntu.svg";
import microsoftLogo from "@assets/sponsors/microsoft.png";
import hanbitMediaLogo from "@assets/sponsors/hanbit-media.svg";
import lablupLogo from "@assets/sponsors/lablup.svg";
import whatapLogo from "@assets/sponsors/whatap.png";
import grometric from "@assets/sponsors/grometric.svg";
import yozmitLogo from "@assets/sponsors/yozmit.svg";
import telechipsLogo from "@assets/sponsors/telechips.svg";

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
                url: "https://telechips.com",
                description: `**미래를 위한 기술, 모두를 위한 모빌리티로 세상을 변화시킵니다.**

텔레칩스는 차량용 반도체 분야에서 미래를 위한 혁신적인 기술을 바탕으로, IVIㆍCockpit, ADASㆍAI, MCU, Network gateway 등
모두를 위한 스마트 모빌리티 실현에 다양한 솔루션을 제공합니다.
우리는 기술을 연결하고 통합하는 시스템 반도체 기술이 곧 미래 모빌리티 경쟁력의 핵심이라는 확고한 신념을 바탕으로,
고객 중심의 기술 혁신과 글로벌 협력을 통해 자동차 제조사와의 신뢰를 구축하며 지속적인 성장을 이루어오고 있습니다.
앞으로도 텔레칩스는 새로운 기술과 가능성의 확장을 통해 세상을 변화시키며, 지속 가능한 내일을 향한 여정을 멈추지 않을 것입니다.

반도체 기술로 연결된 미래 모빌리티, 모두를 위한 모빌리티 라이프, 그 길에 텔레칩스가 함께합니다.`
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
        sponsorLevelName: "Silver",
        sizeOnLargeScreen: 4,
        sizeOnMediumScreen: 4,
        sizeOnSmallScreen: 3,
        showPopup: true,
        list: [

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
        sponsorLevelName: "Supporter",
        sizeOnLargeScreen: 3,
        sizeOnMediumScreen: 3,
        sizeOnSmallScreen: 2,
        showPopup: true,
        list: [

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
]