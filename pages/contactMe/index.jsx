import { contacts } from "../../utility/contactsList";
import Footer from "../../components/statics/Footer";
import LinkButton from "../../components/buttons/LinkButton";

export default function index() {
  return (
    <div className="h-fit bg-[#fffdff] dark:bg-[#0e0e0e] z-20 pb-20 ">
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
            className="mt-5 border border-transparent bg-[#a934dc] rounded-[50px] hover:bg-transparent hover:border-[#a934dc] hover:text-[#a934dc]"
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
