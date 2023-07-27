import React from 'react';
import { Container, Photo } from './SideBar.slyled';
import { Contacts } from './Contacts/Contacts';
import { TechSkillsAll } from './TechSkillsAll/TechSkillsAll';
import{ SoftSkils } from '../SideBar/TechSkillsAll/SoftSkills/SoftSkils'
import skills from '../../Assets/skills.json';
import softSkills from '../../Assets/softSkils.json';
// import skills from '../../logo.svg';

const logo = require('../../photo.jpg')

const SideBar = () => {
    return (
        <Container>
            <Photo src={logo} alt="my photo" width="570"/>
            <Contacts />
            <TechSkillsAll skills={skills} />
            <SoftSkils skills={softSkills}/>
        </Container>);
}

export default SideBar;