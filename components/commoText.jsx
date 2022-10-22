export function Heading({children,style}) {
return(
    <h2 className={`${style} px-5 py-3 md:text-lg text-base text-white font-bold rounded-t-md`}>
        {children}
    </h2>
)
}