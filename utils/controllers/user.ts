import { userEntity } from "../entity";
import { UserInterface } from "../demo";


//#44, #57, #65 Edit personal account info (you can copy and make one for each role)
export class EditAccountInfoController {
    async saveInfoChange(user: UserInterface) {
        return await userEntity.setInfo(user)

    }
}
//showdis
//#70 
export class CreateUserAccController {
    async createUserAccount(user: UserInterface) {
        return await userEntity.createUserAccount(user)

    }
}
//showdis
//#71 view all user accounts
export class ViewUserAccountController {
    async getUserInfo() {
        return await userEntity.getAllUsers()
    }
}
// #74 search by first name
export class UserAccountSearchController {
    async SearchUserAcount(fname: string) {
        return await userEntity.matchUserAccount({ fname })
    }
}

// TODO: Implement login functionality
export class LoginAccountController {
    async getUser(email: string, password: string) {
        return await userEntity.login({ email, password })
    }
}
//#36
export class ShortlistController {
    async shortlist(email: string, propertyId: string) {
        return await userEntity.addPropertyToShortList({ email, propertyId })
    }
}
//#73 
export class SuspendUserAccountController {
    async suspendUserAccount(email: string) {
        return await userEntity.suspendUserAccount({ email })
    }
}
//#72 System admin uses this to edit account information
export class UpdateUserAccountController {
    async saveInfoChange(user: UserInterface) {
        return await userEntity.setInfo(user)
    }
}
//#180
export class ViewSellerAccountPersonalController {
    async getSellerPersonalAccount({ userId }: { userId: string }) {
        return await userEntity.getAccountInfo({ userId })
    }
}
//#179
export class ViewBuyerAccountPersonalController {
    async getBuyerPersonalAccount({ userId }: { userId: string }) {
        return await userEntity.getAccountInfo({ userId })
    }
}
//#182
export class ViewAdminAccountPersonalController {
    async getAdminPersonalAccount({ userId }: { userId: string }) {
        return await userEntity.getAccountInfo({ userId })
    }
}
//#50 Seller views REA's sold property listings
export class SellerViewREASoldListedPropertyController {
    async getSoldProperty({ email }: { email: string }) {
        return await userEntity.getAgentSoldProperty({ email })
    }
}
//#252 Buyer gets his shortlist for viewing
export class BuyerViewShortlistController {
    async getShortlist({ userId }: { userId: string }) {
        return await userEntity.getShortlist({ userId })
    }
}
//#251 Buyer delete one entry in his shortlist
export class DeleteShortlistController {
    async deleteShortlist({ email, propertyId }: { email: string, propertyId: string }) {
        return await userEntity.deleteShortlist({ email, propertyId })
    }
}
