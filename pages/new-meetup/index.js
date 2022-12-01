import { Fragment } from 'react';
import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  // add meetup handler
  const addMeetupHandler = async (enteredMeetupData) => {
    console.log(enteredMeetupData);

    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application-json',
      },
    });

    console.log(response);
  };

  return (
    <Fragment>
      <Head>
        <title>Add New Meetup</title>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
