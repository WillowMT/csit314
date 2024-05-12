'use server'

import { RateAgentController, ReviewAgentController } from "@/utils/controllers/agent"

export async function rateAgent(email: string, rating: number) {
    const rateAgentController = new RateAgentController()
    return await rateAgentController.rate(email, rating, "")
}

export async function reviewAgent(email: string, review: string) {
    const reviewAgentController = new ReviewAgentController()
    return await reviewAgentController.writeReview(email, 0, review)
}