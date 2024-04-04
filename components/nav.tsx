import { auth } from '@clerk/nextjs'
import { SignInButton, UserButton } from '@clerk/nextjs';

export default function Nav() {
    const { userId } = auth();

    return (
        <div className='flex  justify-between px-10 py-4 border-b'>
            <div className=' grid place-items-center font-bold text-lg'>
                Demo
            </div>
            <div className=' flex space-x-5'>
                {
                    !userId && <SignInButton />
                }
                {
                    userId && <UserButton />
                }
            </div>
        </div>
    )
}