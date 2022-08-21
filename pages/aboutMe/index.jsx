import LinkButton from "../../components/buttons/LinkButton";

export default function AboutMe() {
  return (
    <div className="h-screen ">
      <div className="flex justify-center">
        <h1 className="mt-10 text-[40px] font-semibold">About Me</h1>
      </div>
      <div className="w-[550px] mt-20 text-justify mx-auto">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur animi dicta doloremque aut officia minus beatae, quas fuga hic similique perferendis incidunt veniam sint ab iusto, fugit, repudiandae explicabo et! Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Assumenda excepturi error harum vel porro minus doloribus ipsa ut voluptatum cumque tempora, aspernatur aliquid eius quod earum asperiores? Dolorum, rerum necessitatibus!{" "}
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minus pariatur aspernatur sunt in ullam impedit similique, facere nesciunt a, tempore odit aliquam vero exercitationem nam tempora saepe nihil id!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minus pariatur aspernatur sunt in ullam impedit similique, facere nesciunt a, tempore odit aliquam vero exercitationem nam tempora saepe nihil id!</p>
      </div>

      <div className="ml-[480px] mt-20">
        <LinkButton children={false} text="CV & Portfolio" className="border border-transparent rounded-[20px] bg-gray-50 text-gray-900 px-3 py-1" onClick={() => (location.href = "assets/documents/HanaWidyatari_Web-Dev.pdf")} />
      </div>
    </div>
  );
}
