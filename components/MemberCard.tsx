import { useState } from "react";
import { IMemberWithSubscriptionDetails } from "../types";

const MemberCard = ({ info }: { info: IMemberWithSubscriptionDetails }) => {
  const {
    id,
    created_at,
    subscription_id,
    updated_at,
    email,
    name,
    subscription,
  } = info;

  const [expandSubscriptionInfo, setExpandSubscriptionInfo] = useState(false);

  const subscriptionIcon = () => {
    switch (subscription_id) {
      case 1:
        return <div className="w-5 h-5 bg-[#C0C0C0] rotate-45 shadow-md" />;
      case 2:
        return <div className="w-5 h-5 bg-[#FFD700] rotate-45 shadow-md" />;
      case 3:
        return <div className="w-5 h-5 bg-[#81d9dd] rotate-45 shadow-md" />;
    }
  };

  return (
    <div className="bg-white shadow-md w-full py-10 px-5 rounded-md flex  flex-col h-fit 2xl:text-base">
      <div className='flex pb-5'>
      <div className="mr-5">{subscriptionIcon()}</div>
      <div className="flex flex-col text-sm 2xl:text-base">
        <p>ID: {id}</p>
        <p >Name: {name}</p>
        <p>Email: {email}</p>
        <p>Created At: {created_at}</p>
        <p>Updated At: {updated_at}</p>
        <p>Subscription Plan: {subscription.name}</p>
      </div>
      </div>
      {expandSubscriptionInfo && <div className='flex flex-col text-sm border-t border-gray-200 py-5 2xl:text-base'>
        <h4 className='font-bold'>Subscription Details</h4>
      <p>ID: {subscription.id}</p>
        <p>Name: {subscription.name}</p>
        <p>Price: {"$" + subscription.price.toFixed(2)}</p>
        <p>Created At: {subscription.created_at}</p>
        <p>Updated At: {subscription.updated_at}</p>
        </div>}
      <button className=' rounded-md text-sm text-white font-bold px-3 py-3 bg-gradient-to-r from-primary to-secondary' onClick={() => setExpandSubscriptionInfo(!expandSubscriptionInfo)}>{expandSubscriptionInfo ? "Hide Details" : "See Subscription Details"}</button>
    </div>
  );
};

export default MemberCard;
