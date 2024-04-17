import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Page from '../app/page'
import prisma from '@/utils/prisma'

test('hello test', async () => {
    expect(1).toBeDefined()
})


test('get basic user info', async () => {
    const user = await prisma.user.findUnique({
        where: {
            email: 'agent@gmail.com'
        },
        include: {
            agent:true
        }
    })
    expect(user?.email).equal("agent@gmail.com")
})


test('update user and agent ', async () => {
    const user = await prisma.user.update({
        where:{
            email:'agent@gmail.com'
        },
        data: {
            firstName:"agg"
        }
    })

    const agent = await prisma.agent.update({
        where:{
            id:'661bcc050be48e8e43e9435e'
        },
        data:{
            agency:"random"
        }
    })

    expect(user.firstName).equals('agg')
    expect(agent.agency).equals('random')
    const user2 = await prisma.user.update({
        where:{
            email:'agent@gmail.com'
        },
        data: {
            firstName:"test2"
        }
    })

    const agent2 = await prisma.agent.update({
        where:{
            id:'661bcc050be48e8e43e9435e'
        },
        data:{
            agency:"random2"
        }
    })

    expect(user2.firstName).equals('test2')
    expect(agent2.agency).equals('random2')
})