import { comparePassword, encryptPassword } from "@/utils/hash";
import prisma from "@/utils/prisma";
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


            const user = await User.SetInfo({ email, firstName, lastName, phoneNumber })

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