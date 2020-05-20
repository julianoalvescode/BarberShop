import React, { useState, useEffect, useMemo } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import en from 'date-fns/locale/en-US';
import { MdNotifications } from 'react-icons/md';
import { colors } from '~/styles/settings';

import api from '~/services/api';

import {
    Container,
    Badge,
    NotificationList,
    Scroll,
    Notification,
} from './styles';

export default function Notifications() {
    const [visible, setVisible] = useState(false);
    const [notifications, setNotifications] = useState([]);

    const hasUnread = useMemo(
        () =>
            Boolean(
                notifications.find(
                    (notification) => notification.read === false
                )
            ),
        [notifications]
    );

    useEffect(() => {
        async function loadNotifications() {
            const response = await api.get('notifications');
            const data = response.data.map((item) => ({
                ...item,
                timeDistance: formatDistance(
                    parseISO(item.createdAt),
                    new Date(),
                    {
                        locale: en,
                        addSuffix: true,
                    }
                ),
            }));

            setNotifications(data);
        }

        loadNotifications();
    }, []);

    async function handleMarkAsRead(id) {
        await api.put(`notifications/${id}`);
        setNotifications(
            notifications.map((notification) =>
                notification._id === id
                    ? {
                          ...notification,
                          read: true,
                      }
                    : notification
            )
        );
    }

    function handleToggleVisible() {
        setVisible(!visible);
    }

    return (
        <Container>
            <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
                <MdNotifications color={colors.primary} size={20} />
            </Badge>

            <NotificationList visible={visible}>
                <Scroll>
                    {notifications.map((notification) => (
                        <Notification
                            key={notification._id}
                            unread={!notification.read}
                        >
                            <p>{notification.content}</p>
                            <time>{notification.timeDistance}</time>
                            {!notification.read && (
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleMarkAsRead(notification._id)
                                    }
                                >
                                    Marcar como lida
                                </button>
                            )}
                        </Notification>
                    ))}
                </Scroll>
            </NotificationList>
        </Container>
    );
}
