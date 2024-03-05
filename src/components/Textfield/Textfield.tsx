/* eslint-disable @typescript-eslint/no-explicit-any */
interface textfieldtype extends React.InputHTMLAttributes<HTMLInputElement>{
    label:string,
    validation?:any
}
const Textfield:React.FC<textfieldtype>=({label,validation,...restprops})=>{
    return (
        <div className="flex flex-col">
            <label htmlFor="">{label}</label>
            <input className="w-full p-2 rounded-md" {...restprops} {...validation}/>
          </div>
    )
}
export default Textfield