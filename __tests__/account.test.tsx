import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Page from '../app/page'
import prisma from '@/utils/prisma'

test('create agent', async () => {
    const newUser = await prisma.user.create({
        data: {
            email: 'test12345@gmail.com',
            passwordHash: '',
            firstName: '',
            lastName: '',
            country: '',
            phoneNumber: '',
            agent: {
                create: {
                    license: '123123123',
                    agency: '123123123',
                    jobDesignation: '',
                    ceaNumber: '123123123'

                }

            }
        }
    })

    expect(newUser.email).equal('test12345@gmail.com')
}
)

test('read basic user info', async () => {
    const user = await prisma.user.findUnique({
        where: {
            email: 'agent@gmail.com'
        },
        include: {
            agent: true
        }
    })
    expect(user?.email).equal("agent@gmail.com")
})


test('update user info', async () => {
    const user = await prisma.user.findUnique({
        where: {
            email: 'test12345@gmail.com'
        }
    })

    expect(user?.email).equal('test12345@gmail.com')

    const updatedUser = await prisma.user.update({
        where: {
            email: 'test12345@gmail.com'
        },
        data: {
            firstName: 'fname',
        }
    })

    expect(updatedUser.firstName).equal('fname')

})

test('update agent info', async () => {
    // get user id
    const user = await prisma.user.findUnique({
        where: {
            email: 'test12345@gmail.com'
        }
    })

    // check if user exist
    expect(user?.email).equal('test12345@gmail.com')
    expect(user?.agentId).toBeDefined()

    // update agent
    const updatedAgent = await prisma.agent.update({
        where: {
            id: user?.agentId!
        },
        data: {
            license: '123123123',
        }
    })

    // check if updated
    expect(updatedAgent.license).equal('123123123')

})


test('delete user and agent', async () => {
    // find user
    const user = await prisma.user.findUnique({
        where: {
            email: 'test12345@gmail.com'
        }
    })

    // delete agent
    const deletedAgent = await prisma.agent.delete({
        where: {
            id: user?.agentId!
        }
    })

    // delete user
    const deletedUser = await prisma.user.delete({
        where: {
            email: 'test12345@gmail.com'
        }
    })


})