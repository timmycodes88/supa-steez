import useUserStore from '@hooks/useUserStore'
import Feed from '@features/home/Feed'

export default function Home() {
  const { loading, account } = useUserStore()

  if (loading || !account) return null
  return <Feed />
}
