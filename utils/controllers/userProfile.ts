import { userProfileEntity } from "../entity";

class CreateUserProfileController {
    async recordUserProfile(role:string) {
        return await userProfileEntity.createUserProfile({role})
    }
}
class ViewUserProfileController {
    async getUserProfile() {
        return await userProfileEntity.getUserProfile()
    }
}

class UpdateUserProfileController {
    async saveRoleName(role:string, newrole:string) {
        return await userProfileEntity.setRoleName({role, newrole})
    }
}

class UserProfileSearchController {
    async SearchUserProfile(role:string){
        return await userProfileEntity.matchUserProfile({role})
    }
}
class SuspendProfileController{
    async SuspendProfile(role:string){
        return await userProfileEntity.suspendProfile({role})
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
