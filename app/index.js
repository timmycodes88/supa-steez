import { View, Text, Button } from 'react-native'
import useUser from '../hooks/useUser'
import { useEffect } from 'react'

export default function index() {
  const { user } = useUser()

  useEffect(() => {}, [])

  return (
    <View>
      <Text>index</Text>
    </View>
  )
}
