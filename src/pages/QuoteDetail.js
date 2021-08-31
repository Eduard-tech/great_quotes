import { useParams, Route } from 'react-router-dom';

import Comments from '../components/comments/Comments'

const QuoteDetail = () => {

  const params = useParams();

  return <>
    <h1>Quote {params.quoteId} Detail Page</h1>
    <Route path={`/quotes/${params.quoteId}/comments`}>
      <Comments />
    </Route>
  
  </>
  
};

export default QuoteDetail;