"use client"
import React from "react";
import NewsletterItem from "../NewsletterItem/NewsletterItem";
import { Site, ListContainer, Section } from "./NewsletterListWrapper";
import { USER_WITHOUT_SUBSCRIPTION, USER_WITH_MULTIPLE_SUBSCRIPTION, USER_WITH_ONE_SUBSCRIPTION } from "../../../mocks/user";

// Define the shape of a Newsletter
interface Newsletter {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
  subscriptions: string[];
}

// Define the props for the NewsletterList component
interface NewsletterListProps {
  newsletters: Newsletter[];
  currentUser: typeof USER_WITH_ONE_SUBSCRIPTION | typeof USER_WITHOUT_SUBSCRIPTION | typeof USER_WITH_MULTIPLE_SUBSCRIPTION;
}

const NewsletterList: React.FC<NewsletterListProps> = ({ newsletters, currentUser }) => {
  // Group newsletters by site
  const groupedNewsletters = newsletters.reduce<{ [key: string]: Newsletter[] }>(
    (acc, { site, ...rest }) => ({ ...acc, [site]: [...(acc[site] || []), { site, ...rest }] }),
    {}
  );

  const isUserSubscribed = (subs: string[]): boolean => 
    currentUser.subscriptions.some(sub => subs.includes(sub));

  const getButtonText = (subs: string[]): string => 
    isUserSubscribed(subs) ? "S'inscrire" : "S'abonner";

  const getButtonType = (subs: string[]): "register" | "subscribe" => 
    isUserSubscribed(subs) ? "register" : "subscribe";
  
  return (
    <>
      {/* Map through the grouped newsletters to display them */}
      {Object.entries(groupedNewsletters).map(([site, siteNewsletters]) => (
        <Section key={site}>
          <Site>{site}</Site>
          <ListContainer>
            {/* Map through the newsletters for each site to display them */}
            {siteNewsletters.map((newsletter) => (
              <NewsletterItem
                key={newsletter.id}
                image={newsletter.image}
                title={newsletter.title}
                description={newsletter.description}
                buttonText={getButtonText(newsletter.subscriptions)}
                buttonType={getButtonType(newsletter.subscriptions)}
                onClick={() => console.log("Button Clicked")}
              />
            ))}
          </ListContainer>
        </Section>
      ))}
    </>
  );
};

export default NewsletterList;