import { userProfileEntity } from "../entity";

export class CreateUserProfileController {
    async recordUserProfile(role:string) {
        return await userProfileEntity.createUserProfile({role})
    }
}
export class ViewUserProfileController {
    async getUserProfile() {
        return await userProfileEntity.getUserProfile()
    }
}

export class UpdateUserProfileController {
    async saveRoleName(role:string, newrole:string, activated:boolean) {
        return await userProfileEntity.setRoleName({role, newrole, activated})
    }
}

export class UserProfileSearchController {
    async SearchUserProfile(role:string){
        return await userProfileEntity.matchUserProfile({role})
    }
}
export class SuspendProfileController{
    async SuspendProfile(role:string){
        return await userProfileEntity.suspendProfile({role})
    }
}
