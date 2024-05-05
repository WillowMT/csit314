import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Page from '../app/page'
import prisma from '@/utils/prisma'

// hello world
test("hello world", () => {
    expect("hello world").toEqual("hello world")
})

// TODO: create property

test('create property', async () => {
    const property = await prisma.property.create({
        data: {
            name: "test property",
            description: "test description",
            price: 100000,
            address: "test location",
            onSale: true,
            views: 0,
            bedroom: 3,
            bathroom: 2,
            leaseYear:2003,
            squareFt:50,
            builtYear:2000,
            imageUrl:"google.com",
        }
    })

    expect(property.name).toEqual("test property")
})

// TODO: read property

// TODO: update property

// TODO: delete property

test('delete property', async () => {
    const property = await prisma.property.deleteMany({
        where: {
            name: "test property"
        }
    })

    expect(property).toBeDefined()
})


