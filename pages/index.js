import Link from "next/link";
import Image from "next/image";



const Home = ()=> {
  return (
    <>
    <h1>hello world</h1>

    <ul>
      <li>
        <Link href='/users'>
          <a className="styledLink">users</a>
        
        
         </Link>
       </li>
       
       <li>
        <Link href='/wheels/1/red/round'>
          <a className="styledLink">go to wheels</a>
        
        
         </Link>
       </li>
       <li>
        <Link href={{
          pathname: '/wheels/[id]/[color]/[type]',
          query:{
            id:1,
            color: 'red',
            type:'round'

          }
        }}>
          <a className="styledLink">go to wheels obj</a>
        
        
         </Link>
       </li>
    </ul>
    <Image 
      src="/images/image_one.jpg" 
      alt="Picture about a horse"
      layout="responsive"
      width={6016} 
      height={4016} 


      />



    {/*<img src="/images/image_one.jpg" width='800px' />*/}
    
    </>
  )
}

export default Home