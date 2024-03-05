/* eslint-disable @typescript-eslint/no-explicit-any */


type buttonType={
    children:string,
    onClick?:any
}
const Button:React.FC<buttonType>=({children,onClick})=>{
    return (
        <button onClick={onClick} className="w-full py-1 px-5 bg-blue-700">{children}</button>
    )
}
export default Button