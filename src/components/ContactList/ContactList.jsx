import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
// import { nanoid } from 'nanoid';

export default function ContactList({userContacts, onDelete}) {
    return (
        <ul className={css.list}>
            {userContacts.map((userContact) => (
                <li key={userContact.id} className={css.contactListItem}>
                {/* <li key={nanoid()} className={css.contactListItem}>     */}
                    <Contact data={userContact} onDelete={onDelete}/>
                </li> ))}
        </ul>
    );
}