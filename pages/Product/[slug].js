import {useRouter} from 'next/router'
const slug=()=>{
    const router= useRouter()
    const {slug}=router.query
    return <p>This is slug:{slug}</p>
}
export default slug