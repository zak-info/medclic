import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ExchangeCom from '@/components/Exchange/ExchangeCom';
import Exchange from '@/models/exchange.model';
import { connect } from '@/models/mongodb';
import { getServerSession } from 'next-auth';
import React from 'react'

const page = async() => {
  const session = await getServerSession(authOptions);
  await connect()
  const exchanges = await Exchange.find({idPharmacy:session?.user?._id}) 
  .populate('idPharmacy') // Populate pharmacy details (only 'name' field)
  .populate('idUser') // Populate user details (only 'username' field)
  .populate('toOffer') // Populate the products in `toOffer`
  .populate('toGet'); // Populate the products in `toGet`

  return (
    <ExchangeCom exchanges={exchanges} />
  )
}

export default page