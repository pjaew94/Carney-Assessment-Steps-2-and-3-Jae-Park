export interface ISubscriptionDetails {
    id: number,
    name: "Gold" | "Silver" | "Platinum"
    price: number,
    created_at: string,
    updated_at: string
}


export interface IMemberWithSubscriptionDetails {
    id: number,
    name: string,
    email: string,
    created_at: string,
    updated_at: string,
    subscription_id: 1 | 2 | 3,
    subscription: ISubscriptionDetails
}