import { useSelector } from 'react-redux';

const Notification = () => {
    const notifications = useSelector((state) => state.notifications);

    return (
        <div>
            {notifications.map((notification) => (
                <div key={notification.id} className="notification">
                    {notification.message}
                </div>
            ))}
        </div>
    );
};

export default Notification;
