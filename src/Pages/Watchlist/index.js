import React, { useCallback, useRef, useState } from 'react';
import StoryCard from '../../Components/StoryCard';
import WatchlistHeader from '../../Components/WatchlistHeader';
import useStory from '../../hooks/useStory';
import './watchlist.scss';

const supportedLanguage = [
  { key: 'en', val: 'English', isChecked: false },
  { key: 'fr', val: 'French', isChecked: false },
  { key: 'zh', val: 'Chinese', isChecked: false },
  { key: 'pt', val: 'Portuguese', isChecked: false },
  { key: 'de', val: 'German', isChecked: false },
];

const supportedOrder = [
  { key: 'top', val: 'Top' },
  { key: 'latest', val: 'Latest' },
  { key: 'retweeted', val: 'Retweeted' },
  { key: 'read', val: 'Read' },
];
const Watchlist = () => {
  const [count, setCount] = useState(0);

  const [languages, setLanguages] = useState(supportedLanguage);

  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const { stories, loading, error } = useStory(
    count,
    selectedLanguages,
    selectedOrder
  );

  const observer = useRef();

  const lastStoryCard = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setCount((prevCount) => prevCount + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  const order = supportedOrder;

  return (
    <>
      <div className='watchlist_body'>
        <div className='watchlist_stories'>
          <WatchlistHeader
            languages={languages}
            setLanguages={setLanguages}
            order={order}
            selectedLanguages={selectedLanguages}
            setSelectedLanguages={setSelectedLanguages}
            setSelectedOrder={setSelectedOrder}
          />
          <div className='watchlist_stories_body'>
            <div className='watchlist_stories_body_content'>
              {stories
                ? stories.map((story, index) => {
                    if (stories.length === index + 1) {
                      return (
                        <StoryCard
                          lastStoryCard={lastStoryCard}
                          story={story}
                          key={index}
                        />
                      );
                    } else {
                      return <StoryCard story={story} key={story.id} />;
                    }
                  })
                : null}
            </div>
          </div>
        </div>
        <div className='watchlist_right_column'></div>
      </div>
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error...'}</div>
    </>
  );
};

export default Watchlist;
