import { contacts } from "@hanawidyatari/utils/contactsList";
import Footer from "@hanawidyatari/components/statics/Footer";
import LinkButton from "@hanawidyatari/components/buttons/LinkButton";

export default function contactMe() {
  return (
    <div className="h-fit bg-[#ddd1e3] dark:bg-[#0e0e0e] z-20 pb-20 ">
      <div className="py-5">
        <h1 className="mt-8 text-[45px] font-semibold mx-[315px]">Get In Touch With Me</h1>
      </div>

      <div className="flex gap-20 mt-10 justify-center">
        <div>
          <h3 className=" font-semibold text-[30px] w-[400px]">I am looking forward to start projects with you</h3>
          <p className="mt-8 w-[380px]">Email me if you interested to hire me on your project. I would be happy to join with your team.</p>
          <LinkButton
            children={
              <a href="mailto:hanawidyatari@gmail.com" target="_blank">
                <p className="px-10 py-3 font-semibold">EMAIL ME</p>
              </a>
            }
            className="mt-5 border border-[#a934dc] text-[#a934dc] hover:bg-[#a934dc] hover:text-white rounded-[50px] dark:text-white dark:hover:bg-transparent dark:hover:border-[#a934dc] dark:hover:text-[#a934dc] dark:bg-[#a934dc]"
          />
        </div>

        <div className="mb-5">
          <div className=" -mt-12 ml-[150px]">
            <h4 className="text-[20px]">PHONE CALL</h4>
            <ul className="mt-3">
              {contacts.map((contact, i) => {
                return (
                  <div key={i}>
                    {contact.calls.map((call, i) => {
                      return (
                        <li key={i} className="mb-2">
                          <p className="text-sm">{call.phones}</p>
                        </li>
                      );
                    })}
                    <div className="mt-6 w-[250px]">
                      <h4 className="text-[20px]">LOCATION</h4>
                      <p className="text-sm mt-3 ">{contact.location}</p>
                    </div>

                    <div className="mt-6 flex gap-3">
                      {contact.socials.map((social, i) => {
                        return (
                          <div key={i}>
                            <a href={social.url} target="_blank">
                              {social.icon}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
