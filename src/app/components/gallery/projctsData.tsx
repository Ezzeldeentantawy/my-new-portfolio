import { ProjectWLink } from "./projectWithLinkCard";
import { Layali } from "./projectsWithImgGallery/layali";
// import { ProjectCard } from "./comingSoonProjectsComponent/projectCard";
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
            "Vanilla Projects",
        ],
        component: <Layali />,
    },
    {
        id: 4,
        category: [
            "Website",
            "Vanilla Projects",
        ],
        component: (
            <ProjectWLink
                link="https://tasks-management-native-app.netlify.app/"
                title="Task management app"
                src="/gallery/todo.png"
                alt="my old portfolio image"
            />
        ),
    },
];
