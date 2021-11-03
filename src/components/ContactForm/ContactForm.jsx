import React, { Component } from 'react';
import style from './ContactForm.module.css';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.formReset();
    };

    formReset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        const { name, number } = this.state;
        const inputChange = this.handleChange;

        return (
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <div>
                    <label>
                        Name
                        <input
                            className={style.inputName}
                            onChange={inputChange}
                            type="text"
                            name="name"
                            value={name}
                            placeholder="text here"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Number
                        <input
                            className={style.inputNumber}
                            onChange={inputChange}
                            type="tel"
                            name="number"
                            value={number}
                            placeholder="text here"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                        />
                    </label>
                </div>
                <button type="submit" className={style.formButton}>
                    Add contact
                </button>
            </form>
        );
    }
}
