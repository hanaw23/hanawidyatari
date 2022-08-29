import LinkButton from "../../components/buttons/LinkButton";

export default function AboutMe() {
  return (
    <div className="h-fit mb-40 mt-20">
      <div className="flex justify-center">
        <h1 className="mt-10 text-[40px] font-semibold">About Me</h1>
      </div>
      <div className="w-[550px] mt-10 text-justify mx-auto">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur animi dicta doloremque aut officia minus beatae, quas fuga hic similique perferendis incidunt veniam sint ab iusto, fugit, repudiandae explicabo et! Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Assumenda excepturi error harum vel porro minus doloribus ipsa ut voluptatum cumque tempora, aspernatur aliquid eius quod earum asperiores? Dolorum, rerum necessitatibus!{" "}
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minus pariatur aspernatur sunt in ullam impedit similique, facere nesciunt a, tempore odit aliquam vero exercitationem nam tempora saepe nihil id!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minus pariatur aspernatur sunt in ullam impedit similique, facere nesciunt a, tempore odit aliquam vero exercitationem nam tempora saepe nihil id!</p>
      </div>

      <div className="ml-[480px] mt-10">
        <p className="mb-4">Kindly see my CV and portfolio</p>
        <LinkButton
          children="CLICK ME"
          className="border border-transparent bg-[#a934dc] rounded-[50px] hover:bg-transparent hover:border-[#a934dc] hover:text-[#a934dc] px-10 py-3 font-semibold"
          onClick={() => (location.href = "assets/documents/HanaWidyatari_Web-Dev.pdf")}
        />
      </div>
    </div>
  );
}
