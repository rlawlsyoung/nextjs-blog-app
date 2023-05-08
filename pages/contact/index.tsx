import Head from "next/head";

import ContactForm from "@/components/contact/contact-form";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="제게 연락하려면 여기를 통해 메세지를 전송해주세요."
        />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
