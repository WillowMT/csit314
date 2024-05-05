import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import prisma from '@/utils/prisma'

const email = "ddddd@gmail.com"

test('create agent', async () => {
    const newUser = await prisma.user.create({
        data: {
            email: email,
            passwordHash: 'aaa',
            firstName: 'aaa',
            lastName: 'aaa',
            country: 'Singapore',
            phoneNumber: 'aaa',
            ceaNumber: '',
            agency: '',
            license: ''
        }
    })

    expect(newUser.email).equal(email)
}
)

test('read basic user info', async () => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    expect(user?.email).equal(email)
})


test('update user info', async () => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    expect(user?.email).equal(email)

    const updatedUser = await prisma.user.update({
        where: {
            email: email
        },
        data: {
            firstName: '321321',
        }
    })

    expect(updatedUser.firstName).equal('321321')

})


test('delete user', async () => {
    // find user
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    // delete user
    const deletedUser = await prisma.user.delete({
        where: {
            id: user?.id
        }
    })

})