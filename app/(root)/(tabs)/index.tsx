import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
      <Text>Home page</Text>
      <Text>Welcome to the Home Page!</Text>

      <View className='flex flex-col gap-8 my-4'>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/sign-up">Sign Up</Link>
        <Link href="/reset-password">Reset Password</Link>
      </View>
    </SafeAreaView>
  )
}

export default Home