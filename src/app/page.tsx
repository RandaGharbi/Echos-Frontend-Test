"use client"
import React, { useEffect, useState } from 'react';
import { fetchNewsletters } from '../utils/fetchNewsletters';
import { USER_WITH_ONE_SUBSCRIPTION } from '../mocks/user';
import Header from '../components/Organisms/Header/Header';
import NewsletterList from '../components/Organisms/NewsletterList/NewsletterList';

const NewsletterPage: React.FC = () => {
  const [newsletters, setNewsletters] = useState(null); // Initialize with null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNewsletters();
        console.log("Fetched Data:", data); // Debugging line
        setNewsletters(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {newsletters ? <NewsletterList newsletters={newsletters} currentUser={USER_WITH_ONE_SUBSCRIPTION} />
 : null}
    </div>
  );
};

export default NewsletterPage;