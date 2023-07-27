import React from 'react';
import { FaPhone, FaRegEnvelope, FaTelegram, FaGit, FaLinkedinIn } from "react-icons/fa6";

import { ContactsContainer, Title, Item } from './Contacts.styled';

export const Contacts = () => {
    return (
        <ContactsContainer>
            <Title>
                Contacts
            </Title>
            <Item rel='noopener no-referrel nofollow' target='blanck' href="tel:+380992235552">
                <FaPhone /> +38 099 223 5552
            </Item>
            <Item rel='noopener no-referrel nofollow' target='blanck' href='https://t.me/praidid'>
                <FaTelegram /> telegram
            </Item>
            <Item rel='noopener no-referrel nofollow' target='blanck' href='mailto:o.pradidenko@gmail.com'>
                <FaRegEnvelope /> o.pradidenko@gmail.com
            </Item>
            <Item rel='noopener no-referrel nofollow' target='blanck' href='https://github.com/theGreatGrandfather'>
                <FaGit /> GIT
            </Item>
            <Item rel='noopener no-referrel nofollow' target='blanck' href='https://www.linkedin.com/in/oleksandr-pradidenko-b68493266/'>
                <FaLinkedinIn /> LinkedIn
            </Item>
        </ContactsContainer>
    );
};