import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { SkillPoint } from './skill-point';

export interface SkillTopic {
    title: string;
    icon: IconDefinition;
    skills: Array<SkillPoint>;
}
