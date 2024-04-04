import { SignInButton, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs';

export function Nav() {

    const { userId } = auth();

    return (
        <div className='flex  justify-between px-10 py-4 border-b'>
            <div className=' grid place-items-center font-bold text-lg'>
                <a href="">
                    Demo
                </a>
            </div>
            <div className=' flex space-x-5'>
                {
                    userId ? <UserButton /> : 
                    <div className='  border px-4 py-2 border-black font-extralight'> 
                        <SignInButton />
                    </div>
                }
            </div>
        </div>
    )
}