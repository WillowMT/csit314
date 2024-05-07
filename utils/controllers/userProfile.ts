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


const createUserProfileController = new CreateUserProfileController()
const viewUserProfileController = new ViewUserProfileController()
const updateUserProfileController = new UpdateUserProfileController()

export {
    createUserProfileController,
    viewUserProfileController,
    updateUserProfileController
}
