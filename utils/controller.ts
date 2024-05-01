import { comparePassword, encryptPassword } from "@/utils/hash";
import { getSession } from "./auth";
import { revalidatePath } from "next/cache";
import { User } from "./entity";


export class EdiAccountInfoController {

    static async SaveInfoChange({ email, firstName, lastName, phoneNumber, ceaNumber, agency, license, jobDesignation }: {
        email: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        ceaNumber: string | null;
        agency: string | null;
        license: string | null;
        jobDesignation: string | null;

    }) {
        // update user info in db
        try {

            const session = await getSession()


            const user = await User.setInfo({ email, firstName, lastName, phoneNumber })

            // update details for agent

            // if (user.agentId && agency && license && jobDesignation && ceaNumber) {

            //     const agent = await Agent.SetInfo({ agentId: user.agentId, agency, license, jobDesignation, ceaNumber })

            //     session.agency = agency
            //     session.license = license
            //     session.jobDesignation = jobDesignation
            //     session.ceaNumber = ceaNumber
            // }

            session.firstName = firstName
            session.lastName = lastName
            session.phoneNumber = phoneNumber

            // update session for agent


            session.save()

            revalidatePath('/account/personal')


            return { success: true, message: "User info updated" };

        } catch (e) {
            return { success: false, message: "Error updating user info" };
        }

    }
}


export class ViewRealEstateAgentRatingsAndReviews {
    static async getRatingsAndReviews() {

    }
}

export class ViewAgentAccountController {
    static async getAgentDetails() {}
}

export class UserAcountSearchController {
    static async SearchUserAcount( email:string) {

    }
}

export class SearchAgentController {
    static async getUser(email:string) {
        const user = await User.matchUserAccount(email)

        return user
    }
}

export class LoginAccountController {
    static async getUser(email:string, password:string) {
    }
}


export class ReviewAgentController {
    static async writeReview( review:string) {
    }
}

export class CreateUserAccController {
    static async recordUserAccountDetails( email:string, password:string) {
    }
}


export class RateAgentController {
    static async rating( rate:number) {
    }
}