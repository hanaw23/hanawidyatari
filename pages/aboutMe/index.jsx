import LinkButton from "../../components/buttons/LinkButton";

export default function AboutMe() {
  return (
    <div className="h-fit mb-28 mt-10">
      <div className="flex justify-center">
        <h1 className="mt-10 text-[40px] font-semibold">About Me</h1>
      </div>
      <div className="w-[550px] mt-10 text-justify mx-auto">
        <h3 className="text-[20px] py-3">Hello, I am Hana Widyatari 👋</h3>
        <hr />

        <p className="mt-2 px-5">
          A Frontend Web Developer who loves to learn everything especially web and mobile development. Learning to code as a bootcamper in academy with 1 year experience as Frontend Developer, have been built commercial project web
          applications with team and personal projects with Vue (Nuxt 3) and React (Next Js) as ultimate tools. Always feels exciting to explore more journey with a new and challenging projects.
        </p>
      </div>

      <div className="ml-[480px] mt-10">
        <p className="mb-4">Kindly check my resume for more details</p>
        <LinkButton
          children="CLICK ME"
          className="border rounded-[50px]  px-10 py-3 font-semibold border-[#a934dc] text-[#a934dc] hover:bg-[#a934dc] hover:text-white dark:text-white dark:hover:bg-transparent dark:hover:border-[#a934dc] dark:hover:text-[#a934dc] dark:bg-[#a934dc]"
          onClick={() => (location.href = "assets/documents/HanaWidyatari-resume.pdf")}
        />
      </div>
    </div>
  );
}
