
import Head from "next/head";
import Redirect from "../components/redirect";
//import Redirect from "./Redirect";



const ContactPage = () => {

   const title = 'Contact us';




  return (
  <>
    <Head>
      {/*<title>contect page</title>*/}
      <title>{title}</title>
      <meta name="description" content="Contact us, we will not reply"/>
      <meta property="og:title" content="My page title" key="title"/>
    
    </Head>
    <h1>Contact</h1>

    <Redirect />




  </>);
};

export default ContactPage;
