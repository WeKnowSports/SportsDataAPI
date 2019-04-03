import { EntityType } from './common';
export interface Sport {
    /** sport ID */
    id: string;
    /** sorting order */
    order: number;
    /** translated sport name */
    name: string;
    /** number of live (in-game) active games */
    liveFixturesTotalCount: number;
    /** total number of games, both live and pre-live */
    fixturesTotalCount: number;
    /** number of games, both live and pre-live filtered by time range */
    fixturesCount: number;
    /** number of active outrights sport bound markets */
    outrightsTotalCount: number;
    entityType: EntityType;
    /** array based on tags of events belonging to sport*/
    tags: string[];
    /** number of live active outrights sport bound markets */
    liveOutrightsTotalCount: number;
}
export interface SportChange {
    id: string;
    liveFixturesTotalCount: number;
    fixturesTotalCount: number;
    fixturesCount: number;
    outrightsTotalCount: number;
    liveOutrightsTotalCount: number;
}
