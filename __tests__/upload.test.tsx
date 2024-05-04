import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Page from '../app/page'
import prisma from '@/utils/prisma'
import { uploadImage } from '@/app/property/create/action'
import fs from 'fs'

// hello world
test("hello world", () => {
    expect("hello world").toEqual("hello world")
    // const img = fs.readFileSync('__test__/waiyan.png')
})

// TODO: delete user

// TODO: update role 

