import { comparePassword, encryptPassword } from "@/utils/hash";
import { getSession } from "./auth";
import { revalidatePath } from "next/cache";
import { user, userProfile, property } from "./entity";


export class EdiAccountInfoController {

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

export class ViewUserProfileController {
    async getUserProfiles() {
        return await user.getAllUsers()
    }
}

export class ViewSellerProperty {
    async getCreatedProperty(): Promise<any[]> {
        return await property.getCreatedProperty()
    }
}

export class ViewRealEstateAgentRatingsAndReviews {
    async getRatingsAndReviews() {
    }
}

export class ViewAgentAccountController {
    async getAgentDetails() { }
}


export class UserAcountSearchController {
    async SearchUserAcount(email: string) {

    }
}

export class SearchAgentController {
    async getUser(email: string) {
        // const user = await User.matchUserAccount(email)

        // return user
    }
}

export class LoginAccountController {
    async getUser(email: string, password: string) {
    }
}


export class ReviewAgentController {
    async writeReview(review: string) {
    }
}

export class CreateUserAccController {
    async recordUserAccountDetails(email: string, password: string) {
    }
}


export class RateAgentController {
    async rating(rate: number) {
    }
}


export const editAccountInfo = new EdiAccountInfoController()
export const viewRealEstateAgentRatingsAndReviews = new ViewRealEstateAgentRatingsAndReviews()
export const viewAgentAccount = new ViewAgentAccountController()
export const userAcountSearch = new UserAcountSearchController()
export const searchAgent = new SearchAgentController()
export const loginAccount = new LoginAccountController()
export const reviewAgent = new ReviewAgentController()
export const createUserAcc = new CreateUserAccController()
export const rateAgent = new RateAgentController()
export const viewUserProfile = new ViewUserProfileController()
export const viewSellerProperty = new ViewSellerProperty()