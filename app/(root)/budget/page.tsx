import React, { useState } from 'react'

import { SearchParamProps } from '@/types'
import { auth } from '@clerk/nextjs'
import { getEventsByUser } from '@/lib/actions/event.actions';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Collection from '@/components/shared/Collection';
import { eventFormSchema } from '@/lib/validator';
import { IEvent } from '@/lib/database/models/event.model';
import BudgetPage from '@/components/shared/Budget';

const Budget = async ({searchParams}:SearchParamProps) => {
    const {sessionClaims} = auth();
    const userId = sessionClaims?.userId as string;

    const eventsPage = Number(searchParams?.eventsPage) || 1;

    const organizedEvents = await getEventsByUser({userId, page:eventsPage})

    const data = organizedEvents?.data;

    
    let x = 1;
    const mini = 10000;
    const maxi = 1000000;
    const events = data.map((event: IEvent) => {
        return {...event, budget: Number(Math.floor(Math.random() * ((maxi-mini+1)+mini)) + 1), id:x++}
    })

    

    // console.log(events);
  return (
    <>
        <BudgetPage event={events} />
    </>
  )
}

export default Budget;