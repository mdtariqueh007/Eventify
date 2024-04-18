import SponsorForm from '@/components/shared/ManageSponsor'
import React from 'react'

const ManageSponsor = () => {
  return (
    <SponsorForm initialSponsor={{ name: '', email: '' }} />
  )
}

export default ManageSponsor;