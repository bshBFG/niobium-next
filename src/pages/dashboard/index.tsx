import { Layout } from '@/modules/dashboard/layouts'
import { NextPage } from 'next'

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <h2>Dashboard</h2>
    </Layout>
  )
}

export default Dashboard

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getSession(context)

//   if (!session) {
//     context.res.setHeader('location', '/')
//     context.res.statusCode = 302
//     context.res.end()
//   }

//   return {
//     props: {
//       session,
//     },
//   }
// }
