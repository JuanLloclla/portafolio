import screenshotSistemaGym from "../assets/screenshot-projects/sistema-gym.png"
import screenshotComunicatec from "../assets/screenshot-projects/comunicatec.png"

import githubDarkIcon from "../assets/icons/GitHub_dark.svg"

import reactLightIcon from "../assets/icons/React_light.svg"
import nodejsIcon from "../assets/icons/nodejs.svg"
import javascriptIcon from "../assets/icons/javascript.svg"
import tailwindIcon from "../assets/icons/tailwindcss.svg"
import postgresqlIcon from "../assets/icons/postgresql.svg"

import htmlIcon from "../assets/icons/html5.svg"
import cssIcon from "../assets/icons/css_old.svg"
import phpLightIcon from "../assets/icons/Php_light.svg"
import mysqlLightIcon from "../assets/icons/MySQL_light.svg"

import { GrDeploy } from "react-icons/gr";

export function Projects(){
    return(
        <section id="proyectos">
            <h2
                className="font-kumbh text-2xl font-semibold text-sky-800 mb-6"
            >
                Proyectos
            </h2>
            <div className="flex flex-col gap-5">
                <article 
                    className="
                        border border-gray-400 rounded-xl p-4
                    "
                >
                    <h4 className="font-semibold text-xl mb-4">AyFitness Gym - Sistema de Control de Membresías</h4>
                    <div 
                        className="
                            flex flex-col gap-3
                            md:flex-row md:justify-center md:items-center
                        "
                    >
                        <div>
                            <img 
                                src={screenshotSistemaGym} alt="Sistema de Control Gym"
                                className="rounded-2xl hover:scale-102 transition-transform md:w-200 md:h-80"    
                            />
                        </div>
                        <div className="flex flex-col gap-2.5 md:max-w-75">
                            <div className="text-gray-700">
                                <p>
                                    Proyecto desarrollado para un gimnasio en funcionamiento. El gimnasio gestionaba 
                                    las membresías manualmente, lo que generaba errores en fechas y control de vencimientos. El sistema 
                                    automatizó este proceso, centralizó la información y se ejecuta localmente (localhost) para reducir 
                                    costos.
                                </p>
                            </div>
                            <div className="bg-gray-400 text-white text-sm flex items-center justify-center py-2 px-2 max-w-28 rounded-2xl">Full Stack</div>
                            <div className="flex gap-2">
                                <img src={reactLightIcon} alt="React" className="w-8 h-8"/>
                                <img src={nodejsIcon} alt="Node.js" className="w-8 h-8"/>
                                <img src={javascriptIcon} alt="JavaScript" className="w-8 h-8"/>
                                <img src={tailwindIcon} alt="Tailwind CSS" className="w-8 h-8"/>
                                <img src={postgresqlIcon} alt="PostgreSQL" className="w-8 h-8"/>
                            </div>
                            <a 
                                href="https://ayfitnessgym-frontend.onrender.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 text-white w-fit py-1 px-4 rounded-lg cursor-pointer hover:bg-gray-600 flex items-center gap-1.5"
                            >
                                <GrDeploy />
                                Demo
                            </a>
                        </div>
                    </div>
                </article>
                <article
                    className="
                        border border-gray-400 rounded-xl p-4
                    "
                >
                    <h4 className="font-semibold text-xl mb-4">Comunicatec - Página Web de Venta de Celulares</h4>
                    <div 
                        className="
                            flex flex-col gap-3
                            md:flex-row md:justify-center md:items-center
                        "
                    >
                        <div>
                            <img 
                                src={screenshotComunicatec} alt="Comunicatec"
                                className="rounded-2xl hover:scale-102 transition-transform md:w-200 md:h-80"    
                            />
                        </div>
                        <div className="flex flex-col gap-2.5 md:max-w-75">
                            <div className="text-gray-700">
                                <p>
                                    Página web de e-commerce para la venta de celulares. Permite explorar productos, gestionar un carrito de compras 
                                    y simular el proceso de compra mediante autenticación de usuarios. Proyecto académico enfocado en aplicar conceptos 
                                    de frontend, backend y autenticación.
                                </p>
                            </div>
                            <div className="bg-gray-400 text-white text-sm flex items-center justify-center py-2 px-2 max-w-28 rounded-2xl">Full Stack</div>
                            <div className="flex gap-2">
                                <img src={htmlIcon} alt="HTML5" className="w-8 h-8"/>
                                <img src={cssIcon} alt="CSS" className="w-8 h-8"/>
                                <img src={javascriptIcon} alt="JavaScript" className="w-8 h-8"/>
                                <img src={phpLightIcon} alt="PHP" className="w-8 h-8"/>
                                <img src={mysqlLightIcon} alt="MySQL" className="w-8 h-8"/>
                            </div>
                            <div className="flex gap-2">
                                <a
                                    href="https://github.com/JuanLloclla/pagina-web-comunicatec"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-800 text-white w-fit py-1 px-3 rounded-lg cursor-pointer hover:bg-gray-600 flex items-center gap-1.5"
                                >
                                    <img src={githubDarkIcon} alt="GitHub" className="w-4 h-4"/>
                                    GitHub
                                </a>
                                <a 
                                    href="http://www.comunicatec.free.nf/index.php"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-800 text-white w-fit py-1 px-4 rounded-lg cursor-pointer hover:bg-gray-600 flex items-center gap-1.5"
                                >
                                    <GrDeploy />
                                    Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}