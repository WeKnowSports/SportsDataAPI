import { EntityType } from './common';
export interface League {
    /** league ID */
    id: string;
    /** translated league name */
    name: string;
    /** link to sport */
    sportId: string;
    /** sport name */
    sportName: string;
    /** link to region */
    regionId: string;
    /** ISO country code or (for regions in country) region code */
    regionCode: string;
    /** Sorting order */
    defaultOrder: number;
    /** is league marked with hot flag */
    isTopLeague: boolean;
    /** number of live (in-game) active games */
    liveFixturesTotalCount: number;
    /** total number of games, both live and pre-live */
    fixturesTotalCount: number;
    /** number of games, both live and pre-live filtered by time range*/
    fixturesCount: number;
    /** number of active outrights league bound markets */
    outrightsTotalCount: number;
    entityType: EntityType;
    /** array based on tags of events belonging to league*/
    tags: string[];
    masterLeagueId: string;
    /** number of live active outrights league bound markets */
    liveOutrightsTotalCount: number;
}
export interface LeagueChange {
    id: string;
    liveFixturesTotalCount: number;
    fixturesTotalCount: number;
    fixturesCount: number;
    outrightsTotalCount: number;
    liveOutrightsTotalCount: number;
}
