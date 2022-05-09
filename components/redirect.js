import {useRouter} from "next/router";

const Redirect = () => {

    const router = useRouter()

    const redirectUserToHome = ()=>{
      router.push('/')
      /*
      router.push({
        pathname: '/wheels/[id]/[color]/[type]',
          query:{
            id:1,
            color: 'red',
            type:'round'

          }
      })*/

    }

  return (
      <>
          <button onClick={redirectUserToHome}>Go back to home </button>

      
      </>


  )
};

export default Redirect;
