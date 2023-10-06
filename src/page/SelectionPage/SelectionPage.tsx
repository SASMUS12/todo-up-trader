import React, {useState} from "react";
import styles from "../SelectionPage/SelectionPage.module.scss";
import { v4 as uuidv4 } from 'uuid';
import { Project } from "../Project";


const SelectionPage = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [newProject, setNewProject] = useState<string>('');

    const addProject = () => {
        if (newProject.trim() === '') {
            return
        }

        const project: Project = {
            name: newProject,
            id: uuidv4(),
        };

        setProjects([...projects, newProject]);
        setNewProject('');
    }

    const deleteProject = (projectId: string) => {
        const updatedProjects = projects.filter((project) => project.id !== projectId);
        setProjects(updatedProjects);
    };

    return (
        <div>
            <h1>Выбор проекта</h1>
            <input
                type="text"
                placeholder="Введите название проекта"
                value={newProject}
                onChange={(e) => setNewProject(e.target.value)}
            />
            <button onClick={addProject}>Добавить проект</button>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                            {project.name} <button onClick={() => deleteProject(project.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SelectionPage;