"use client";
import { useState } from "react";
import { ProjectData } from "./projctsData";

export const Gallery = () => {
    const [filter, setFilter] = useState("All");

    const allTags = Array.from(
        new Set(ProjectData.flatMap((p) => p.category))
    );

    const categories = ["All", ...allTags];

    const filteredProjects =
        filter === "All"
            ? ProjectData
            : ProjectData.filter((project) => project.category.includes(filter));

    return (
        <section id="gallery" className="p-4">
            <div className="text-center my-6 sm:my-8 md:my-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl">My Projects</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-1.5 text-sm sm:text-base rounded-full font-medium border transition duration-300 ${filter === cat
                                ? "bg-orange-500 text-white"
                                : "bg-white text-orange-500 border-orange-500"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Filtered Projects */}
            <div className="flex flex-wrap justify-center gap-6 px-4">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <div key={project.id}>{project.component}</div>
                    ))
                ) : (
                    <p className="text-gray-600 text-center mt-4">
                        No projects found for <strong>{filter}</strong>.
                    </p>
                )}
            </div>
        </section>
    );
};
