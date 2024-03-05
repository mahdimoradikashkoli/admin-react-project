import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import Textfield from "../../components/Textfield/Textfield";
import { useState } from "react";
import { instance } from "../../App";
import { useNavigate } from "react-router-dom";
const PupularCourse = () => {
  
  const { register, handleSubmit } = useForm();
  const [imageAndLesson, setImageAndLesson] = useState<File[]>([]);

  const handleLessonsOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const myLesson = event.target.files!;
    setImageAndLesson([...imageAndLesson, ...myLesson]);
  };

  const getImageCourse = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imagecourse = event.target.files;
    const filesArray: File[] = Array.from(imagecourse || []);
    setImageAndLesson((prevImageAndLesson) => [...prevImageAndLesson, ...filesArray]);
  };

  const handleMentorImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const mentorImage = event.target.files;
    const filesarray: File[] = Array.from(mentorImage || []);
    setImageAndLesson((prevImageAndLesson) => [...prevImageAndLesson, ...filesarray]);
  };

  const handlePupularCourse = handleSubmit(async (data) => {
    const formData = new FormData();
    setImageAndLesson([]);

    if (imageAndLesson) {
      for (let i = 0; i < imageAndLesson.length; i++) {
        formData.append(`imageandlesson[]`, imageAndLesson[i]);
      }
    }

    
    formData.append("subjectcourse", data.subjectcourse);
    formData.append("mentorname", data.mentorname);
    formData.append("courseprice", data.courseprice);
    formData.append("numberOfLessons", data.numberOfLessons);
    formData.append("aboutCourse", data.aboutCourse);
    formData.append("language", data.language);
    formData.append("numberOfStudent", data.numberOfStudent);
    formData.append("lastUpdate", data.lastUpdate);
    formData.append("subtitle", data.subtitle);
    formData.append("level", data.level);
    formData.append("access", data.access);
    formData.append("subjectOne", data.subjectOne);
    formData.append("subjectTowe", data.subjectTowe);
    formData.append("subjectThree", data.subjectThree);
    formData.append("subjectFor", data.subjectFor);
    formData.append("subjectFive", data.subjectFive);
    formData.append("subjectSix", data.subjectSix);
    formData.append("subjectSeven", data.subjectSeven);
    formData.append("subjectEight", data.subjectEight);
    formData.append("subjectNine", data.subjectNine);

    //  for(const [key,value] of formData.entries()){
    //     console.log(key,value)
    //  }
    try {
      const res = await instance.post("/pupularcourse", formData);
      console.log(res);
    } catch (err) {
      alert("there is a problem")
      console.error("error", err);
    }
  });
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="m-3 p-2 rounded-lg bg-slate-400 text-white"
      >
        Back
      </button>
      <div className=" flex flex-col p-5">
        <div className="z-10 p-3 flex flex-col items-center bg-red-800 w-full  rounded-t-md">
          <h1>Pupular Course</h1>
        </div>
        <form
          // onSubmit={handlePupularCourse}
          className="flex flex-col gap-3 p-3 bg-red-400 w-full overflow-y-auto"
          action=""
          style={{ height: "1000px" }}
        >
          <Textfield
            type="file"
            label="Upload your image "
            accept="image/*"
            onChange={getImageCourse}
          />
          <Textfield
            type="text"
            label="Enter the subject of the course"
            validation={register("subjectcourse")}
          />
          <Textfield
            type="file"
            label="Upload mentor image"
            accept="image/*"
            onChange={handleMentorImage}
          />
          <Textfield
            type="text"
            label="Enter the mentor name"
            validation={register("mentorname")}
          />
          <Textfield
            type="text"
            label="Enter the course price"
            validation={register("courseprice")}
          />
          <Textfield
            type="text"
            label="Enter the Number of lessons"
            validation={register("numberOfLessons")}
          />
          <Textfield
            type="text"
            label="Enter the about course"
            validation={register("aboutCourse")}
          />
          <Textfield
            type="text"
            label="Enter the Language"
            validation={register("language")}
          />
          <Textfield
            type="text"
            label="Enter the Number of students"
            validation={register("numberOfStudent")}
          />
          <Textfield
            type="text"
            label="Enter the last update"
            validation={register("lastUpdate")}
          />
          <Textfield
            type="text"
            label="Enter the subtitle"
            validation={register("subtitle")}
          />
          <Textfield
            type="text"
            label="Enter the level"
            validation={register("level")}
          />
          <Textfield
            type="text"
            label="Enter the Access"
            validation={register("access")}
          />
          <h5>
            ابتدا تمام دروس وعنوان مربوط به آن را وارد کنید سپس اطلاعات را به بک
            اند ارسال کنید
          </h5>
          <Textfield
            validation={register("subjectOne")}
            label="inter your lesson subject-1"
          />
          <Textfield
            name="01"
            type="file"
            accept="audio/*"
            onChange={handleLessonsOnChange}
            label="inter your lesson audio"
          />
          <Textfield
            validation={register("subjectTowe")}
            label="inter your lesson subject-2"
          />
          <Textfield
            name="02"
            type="file"
            accept="audio/*"
            onChange={handleLessonsOnChange}
            label="inter your lesson audio"
          />
          <Textfield
            validation={register("subjectThree")}
            label="inter your lesson subject-3"
          />
          <Textfield
            name="03"
            type="file"
            accept="audio/*"
            onChange={handleLessonsOnChange}
            label="inter your lesson audio"
          />
          <Textfield
            validation={register("subjectFor")}
            label="inter your lesson subject-4"
          />
          <Textfield
            name="04"
            type="file"
            accept="audio/*"
            onChange={handleLessonsOnChange}
            label="inter your lesson audio"
          />
          <Textfield
            validation={register("subjectFive")}
            label="inter your lesson subject-5"
          />
          <Textfield
            name="05"
            type="file"
            accept="audio/*"
            onChange={handleLessonsOnChange}
            label="inter your lesson audio"
          />
          <Textfield
            validation={register("subjectSix")}
            label="inter your lesson subject-6"
          />
          <Textfield
            name="06"
            type="file"
            accept="audio/*"
            onChange={handleLessonsOnChange}
            label="inter your lesson audio"
          />
          <Textfield
            validation={register("subjectSeven")}
            label="inter your lesson subject-7"
          />
          <Textfield
            name="07"
            type="file"
            accept="audio/*"
            onChange={handleLessonsOnChange}
            label="inter your lesson audio"
          />
          <Textfield
            validation={register("subjectEight")}
            label="inter your lesson subject-8"
          />
          <Textfield
            name="08"
            type="file"
            accept="audio/*"
            onChange={handleLessonsOnChange}
            label="inter your lesson audio"
          />
          <Textfield
            validation={register("subjectNine")}
            label="inter your lesson subject-9"
          />
          <Textfield
            name="09"
            type="file"
            accept="audio/*"
            onChange={handleLessonsOnChange}
            label="inter your lesson audio"
          />

          <Button onClick={handlePupularCourse} children="Submit" />
        </form>
      </div>
    </>
  );
};
export default PupularCourse;
