import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import CardFooter from '../CardFooter';
import './storyCard.scss';

const StoryCard = (props) => {
  const { story, lastStoryCard } = props;

  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    console.log('Inside StoryCard.js!');
  }, []);

  function msToTime(ms) {
    let seconds = (ms / 1000).toFixed(0);
    let minutes = (ms / (1000 * 60)).toFixed(0);
    let hours = (ms / (1000 * 60 * 60)).toFixed(0);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(0);
    if (seconds < 60) return seconds + ' sec ago';
    else if (minutes < 60) return minutes + ' mins ago';
    else if (hours < 24) return hours + ' hrs ago';
    else if (days === 1) return days + ' day ago';
    else return days + ' days';
  }

  const displayTimeDiff = (date) => {
    let dateTime = new Date().getTime();
    let postDate = new Date(date);
    let timeDiff = dateTime - postDate;
    return msToTime(timeDiff);
  };

  const onExpandBtnClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div ref={lastStoryCard} className='story_list'>
      <div className='stories_container'>
        <div>
          <div className='card'>
            <div className='card_content'>
              <div className='card_content-img'>
                <div className='img-container'>
                  {story.imageUrls ? (
                    <img src={story.imageUrls[0]} alt='img1' />
                  ) : null}
                </div>
              </div>
              <div className='card_content-details'>
                <div className='card_content_info'>
                  <span className='card_content-header'>
                    <a
                      href={story.url}
                      target='_blank'
                      rel='noreferrer noopener'
                      className='header-title'
                    >
                      {story.title}
                    </a>
                    <div>
                      <div
                        className={`detail-description ${
                          showDescription ? 'show' : ''
                        }`}
                      >
                        {story.description}
                      </div>
                    </div>
                    <span className='detail-about'>
                      <img
                        src={story.domain_cached_logo_url}
                        className='sources_img'
                        alt='src_img'
                      />
                      <span>{story.domain_name}</span>
                      <span>{displayTimeDiff(story.publishTime)}</span>
                    </span>
                  </span>
                  <span className='card_content-score'>
                    <span className='percentage green-score'>
                      <span className='score-value'>{story.score}%</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className='card_content-expand'>
                <i className='expand_btn' onClick={onExpandBtnClick}>
                  {showDescription ? (
                    <FontAwesomeIcon icon={faAngleUp} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleDown} />
                  )}
                </i>
              </div>
            </div>
            {showDescription ? <CardFooter /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
