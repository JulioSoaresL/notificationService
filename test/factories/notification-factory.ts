import { Notification, NotificationProps } from '@application/entities/notification';
import { Content } from '@application/entities/content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}): Notification {
  return new Notification({
    content: new Content('this is a notification'),
    category: 'social',
    recipientId: 'example-recipient-id',
    ...override,
  });
}
