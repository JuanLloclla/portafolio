import { useState } from 'react'

import profileImg from "/Foto.png"
import linkedinIcon from "../assets/icons/linkedin.svg"
import githublightIcon from "../assets/icons/GitHub_light.svg"
import whatsappIcon from "../assets/icons/whatsapp-icon.svg"

import cv from "/CV-Juan-Lloclla-Manuel.pdf"
import { FaFileDownload, FaCheckCircle, FaCopy, FaCheck } from "react-icons/fa";

import { RedesItems } from "./RedesItems"

export function Hero(){
    const [copied, setCopied] = useState(false)
    
    const copyEmail = () => {
        navigator.clipboard.writeText('carlosllocllamanuel@gmail.com')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000) // Vuelve a "Copy" después de 2s
    }
    
    return(
        <section 
            id="sobre-mi"
            className="
                flex items-center gap-6 pt-5 flex-col-reverse
                sm:pt-14 
                md:flex-row md:pt-25
                lg:pt-32
            "
        >
            <div className="md:flex-1">
                <h3 className="font-kumbh font-semibold text-gray-700 text-xl lg:text-2xl">Hello World!👋</h3>
                <h1 className="font-bold text-sky-800 text-2xl py-2 lg:text-3xl">Juan Lloclla Manuel</h1>
                <p className="pb-2">
                    Desarrollador Full Stack enfocado en crear soluciones web modernas y escalables. Con 2 años de experiencia 
                    desarrollando proyectos personales y académicos, me especializo en el stack React, TypeScript, Node.js 
                    y PostgreSQL.
                </p>
                <p className="pb-3 lg:pb-5">
                    Me caracterizo por una rápida curva de aprendizaje y un enfoque en escribir código limpio y mantenible. Busco 
                    integrarme a un equipo de desarrollo donde pueda aportar desde el primer día y seguir creciendo profesionalmente.
                </p>
                <div className="pb-3 sm:text-base flex flex-col items-start justify-center">
                <p className="mb-1">Contáctame:</p>
                <div className="flex items-center gap-2 group relative">
                    <p className='font-medium'>carlosllocllamanuel@gmail.com</p>
                    
                    {/* Botón con tooltip */}
                    <button
                        onClick={copyEmail}
                        className="relative cursor-pointer text-gray-600 hover:text-sky-700 transition-colors"
                        aria-label="Copiar email"
                    >
                        {copied ? (
                            <FaCheck className="text-green-600" />
                        ) : (
                            <FaCopy />
                        )}
                        
                        {/* Tooltip */}
                        <span className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                            px-2 py-1 text-xs text-white bg-gray-900 rounded
                            opacity-0 group-hover:opacity-100 transition-opacity
                            pointer-events-none whitespace-nowrap
                        ">
                            {copied ? '¡Copiado!' : 'Copiar email'}
                        </span>
                    </button>
                </div>
            </div>
                <div className="flex items-center gap-2 pb-3 lg:pb-5">
                    <RedesItems
                        href="https://www.linkedin.com/in/juan-lloclla-manuel-423649295/"
                        imgSrc={linkedinIcon}
                        altText="LinkedIn"
                        label="LinkedIn"
                        className="text-sky-700"
                    />
                    <RedesItems
                        href="https://github.com/JuanLloclla"
                        imgSrc={githublightIcon}
                        altText="GitHub"
                        label="GitHub"
                        
                    />
                    <RedesItems
                        href="https://wa.me/51933274845"
                        imgSrc={whatsappIcon}
                        altText="WhatsApp"
                        label="WhatsApp"
                        className="text-green-400"
                    />
                </div>
                <div className="flex gap-2 justify-center">
                    <a
                        href={cv}
                        download="CV-Juan-Lloclla-Manuel.pdf"
                        className="
                            flex items-center justify-center gap-2 bg-sky-700 shadow-lg shadow-sky-700/50
                            text-white text-sm py-2 px-3 rounded-full cursor-pointer hover:bg-sky-800 transition-colors
                            md:text-base
                        "
                    >
                        <FaFileDownload />
                        Descargar CV
                    </a>
                    <div 
                        className="
                            flex items-center justify-center gap-2 bg-emerald-200 shadow-lg shadow-emerald-200/50 text-sm py-2 px-3 rounded-full
                            md:text-base
                        "
                    >
                        <FaCheckCircle className="text-emerald-800"/>
                        Disponible
                    </div>
                </div>
            </div>
            <div>
                <img 
                    src={profileImg} alt="Juan Lloclla Manuel" 
                    className="
                        rounded-full bg-gray-200 ring-8 ring-gray-50 shadow-2xl object-cover w-40 h-40
                        sm:w-48 sm:h-48
                        md:w-65 md:h-65
                        lg:w-70 lg:h-70
                    "
                />
            </div>
        </section>
        
    );
}