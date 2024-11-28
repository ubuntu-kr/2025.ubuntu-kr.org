

import * as m from "./paraglide/messages.js";
import UCALogo from './assets/logo.svg'
import PashupatinathTempleImage from '@assets/pashupatinath_temple.jpg'
import UbuConAsiaCommitteeLogo from "@assets/UbuConAsiaCommittee.svg"
import OSCollectiveLogo from "@assets/oscollective.webp";

export interface SubMenuItem {
    link: string;
    label: string;
}

export const WebsiteConfig = {
    siteTitle: "UbuCon Asia 2025",
    siteDescription: "Kathmandu, Nepal | August 30-31",
    faviconPath: UCALogo.src,
    navigation: (locale: string) => [
        {
            label: m.nav_about(),
            link: `/${locale}/about`,
            childs: []
        },
        {
            label: m.nav_venue_travel(),
            link: "#",
            childs: [
                {
                    label: m.nav_venue_safety(),
                    link: `/${locale}/venue-and-travel/venue-and-safety`,
                },
                {
                    label: m.nav_venue_visas(),
                    link: `/${locale}/venue-and-travel/visas-and-other-travel-requirements`,
                },
                {
                    label: m.nav_venue_accommodations(),
                    link: `/${locale}/venue-and-travel/accommodations`,
                },
                {
                    label: m.nav_venue_city(),
                    link: `/${locale}/venue-and-travel/getting-to-the-city`,
                },
                {
                    label: m.nav_venue_explore(),
                    link: `/${locale}/venue-and-travel/explore-city`,
                },
                {
                    label: m.nav_venue_grant(),
                    link: `/${locale}/venue-and-travel/travel-grant`,
                }
            ]
        },
        {
            label: m.nav_programs(),
            link: "#",
            childs: [
                {
                    label: m.nav_programs_timetable(),
                    link: "https://events.canonical.com/event/125/timetable/"
                },
                {
                    label: m.nav_programs_social(),
                    link: `/${locale}/programs/social-events/`
                }
            ]
        },
        {
            label: m.nav_sponsors(),
            link: "#",
            childs: [
                {
                    label: m.nav_sponsors_become(),
                    link: `/${locale}/sponsors/become-a-sponsor/`
                },
                {
                    label: m.nav_sponsors_our(),
                    link: `/${locale}/sponsors/our-sponsors/`
                },
                {
                    label: m.nav_sponsors_patrons(),
                    link: `/${locale}/sponsors/patrons/`
                }
            ]
        },
        {
            label: m.nav_links(),
            link: "#",
            childs: [
                {
                    label: m.nav_links_news(),
                    link: "https://blog.ubucon.asia/",
                },
                {
                    label: m.nav_links_docs(),
                    link: "https://docs.ubucon.asia",
                },
                {
                    label: m.nav_links_chat(),
                    link: "https://docs.ubucon.asia/chat",
                }
            ]
        }
    ],
    subNavigation: [
        {
            label: "🎟️",
            link: "#",
            childs: [

            ]
        }
    ],
    footer: {
        copyright: "© 2024-Present UbuCon Asia Committee. Ubuntu and Canonical are registered trademarks of Canonical Ltd. Unless otherwise noted, content licensed under CC BY 4.0 source code under MIT.",
        contactUs: "mailto:contact@ubucon.asia",
        srcRepoUrl: "https://github.com/ubucon-asia/2025.ubucon.asia",
        organizers: [
            { name: "UbuCon Asia Committee", logoImage: UbuConAsiaCommitteeLogo.src, link: "https://www.ubucon.asia" },
            { name: "Open Source Collective", logoImage: OSCollectiveLogo.src, link: "https://www.oscollective.org/" }
        ]
    },
    mainBanner: {
        showFootnote: true,
        buttons: [
            {
                label: "Become a sponsor!",
                link: "/sponsors/become-a-sponsor",
                class: "p-button--positive"
            }
        ],
        logo: UCALogo
    },
    featuredSpeakers: {
        indicoExportUrl: "https://events.canonical.com/export/event/47.json?detail=contributions&occ=yes&pretty=yes",
        contributionIds: [20, 46, 43, 34, 19],
        speakerIds: [{ db_id: 522, user: 107 }, { db_id: 517, user: 166 }, { db_id: 494, user: 615 }, { db_id: 515, user: 628 }, { db_id: 516, user: 271 }, { db_id: 487, user: 3 }],
        fullSchedulesUrl: "https://events.canonical.com/event/47/contributions/"
    },
    cityBanner: {
        cityImage: PashupatinathTempleImage.src
    },
    blog: {
        rssFeedUrl: "https://blog.ubucon.asia/tags/uca24/index.xml",
        viewMoreUrl: "https://blog.ubucon.asia/tags/uca24"
    },
}
