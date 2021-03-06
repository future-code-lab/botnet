import React from 'react';
import { Notification } from '../Notification';
import { propsFixture } from '../fixture';
import { ErrorNotification } from '../ErrorNotification';
import { SuccessNotification } from '../SuccessNotification';

export default {
  title: 'Notification/Basic',
  component: Notification,
};

export const NotificationStory = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <SuccessNotification {...propsFixture} text="success" />
    <ErrorNotification {...propsFixture} text="error" />
  </div>
);

NotificationStory.story = {
  name: 'Notification Notification',
};
