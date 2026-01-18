import reactLightIcon from "../assets/icons/React_light.svg"
import javascriptIcon from "../assets/icons/javascript.svg"
import typescriptIcon from "../assets/icons/typescript.svg"
import htmlIcon from "../assets/icons/html5.svg"
import cssIcon from "../assets/icons/css_old.svg"
import tailwindIcon from "../assets/icons/tailwindcss.svg"

import nodejsIcon from "../assets/icons/nodejs.svg"
import expressLightIcon from "../assets/icons/Express.js_light.svg"

import postgresqlIcon from "../assets/icons/postgresql.svg"
import mysqlLightIcon from "../assets/icons/MySQL_light.svg"
import supabaseIcon from "../assets/icons/supabase.svg"

import gitIcon from "../assets/icons/git.svg"
import githublightIcon from "../assets/icons/GitHub_light.svg"

import phpLightIcon from "../assets/icons/Php_light.svg"
import javaIcon from "../assets/icons/java.svg"
import pythonIcon from "../assets/icons/python.svg"

export function Skills(){
    return(
        <section id="tecnologias">
            <h2
                className="font-kumbh text-2xl font-semibold text-sky-800 mb-6"
            >
                Tecnologías
            </h2>
            <div className="grid gap-4">
                <div>
                    <h3 className="font-semibold text-gray-700 mb-2 text-lg">Frontend</h3>
                    <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {SkillsItem(reactLightIcon, "React", "React")}
                        {SkillsItem(javascriptIcon, "JavaScript", "JavaScript")}
                        {SkillsItem(typescriptIcon, "TypeScript", "TypeScript")}
                        {SkillsItem(htmlIcon, "HTML", "HTML")}
                        {SkillsItem(cssIcon, "CSS", "CSS")}
                        {SkillsItem(tailwindIcon, "Tailwind CSS", "Tailwind CSS")}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700 mb-2 text-lg">Backend</h3>
                    <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {SkillsItem(nodejsIcon, "Node.js", "Node.js")}
                        {SkillsItem(expressLightIcon, "Express.js", "Express.js")}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700 mb-2 text-lg">Base de Datos</h3>
                    <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {SkillsItem(postgresqlIcon, "PostgreSQL", "PostgreSQL")}
                        {SkillsItem(mysqlLightIcon, "MySQL", "MySQL")}
                        {SkillsItem(supabaseIcon, "Supabase", "Supabase")}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700 mb-2 text-lg">Herramientas</h3>
                    <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {SkillsItem(gitIcon, "Git", "Git")}
                        {SkillsItem(githublightIcon, "GitHub", "GitHub")}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700 mb-2 text-lg">Otros Lenguajes</h3>
                    <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {SkillsItem(phpLightIcon, "PHP", "PHP")}
                        {SkillsItem(javaIcon, "Java", "Java")}
                        {SkillsItem(pythonIcon, "Python", "Python")}
                    </div>
                </div>
            </div>
        </section>
    );
}

export function SkillsItem(imgSrc: string, altText: string, label: string){
    return(
        <article className="flex flex-col items-center gap-1 justify-center border border-gray-400 rounded-xl p-4 bg-white hover:scale-105 sm:hover:scale-110 transition-transform">
            <img src={imgSrc} alt={altText} className="w-12 h-12"/>
            <span>{label}</span>
        </article>
    );
}