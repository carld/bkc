import React from 'react';
import {
  gql,
  graphql,
} from 'react-apollo';


const Account = ({ data: {loading, error, account }}) => {
  console.log(arguments);
  if (loading) {
    return (<p>Loading ...</p>);
  }
  if (error) {
    return (<p>{error.message}</p>);
  }
  return (
      <div key={account.id} >
        <h2>{account.name}</h2>
      </div>
  );
};

export const accountQuery = gql`
  query ($id: Int!) {
    account(id: $id) {
      id
      name
      transactions {
        id
        amount
        created_at
      }
    }
  }
`;

const AccountWithData = graphql(accountQuery, {
  options: ({ id }) => (
             { variables: { id },
               pollInterval: 5000
             }),
})(Account);

export default AccountWithData;
