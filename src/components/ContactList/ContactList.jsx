import ContactItem from '../ContactItem';
import style from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ol className={style.orderList}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={style.contactListItem}>
                    <ContactItem
                        name={name}
                        number={number}
                        onDelete={() => onDeleteContact(id)}
                    />
                </li>
            ))}
        </ol>
    );
};

export default ContactList;
