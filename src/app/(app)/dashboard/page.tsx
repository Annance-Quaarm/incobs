import { createServerSupabaseClient } from '@/boot/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

const Dashboard = async () => {
    // Use the custom Supabase client you created
    const client = createServerSupabaseClient()
    // console.log("🚀 ~ Dashboard ~ client:", client.auth.getUser)

    // const user = (await auth())
    const user = (await currentUser())
    console.dir(user?.emailAddresses[0].emailAddress, { depth: Infinity })

    // Query the 'tasks' table to render the list of tasks
    // const { data, error } = await client.from('tasks').select()
    // if (error) {
    //     throw error
    // }
    // const tasks = data

    // const { data, error } = await client.from('users').insert({
    //     username: user?.username,
    //     first_name: user?.firstName,
    //     last_name: user?.lastName,
    //     email: user?.emailAddresses[0].emailAddress,
    //     profile_image_url: user?.imageUrl
    // })

    // if (error) {
    //     throw error
    // }



    return (
        <div>Dashboard</div>
    )
}

export default Dashboard