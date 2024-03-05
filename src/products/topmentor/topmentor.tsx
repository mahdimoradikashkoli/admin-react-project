import { useState } from "react";
import Button from "../../components/Button/Button";
import Textfield from "../../components/Textfield/Textfield";
import { useForm } from "react-hook-form";
import { instance } from "../../App";
import { useNavigate } from "react-router-dom";

const TopMentor=()=>{
const [mentorImg,setMentorImg]=useState<File | null >()
    const getMentorImage=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const mentorImage=event.target.files && event.target.files["0"]
        setMentorImg(mentorImage)

    }
  const { register, handleSubmit } = useForm();

  const handleTopMentorForm=handleSubmit(async(Data)=>{
    const formData=new FormData()
    if(mentorImg){
        formData.append("mentorimg",mentorImg)
    }
    formData.append("mentorname",Data.mentorname)
    for(const [key,value] of formData.entries()){
        console.log(key,value)
    }
    try{
        const res =await instance.post("/topmentor",formData)
        console.log(res)
    }catch(err){
        console.error(err)
    }
  })
  const navigate=useNavigate()
    return (
        <>
        <button onClick={()=>{
      navigate("/")
    }} className="m-3 p-2 rounded-lg bg-slate-400 text-white">Back</button>
          <div className=" flex flex-col p-5 ">
            <div className="z-10 p-3 flex flex-col items-center bg-red-400 w-full  rounded-t-md">
              <h1>Top Mentor</h1>
            </div>
            <form
              onSubmit={handleTopMentorForm}
              className="flex flex-col gap-3 p-3 bg-red-400 w-full"
              action=""
            >
              <Textfield
                type="file"
                label="Upload your mentor image "
                accept="image/*"
                onChange={getMentorImage}
              />
              <Textfield
                type="text"
                label="Enter the mentor name"
                validation={register("mentorname")}
              />
             
              <Button children="Create" />
            </form>
          </div>
        </>
      );

}
export default TopMentor