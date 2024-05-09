import { getSession } from "../auth";
import { userEntity } from "../entity";
import { revalidatePath } from "next/cache";


//#44, #57, #65 Edit personal account info (you can copy and make one for each role)
class EdiAccountInfoController {
    async saveInfoChange({ email, firstName, lastName, phoneNumber, ceaNumber, agency, license, country }: {
        email: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        country: string;
        ceaNumber?: string | undefined;
        agency?: string | undefined;
        license?: string | undefined;

    }) {
        try {

            const usr = await userEntity.setInfo({ email, firstName, lastName, phoneNumber, country, ceaNumber, agency, license })

            return { success: true, message: "User info updated", user: usr};

        } catch (e) {
            return { success: false, message: "Error updating user info", user: null};
        }

    }
}
//showdis
//#70 
class CreateUserAccController {
    async createUserAccount({ email, passwordHash, firstName, lastName, phoneNumber, country, license, agency, ceaNumber, role }: {
        email: string;
        passwordHash: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        country: string;
        license?: string | undefined;
        agency?: string | undefined;
        ceaNumber?: string | undefined;
        role: string;
    }) {
        try {
            // call to entity
            const usr = await userEntity.createUserAccount({ email, passwordHash, firstName, lastName, phoneNumber, country, license, agency, ceaNumber, role })

            return { success: true, message: "User created", user: usr};

        } catch (e) {
            return { success: false, message: `Error: ${e}`, user:null };
        }
    }
}
//showdis
//#71 view all user accounts
class ViewUserAccountController {
    async getUserInfo() {
        return await userEntity.getAllUsers()
    }
}
// #74 search by first name
class UserAccountSearchController {
    async SearchUserAcount(fname:string) {
        return await userEntity.matchUserAccount({fname})
    }
}

// TODO: Implement login functionality
class LoginAccountController {
    async getUser(email: string, password: string) {

    }
}
//#36
class ShortlistController {
    async shortlist(email:string, propertyId:string) {
        return await userEntity.addPropertyToShortList({ email, propertyId })
    }
}
//#73 
class SuspendUserAccountController{
    async suspendUserAccount(email:string){
        return await userEntity.suspendUserAccount({email})
    }
}
//#72 System admin uses this to edit account information
class UpdateUserAccountController{
    async saveInfoChange({ email, firstName, lastName, phoneNumber, ceaNumber, agency, license, country }: {
        email: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        country: string;
        ceaNumber?: string | undefined;
        agency?: string | undefined;
        license?: string | undefined;

    }) {
        try {

            const usr = await userEntity.setInfo({ email, firstName, lastName, phoneNumber, country, ceaNumber, agency, license })

            return { success: true, message: "User info updated", user: usr};

        } catch (e) {
            return { success: false, message: "Error updating user info", user: null};
        }
    }
}
//#180
class ViewSellerAccountPersonalController{
    async getSellerPersonalAccount({userId}:{userId:string}){
        return await userEntity.getAccountInfo({userId})
    }
}
//#179
class ViewBuyerAccountPersonalController{
    async getBuyerPersonalAccount({userId}:{userId:string}){
        return await userEntity.getAccountInfo({userId})
    }
}
//#182
class ViewAdminAccountPersonalController{
    async getAdminPersonalAccount({userId}:{userId:string}){
        return await userEntity.getAccountInfo({userId})
    }
}
//#50 Seller views REA's sold property listings
class SellerViewREASoldListedPropertyController{
    async getSoldProperty({email}:{email:string}){
        return await userEntity.getAgentSoldProperty({email})
    }
}
//#252 Buyer gets his shortlist for viewing
class BuyerViewShortlistController{
    async getShortlist({userId}:{userId:string}){
        return await userEntity.getShortlist({userId})
    }
}
//#251 Buyer delete one entry in his shortlist
class DeleteShortlistController{
    async deleteShortlist({userId,propertyId}:{userId:string,propertyId:string}){
        return await userEntity.deleteShortlist({userId,propertyId})
    }
}
//showdis
const ediAccountInfoController = new EdiAccountInfoController()
const createUserAccController = new CreateUserAccController()
const viewUserAccountController = new ViewUserAccountController()
const userAccountSearchController = new UserAccountSearchController()
const loginAccountController = new LoginAccountController()
const shortlistController = new ShortlistController()
const suspendUserAccountController=new SuspendUserAccountController()


export {
    ediAccountInfoController,
    createUserAccController,
    viewUserAccountController,
    userAccountSearchController,
    loginAccountController,
    shortlistController,
    suspendUserAccountController,
}
