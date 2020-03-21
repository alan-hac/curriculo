import { XpRegistry } from './xp-registry';

export interface XpTopic {
    title: string;
    icon: string;
    registries: Array<XpRegistry>;
}