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

test.only('create property', async () => {
    const property = await prisma.property.create({
        data: {
            name: "test property",
            description: "test description",
            price: 100000,
            address: "test location",
            agentComment: "test agent comment",
            onSale: true,
            views: 0,
            bedroom: 3,
            bathroom: 2,
            propertyType:"HDB",
            leaseYear:2003,
            squareFt:50,
            builtYear:2000,
            imageUrl:"google.com",
            agent:{
                connect:{
                    id:"661f5e4fd49ab4c6d44dd89f"
                }
            }
        }
    })

    expect(property.name).toEqual("test property")
})

// TODO: read property

// TODO: update property

// TODO: delete property


