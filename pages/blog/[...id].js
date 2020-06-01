import Layout from '../../components/Layout'
import {useRouter} from 'next/router'

export default function Blog() {
    const router = useRouter();
    console.log('router.query', router.query)
    const id = router.query.id
    return (
        <Layout>
            <p>Blog id: {id}</p>
            <p>This is the temporary blog page</p>
        </Layout>
    )
}
