interface RedesItemsProps {
    href: string;
    imgSrc: string;
    altText: string;
    label: string;
    className?: string;
}

export function RedesItems({ href, imgSrc, altText, label, className = "" }: RedesItemsProps){
    return(
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
        >
            <img src={imgSrc} alt={altText} className="w-7 h-7"/>
            <h5 className={`font-medium ${className}`}>{label}</h5>
        </a>
    );
}