import LinkButton from "../../components/buttons/LinkButton";

export default function AboutMe() {
  return (
    <div className="h-fit mb-40 mt-20">
      <div className="flex justify-center">
        <h1 className="mt-10 text-[40px] font-semibold">About Me</h1>
      </div>
      <div className="w-[550px] mt-10 text-justify mx-auto">
        <h3 className="text-[20px]">A Web Developer who loves to code and design web</h3>
        <hr />

        <p className="mt-2 px-5">
          I'm learning web development from a Full Stack Website Developer bootcamp academy. Want to learn in a practical way to increase my skills that I have learned from bootcamp and personal project with a new and challenging projects.{" "}
        </p>
      </div>

      <div className="ml-[480px] mt-10">
        <p className="mb-4">Kindly check my CV</p>
        <LinkButton
          children="CLICK ME"
          className="border border-transparent bg-[#a934dc] rounded-[50px] hover:bg-transparent hover:border-[#a934dc] hover:text-[#a934dc] px-10 py-3 font-semibold"
          onClick={() => (location.href = "assets/documents/HanaWidyatari_Web-Dev.pdf")}
        />
      </div>
    </div>
  );
}
