import React from 'react';
import {
  gql,
  graphql,
} from 'react-apollo';

import Transaction from './transaction';

const TransactionList = ({account}) => {
    console.log(account);
    return (
            <div>
            <table>
            <tbody>
            <tr><th>Amount</th><th>Created At</th></tr>
            {account.transactions.map(txn => (
                    <tr key={txn.id}>
                    <td>${txn.amount}</td>
                    <td>{new Date(Date.parse(txn.created_at)).toString()}</td>
                    </tr>
            ))}
        </tbody>
        </table>
        </div>
    );
};

const Account = ({ data: {loading, error, account }}) => {
//  console.log(account);
  if (loading) {
    return (<p>Loading ...</p>);
  }
  if (error) {
    return (<p>{error.message}</p>);
  }
  return (
      <div key={account.id} >
          <h2>{account.name} : {account.id}</h2>
          <TransactionList account={account} />
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
               pollInterval: 60000
             }),
})(Account);

export default AccountWithData;
