import prisma from "@/utils/prisma"
import UserRow from "./form"
import "./admin.css"
import { User } from "@nextui-org/react"
import { viewUserProfile } from "@/utils/controller"
import Navigation from "@/components/nav"

export default async function Page() {
    const users = await viewUserProfile.getUserProfiles()

    if (!users) {
        return;
    }


    return (
        <div className="">
            <Navigation />
            <div className=" bg-slate-700 text-white text-4xl py-4 px-4">Admin Page</div>
            <div className="menu-container left">
                <div className="profile">
                    <img src="https://i.pinimg.com/736x/08/f0/ec/08f0ec9f38f376d384d9ddafd3e574d2.jpg" />
                    <h2>Wei Yu</h2>
                    <h2>weiyu@mail.com</h2>
                </div>

                {/* <ul>
                    <li>
                        Dashboard
                    </li>

                    <li>
                        Manage users
                    </li>
                </ul> */}
                <nav className="navbar-menu">
                    <ul className="navbar-list">
                        {/* gonna iterate stuff for now hardcoded */}
                        <div>
                            {/* insert img src here */}
                            <li>
                                <a href="#">Dashboard</a>
                            </li>
                        </div>

                        <div>
                            <li>
                                <a href="#">Manage users</a>
                            </li>
                        </div>

                        <div>
                            <li>
                                <a href="#">Manage agents</a>
                            </li>
                        </div>

                        <div>
                            <li>
                                <a href="#">Manage properties</a>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
            <div className="p-4 right">
                <h2 className=" text-2xl">Manage Users</h2>
                <div className="button-group">
                    <div className="button-row">
                        <input type="text" className="" placeholder="Search..." />
                    </div>

                    <div className="button-row">
                        <button>Add</button>
                        <button>Select</button>
                    </div>

                </div>


                <table>
                    <tbody>

                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>

                        {users.map((user, i) => (
                            <tr key={i}>
                                <td>
                                    {i+1}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.agency ? "AGENT" : "USER"}
                                </td>

                                <td>
                                    <button>Edit</button>
                                    &nbsp;
                                    <button>Suspend</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export const revalidate = 60