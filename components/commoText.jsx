export function Heading({children}) {
return(
    <h2 style={{backgroundImage:'linear-gradient(335deg, #fa4244 0%, #faa386 100%)',color:'#fff'}} className={`px-5 py-3 md:text-lg text-base font-bold rounded-t-md`}>
        {children}
    </h2>
)
}