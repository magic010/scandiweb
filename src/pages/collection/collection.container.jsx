import React from 'react';
import {gql,useQuery} from '@apollo/client'
import CollectionPage from './collection.component';
import Spinner from '../../components/spinner/spinner.component';


const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionPageContainer = ( {match:{params:{collectionId}}} )=> {
  
  const {loading, error, data }= useQuery(GET_COLLECTION_BY_TITLE,{variables:{title:collectionId}});
  

   
   

      if (loading) return <Spinner />;
      if (error) return `Error! ${error}`;

     else return <CollectionPage collection={data.getCollectionsByTitle} />;
    
   

}

export default CollectionPageContainer;
