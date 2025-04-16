import { ProjectWLink } from "./projectWithLinkCard";
import { Layali } from "./projectsWithImgGallery/layali";
import { ProjectCard } from "./comingSoonProjectsComponent/projectCard";
export const ProjectData = [
    {
        id: 1,
        category: [
            "Website",
            "Portfolio",
            "React",
        ],
        component: (
            <ProjectWLink
                link="https://portfolio-7ify.vercel.app"
                title="My old portfolio"
                src="/gallery/old-portfolio.png"
                alt="my old portfolio image"
            />
        ),
    },
    {
        id: 2,
        category: [
            "Website",
            "Retaurant",
            "HTML,CSS & JS",
        ],
        component: <Layali />,
    },
    {
        id: 3,
        category: [
            "Website",
            "Big Projects",
            "nextjs",
        ],
        component: <ProjectCard />,
    },
];
