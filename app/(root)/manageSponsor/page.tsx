import SponsorForm from '@/components/shared/ManageSponsor'
import React from 'react'

const ManageSponsor = () => {
  return (
    <SponsorForm initialSponsor={{ name: '', email: '' }} onSubmit={() => {}} />
  )
}

export default ManageSponsor;