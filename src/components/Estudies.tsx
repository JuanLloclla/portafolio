import { FaUniversity } from "react-icons/fa";

export function Estudies(){
    return(
        <section id="estudios" className="mb-20">
            <h2
                className="font-kumbh text-2xl font-semibold text-sky-800 mb-6"
            >
                Estudios
            </h2>
            <div className="border border-gray-400 rounded-xl p-6">
                <article className="flex flex-col md:flex-row gap-6">
                    {/* Timeline indicator */}
                    <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2">
                        <div className="w-3 h-3 bg-sky-700 rounded-full flex shrink-0"></div>
                        <div className="hidden md:block w-0.5 h-full bg-gray-300 ml-1"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                            <div>
                                <h3 className="font-semibold text-xl text-gray-900 flex items-center gap-2.5">
                                    Ingeniería de Software
                                    <FaUniversity />
                                </h3>
                                <p className="text-sky-700 font-medium">
                                    Universidad Tecnológica del Perú
                                </p>
                            </div>
                            <div className="bg-emerald-100 text-emerald-700 text-sm font-semibold py-1.5 px-3 rounded-full self-start">
                                En curso
                            </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-3">
                            2021 – Presente
                        </p>
                        
                        <p className="text-gray-700">
                            Formación enfocada en desarrollo de software, análisis de sistemas, bases de datos 
                            y metodologías ágiles. Con énfasis en tecnologías modernas y buenas prácticas de programación.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}