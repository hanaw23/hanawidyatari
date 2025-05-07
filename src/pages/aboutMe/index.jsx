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
          a Frontend Developer with 2 years of experience building web and mobile apps. I started my journey through a coding bootcamp and have worked on both team and solo projects. I use React, Vue, and React Native to create
          user-friendly, functional applications. I’m always excited to learn more and take on new challenges
        </p>
      </div>

      <div className="ml-[480px] mt-10">
        <p className="mb-6">Kindly check my resume for more details</p>
        <a
          href={"assets/documents/HanaWidyatari-resume.pdf"}
          target="_blank"
          className="w-full border rounded-[50px]  px-10 py-3 font-semibold border-[#a934dc] text-[#a934dc] hover:bg-[#a934dc] hover:text-white dark:text-white dark:hover:bg-transparent dark:hover:border-[#a934dc] dark:hover:text-[#a934dc] dark:bg-[#a934dc]"
        >
          Click Me
        </a>
      </div>
    </div>
  );
}
