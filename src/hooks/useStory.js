import axios from 'axios';
import { useEffect, useState } from 'react';

const useStory = (count, selectedLanguages, selectedOrder) => {
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const [stories, setStories] = useState([]);

  const [nextToken, setNextToken] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let next_page_token = '';

    let urlEndpoint =
      'http://cfswapi-1377212035.eu-north-1.elb.amazonaws.com/webapi/v1/stories';

    let languageFilter =
      selectedLanguages.length !== 0
        ? 'languages='.concat(selectedLanguages.toString())
        : '';

    let orderFilter = selectedOrder ? 'order='.concat(selectedOrder) : '';

    next_page_token = nextToken ? 'page_token='.concat(nextToken) : '';

    let url = urlEndpoint;

    if (languageFilter) {
      url = url.includes('order=')
        ? url.concat('&'.concat(languageFilter))
        : url.concat('?'.concat(languageFilter));
      next_page_token = '';
    }
    if (orderFilter) {
      url = url.includes('languages=')
        ? url.concat('&'.concat(orderFilter))
        : url.concat('?'.concat(orderFilter));
      next_page_token = '';
    }

    if (next_page_token && next_page_token !== 'EOD' && count) {
      if (url.includes('languages=') || url.includes('order=')) {
        url = url.concat('&'.concat(next_page_token));
      } else {
        url = url.concat('?'.concat(next_page_token));
      }
    }

    if (next_page_token !== 'EOD') {
      setLoading(false);

      if (url.includes('page_token')) {
        axios
          .get(url)
          .then((res) => {
            setStories((prevStories) => {
              return [...prevStories, ...res.data.stories];
            });
            setNextToken(res.data.next_page_token);
            setLoading(false);
            console.log(res.data.stories);
          })
          .catch((err) => {
            setError(true);
            console.log(err);
          });
      } else {
        axios
          .get(url)
          .then((res) => {
            setStories(res.data.stories);
            setNextToken(res.data.next_page_token);
            setLoading(false);
            console.log(res.data.stories);
          })
          .catch((err) => {
            setError(true);
            console.log(err);
          });
      }
    }
  }, [count, selectedLanguages, selectedOrder]);
  return { loading, error, stories };
};

export default useStory;
