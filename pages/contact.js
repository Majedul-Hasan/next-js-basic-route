
import {useRouter} from "next/router";


const ContactPage = () => {

    const router = useRouter()

    const redirectUserToHome = ()=>{
      //router.push('/')
      router.push({
        pathname: '/wheels/[id]/[color]/[type]',
          query:{
            id:1,
            color: 'red',
            type:'round'

          }
      })

    }




  return (
  <>
  <button onClick={redirectUserToHome}>Go back to home </button>
    <h1>Contact</h1>
  </>);
};

export default ContactPage;
