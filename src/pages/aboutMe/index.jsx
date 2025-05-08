export default function AboutMePage() {
  return (
    <div className="w-full py-5 lg:py-20">
      <div className="flex justify-center">
        <h1 className="mt-10 text-[40px] font-semibold">About Me</h1>
      </div>
      <div className="flex flex-1 flex-col justify-center text-center lg:text-justify pb-20 px-[20%]">
        <h3 className="text-[20px] py-3">Hello, I am Hana Widyatari 👋</h3>
        <hr className="dark:border-gray-50 border-gray-900" />

        <p className="mt-2 lg:px-5  text-justify">
          a Frontend Developer with 2 years of experience building web and mobile apps. I Started my journey through a coding bootcamp and have worked on both team and solo projects. Proficient in React, Vue, and React Native to create
          user-friendly and functional applications. I’m always excited to learn more and take on new challenges.
        </p>

        <div className="mt-6">
          <h3 className="mb-6 text-lg font-bold">Kindly check my resume for more details</h3>
          <a
            href={"assets/documents/HanaWidyatari-resume.pdf"}
            target="_blank"
            className="w-full border rounded-[50px]  px-10 py-3 font-semibold border-[#a934dc] text-[#a934dc] hover:bg-[#a934dc] hover:text-white dark:text-white dark:hover:bg-transparent dark:hover:border-[#a934dc] dark:hover:text-[#a934dc] dark:bg-[#a934dc]"
          >
            Click Me
          </a>
        </div>
      </div>
    </div>
  );
}
