
import { gql } from '@apollo/client';

export const login = gql`
 mutation signIn($login: String!, $password: String!) {
  signIn(login: $login, password: $password) {
   token
  }
}
`;
export const Signup = gql`
 mutation signUp($name: String!, $email: String!, $password: String!,$phone: String!) {
  signUp(name: $name, email: $email, password: $password, phone: $phone) {
   token
  }
}
`;

export const userDetail = gql`
query{
  user{
    id
    username
    name
    email
    role
    messages{
      id
      text
    }
  }
}
`;
export const NOTIFICATIONS = gql`
query{
  notifications{
    edges{
      id
    title
    message
    status
    createdAt
    }
  }
}
`;
export const REFRESH = gql`
query{
  refresh_token{
    minutes
  }
}
`;
export const LOGOUT = gql`
mutation{
  signOut
}
`;
export const RESET_PASSWORD = gql`
mutation reset_user_password($password: String!, $token: String!,$email: Srting!) {
  reset_password(object: {
      email:$email
      password: $password,
      token: $token
  })
}`
export const MESSAGES = gql`
query {
  messages {
    edges {
      id
      text
      sender
      reciever
      schedule
      createdAt
    }
    pageInfo {
      endCursor
    }
  }
}
`
export const PAYMENTS = gql`
query{
  payments{
   edges{
     id
    paymentid
    channel
    amount
    naration
    createdAt
    status
  }
    pageInfo{
      hasNextPage
      endCursor
    }
  }
}
`

export const SEND_MESSAGE = gql`
mutation sendMessage($sender: String!, $reciever: String!, $text: String!, $schedule: String!) {
  sendMessage(sender: $sender, reciever: $reciever, text: $text, schedule: $schedule){
    sender
    reciever
    text
    schedule
    createdAt
  }
}`
export const SAVE_PAYMENT = gql`
mutation createPayment($paymentid: String!, $channel: String!, $name: String!, $email: String!, $amount: String!, $naration: String!, $status: String!) {
  createPayment(paymentid: $paymentid, channel: $channel, name: $name, email: $email, amount: $amount, naration: $naration, status: $status){
    id
    paymentid
    channel
    name
    email
    naration
    amount
    status
  }
}`