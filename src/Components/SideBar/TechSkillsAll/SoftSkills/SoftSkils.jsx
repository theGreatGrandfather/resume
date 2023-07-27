import { TechSkillsContainer, Title, SkillsList } from '../TechSkillsAll.styled';
import {SkillsText} from './SoftSkils.styled'
import { TechSkillsItems } from '../TechSkillsItem/TechSkilsItem'

export const SoftSkils = ({ skills }) => {
    return (
        <>
            <TechSkillsContainer>
                <Title>
                    Soft Skills
                </Title>
                <SkillsList>
                {skills.map(({ id, lable }) => {
                    return (
                        <TechSkillsItems
                            key={id}
                            lable={lable}
                        />
                    );
                })}
            </SkillsList>    
            </TechSkillsContainer>
            <TechSkillsContainer>
                <Title>
                    Languages
                </Title>
                <SkillsText>
                    Ukrainian - native
                </SkillsText>
                <SkillsText>
                    English - intermediate
                </SkillsText>
            </TechSkillsContainer>
        </>
    );
}

  
