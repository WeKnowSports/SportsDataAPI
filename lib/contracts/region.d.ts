import { EntityType } from './common';
export interface Region {
    /** region ID */
    id: string;
    /** ISO country code or (for regions in country) region code */
    code: string;
    /** translated region name */
    name: string;
    activeSports: string[];
    activeSportsCount: number;
    /** number of live (in-game) active games */
    liveFixturesTotalCount: number;
    /** total number of games, both live and pre-live */
    fixturesTotalCount: number;
    /** number of games, both live and pre-live filtered by time range*/
    fixturesCount: number;
    /** number of active outrights region bound markets */
    outrightsTotalCount: number;
    entityType: EntityType;
    /** number of live active outrights region bound markets */
    liveOutrightsTotalCount: number;
}
export interface RegionChange {
    id: string;
    activeSports: string[];
    activeSportsCount: number;
    liveFixturesTotalCount: number;
    fixturesTotalCount: number;
    fixturesCount: number;
    outrightsTotalCount: number;
    liveOutrightsTotalCount: number;
}
