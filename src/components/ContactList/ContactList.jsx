import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({userContacts}) {
    return (
        <ul className={css.list}>
            {userContacts.map((userContact) => (
                <li key={userContact.id}>
                    <Contact data={userContact} />
                </li> ))}
        </ul>
    );
}