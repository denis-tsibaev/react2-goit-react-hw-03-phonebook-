import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Section from './components/Section';

export default class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    componentDidMount() {
        const contacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(contacts);

        if (parsedContacts) {
            this.setState({ contacts: parsedContacts });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const nextContacts = this.state.contacts;
        const prevContacts = prevState.contacts;

        if (nextContacts !== prevContacts) {
            console.log('updated contacts!');
            localStorage.setItem('contacts', JSON.stringify(nextContacts));
        }
    }

    formSubmitHandler = ({ name, number }) => {
        this.addContact(name, number);
    };

    addContact = (name, number) => {
        const normalizedName = name.toLowerCase();
        const checkForDoubleName = this.state.contacts.find(
            contact => normalizedName === contact.name.toLowerCase(),
        );

        if (checkForDoubleName) {
            // return alert(`${name} is already in contacts!`);
            toast.error(`${name} is already in contacts!`, {
                theme: 'colored',
            });
            return;
        }

        const newContact = {
            id: shortid.generate(),
            name,
            number,
        };

        this.setState(({ contacts }) => ({
            contacts: [newContact, ...contacts],
        }));
    };

    deleteContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(
                contact => contact.id !== contactId,
            ),
        }));
    };

    handleFilterChange = event => {
        this.setState({ filter: event.target.value });
    };

    getVisibleContacts = () => {
        const { contacts, filter } = this.state;
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    render() {
        const { filter } = this.state;
        const visibleContact = this.getVisibleContacts();

        return (
            <div className="appDiv">
                <Section title="Phonebook">
                    <ContactForm onSubmit={this.formSubmitHandler} />
                </Section>
                <Section>
                    <Filter
                        onFilterChange={this.handleFilterChange}
                        value={filter}
                    />
                </Section>
                <Section title="Contacts">
                    <ContactList
                        contacts={visibleContact}
                        onDeleteContact={this.deleteContact}
                    />
                </Section>
                <ToastContainer autoClose={2000} />
            </div>
        );
    }
}
