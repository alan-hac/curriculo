import { SkillPoint } from './skill-point';

export interface SkillTopic {
    title: string; 
    icon: string;
    skills: Array<SkillPoint>;
}    