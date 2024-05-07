import { userProfile } from "../entity";

class CreateUserProfileController {
    async recordUserProfile(email: string, role:string) {
        return await userProfile.createUserProfile({ email, role })
    }
}
class ViewUserProfileController {
    async getUserProfile() {
        return await userProfile.getUserProfile()
    }
}

class UpdateUserProfileController {
    async saveRoleName(email:string, role:string) {
        return await userProfile.setRoleName({ email, role})
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
