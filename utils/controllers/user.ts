import { getSession } from "../auth";
import { userEntity } from "../entity";
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

            const usr = await userEntity.setInfo({ email, firstName, lastName, phoneNumber, country, ceaNumber, agency, license })

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
    async createUserAccount({ email, passwordHash, firstName, lastName, phoneNumber, country, license, agency, ceaNumber, role }: {
        email: string;
        passwordHash: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        country: string;
        license: string | undefined;
        agency: string | undefined;
        ceaNumber: string | undefined;
        role: string;
    }) {
        try {
            // call to entity
            const usr = await userEntity.createUserAccount({ email, passwordHash, firstName, lastName, phoneNumber, country, license, agency, ceaNumber, role })

            return { success: true, message: "User created" };

        } catch (e) {
            return { success: false, message: `Error: ${e}` };
        }
    }
}

class ViewUserAccountController {
    async getUserInfo() {
        return await userEntity.getAllUsers()
    }
}

class UserAcountSearchController {
    async SearchUserAcount(email: string) {
        return await userEntity.getUser({ email })
    }
}

// TODO: Implement login functionality
class LoginAccountController {
    async getUser(email: string, password: string) {
    }
}

class ShortlistController {
    async shortlist(email:string, propertyId:string) {
        return await userEntity.addPropertyToShortList({ email, propertyId })
    }
}
//Just write down controllers for the user entity
class UserAccountSearchController{

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
