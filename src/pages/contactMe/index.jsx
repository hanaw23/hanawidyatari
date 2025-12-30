import { contacts } from "@hanawidyatari/utils/contactsList";
import Footer from "@hanawidyatari/components/statics/Footer";
import CustomButton from "@hanawidyatari/components/buttons/CustomButton";

export default function ContactMePage() {
  return (
    <div className="z-20 py-5 lg:py-20 px-4">
      <h1 className="mt-8 text-[32px] md:text-[45px] lg:text-[55px] font-semibold text-center">Get In Touch With Me</h1>
      <div className="flex text-center justify-center mt-8 gap-10 mx-20">
        <div className="lg:w-1/2">
          <h3 className="font-semibold text-[24px] md:text-[30px] text-center">I am looking forward to start projects with you</h3>
          <p className="mt-6 text-center max-w-md mx-auto">Email me if you’re interested in hiring me for your project. I would be happy to join your team.</p>
          <div className="flex justify-center">
            <CustomButton
              children={
                <a href="mailto:hanawidyatari@gmail.com" target="_blank" rel="noopener noreferrer">
                  <p className="px-10 py-3 font-semibold">EMAIL ME</p>
                </a>
              }
              className="mt-5 border border-[#a934dc] text-[#a934dc] hover:bg-[#a934dc] hover:text-white rounded-[50px] dark:text-white dark:hover:bg-transparent dark:hover:border-[#a934dc] dark:hover:text-[#a934dc] dark:bg-[#a934dc]"
            />
          </div>
          <ul className="mt-3 ">
            {contacts.map((contact, i) => (
              <div key={i}>
                <div className="mt-6 flex justify-center gap-3">
                  {contact.socials.map((social, k) => (
                    <a key={k} href={social.url} target="_blank" rel="noopener noreferrer">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
