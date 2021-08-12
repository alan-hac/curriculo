import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { XpRegistry } from './xp-registry';

export interface XpTopic {
    title: string;
    icon: IconDefinition;
    registries: Array<XpRegistry>;
}
