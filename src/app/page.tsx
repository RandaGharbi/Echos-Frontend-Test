'use client'
import React, { useEffect, useState } from 'react'
import { fetchNewsletters } from '../utils/fetchNewsletters'
import { USER_WITH_ONE_SUBSCRIPTION } from '../mocks/user'
import Header from '../components/Organisms/Header/Header'
import NewsletterList from '../components/Organisms/NewsletterList/NewsletterList'

type Newsletter = {
  id: string
  image: string
  description: string
  title: string
  site: string
  subscriptions: string[]
}

const NewsletterPage = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Newsletter[] = await fetchNewsletters()
        setNewsletters(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Header />
      {newsletters ? (
        <NewsletterList
          newsletters={newsletters}
          currentUser={USER_WITH_ONE_SUBSCRIPTION}
        />
      ) : null}
    </>
  )
}

export default NewsletterPage
