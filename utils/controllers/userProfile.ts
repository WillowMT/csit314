import { userProfile } from "../entity";

class CreateUserProfileController {
    async recordUserProfile(role:string) {
        return await userProfile.createUserProfile({role})
    }
}
class ViewUserProfileController {
    async getUserProfile() {
        return await userProfile.getUserProfile()
    }
}

class UpdateUserProfileController {
    async saveRoleName(role:string, newrole:string) {
        return await userProfile.setRoleName({role, newrole})
    }
}

class UserProfileSearchController {
    async SearchUserProfile(role:string){
        return await userProfile.matchUserProfile({role})
    }
}
class SuspendProfileController{
    async SuspendProfile(role:string){
        return await userProfile.suspendProfile({role})
    }
}

const createUserProfileController = new CreateUserProfileController()
const viewUserProfileController = new ViewUserProfileController()
const updateUserProfileController = new UpdateUserProfileController()
const userProfileSearchController= new UserProfileSearchController()
const suspendProfileController= new SuspendProfileController()

export {
    createUserProfileController,
    viewUserProfileController,
    updateUserProfileController,
    userProfileSearchController,
    suspendProfileController
}
