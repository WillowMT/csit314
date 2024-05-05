import { getSession } from "../auth";
import { user } from "../entity";
import { revalidatePath } from "next/cache";



class EdiAccountInfoController {

    async saveInfoChange({ email, firstName, lastName, phoneNumber, ceaNumber, agency, license, country }: {
        email: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        country: string;
        ceaNumber: string | "";
        agency: string | "";
        license: string | "";

    }) {
        try {

            const session = await getSession()

            const ussr = await user.setInfo({ email, firstName, lastName, phoneNumber, country, ceaNumber, agency, license })

            session.firstName = firstName
            session.lastName = lastName
            session.phoneNumber = phoneNumber
            session.agency = agency
            session.license = license
            session.ceaNumber = ceaNumber

            session.save()

            revalidatePath('/account/personal')


            return { success: true, message: "User info updated" };

        } catch (e) {
            return { success: false, message: "Error updating user info" };
        }

    }
}

class CreateUserAccController {
    async createUserAccount({ email, passwordHash, firstName, lastName, phoneNumber, country, role }: {
        email: string;
        passwordHash: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        country: string;
        role: string;
    }) {
        try {
            const session = await getSession()
            
            // call to entity
            const usr = await user.createUserAccount({ email, passwordHash, firstName, lastName, phoneNumber, country })

            session.email = email
            session.firstName = firstName
            session.lastName = lastName
            session.phoneNumber = phoneNumber
            session.country = country
            session.role = role

            session.save()

            revalidatePath('/account/personal')

            return { success: true, message: "User created" };

        } catch (e) {
            return { success: false, message: "Error creating user" };
        }
    }
}

class ViewUserAccountController {
    async getUserInfo() {
        return await user.getAllUsers()
    }
}

class UserAcountSearchController {
    async SearchUserAcount(email: string) {
        return await user.getUser({ email })
    }
}

// TODO: Implement login functionality
class LoginAccountController {
    async getUser(email: string, password: string) {
    }
}

class ShortlistController {
    async shortlist(email:string, propertyId:string) {
        return await user.addPropertyToShortList({ email, propertyId })
    }
}

const ediAccountInfoController = new EdiAccountInfoController()
const createUserAccController = new CreateUserAccController()
const viewUserAccountController = new ViewUserAccountController()
const userAcountSearchController = new UserAcountSearchController()
const loginAccountController = new LoginAccountController()
const shortlistController = new ShortlistController()

export {
    ediAccountInfoController,
    createUserAccController,
    viewUserAccountController,
    userAcountSearchController,
    loginAccountController,
    shortlistController
}
