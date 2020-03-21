import { Info } from './info';
import { SkillTopic } from './skill-topic';
import { XpTopic } from './xp-topic';

export interface CurriculumData {
    name: string;
    objective: string;
    sub: string;
    infos: Array<Info>;
    skills: Array<SkillTopic>
    xps: Array<XpTopic>
}