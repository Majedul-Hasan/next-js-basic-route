
import { useRouter } from "next/router";





const MiscPage = ()=>{

    const route = useRouter()
    
    



    return(
        <>
            <h2>the user id is: {route.query.id}</h2>
        
        </>
    )
}

export default MiscPage