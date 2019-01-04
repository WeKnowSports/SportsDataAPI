import { EntityType, Dictionary, ISODateTimeString } from './common'

export type EventType = "Fixture" | "Outright"

/**
    * Queryable entity
    */
export interface SportEvent {
    id: string
    /** Type of SportEvent. */
    type: EventType
    /** Sport ID. */
    sportId: string
    /** Sport name (translated). */
    sportName: string
    /** Sorting order of Sport. */
    sportOrder: number
    /** Region ID. */
    regionId: string
    /** ISO country code or (for regions in country) region code. */
    regionCode: string
    /** Region name (translated). */
    regionName: string
    /** League ID. */
    leagueId: string
    /** League name (translated). */
    leagueName: string
    /** Sorting order of League. */
    leagueOrder: number
    /** Is league marked with top flag. */
    isTopLeague: boolean
    /** participants in the event. */
    participants: Participant[]
    /** Name of event, for league events */
    eventName: string
    // betslipLine
    betslipLine: string
    // not queriable
    totalMarketsCount: number

    marketLinesCount: number
    // not queriable
    marketGroups: MarketGroup[]
    /** date/time of game start */
    startEventDate: ISODateTimeString
    /**  Status of game serving*/
    status: GameStatus
    /**  Score in game*/
    score: GameScore | null
    /** is it live game */
    isLive: boolean
    /** will this game go live when started, for pre-live only and eventType = Game */
    isGoingLive: boolean

    liveGameState: LiveGameState | null

    /** Is event suspended for some reason */
    isSuspended: boolean

    isTeamSwap: boolean

    tags: string[]

    entityType: EntityType

    metadata: Dictionary<any>

    media: MediaProvider[]
}

export interface SportEventCompact {
    id: string
    type: EventType
    sportId: string
    sportName: string
    sportOrder: number
    regionId: string
    regionCode: string
    regionName: string
    leagueId: string
    leagueName: string
    leagueOrder: number
    isTopLeague: boolean
    eventName: string
    betslipLine: string
    totalMarketsCount: number
    marketLinesCount: number
    startEventDate: ISODateTimeString
    status: GameStatus
    score: GameScore | null
    isLive: boolean
    isGoingLive: boolean
    liveGameState: LiveGameState | null
    isSuspended: boolean
    isTeamSwap: boolean
    tags: string[]
    entityType: EntityType
}

export interface SportEventChange {
    id: string,
    participants: Participant[],
    totalMarketsCount: number,
    marketLinesCount: number,
    status: GameStatus,
    score: GameScore | null,
    isLive: boolean,
    liveGameState: LiveGameState | null,
    isSuspended: boolean,
    metadata: Dictionary<any>
}

export interface MediaProvider {
    providerName: string
    providerEventId: string
    mediaType: string
}

export interface MarketGroup {
    id: string
    name: string
    order: number
}

export type VenueRole = "Home" | "Away"

export interface Participant {
    id: string
    name: string
    /** Home | Away */
    venueRole: VenueRole | null
    /** ISO code */
    country: string | null
    /** runnerNumber: number, imageUrl: string, weight: string, age: number, form: string */
    metadata: Dictionary<any>
}

export interface ParticipantChange {
    metadata: Dictionary<any>
}

export enum GameStatus {
    NotStarted = "NotStarted",
    InProgress = "InProgress"
}

export enum ClockDirection {
    Stopwatch = "Stopwatch",
    Timer = "Timer"
}

export interface GameScore {
    /** Home team/player top level score */
    homeScore: string

    /** Away team/player top level score */
    awayScore: string

    additionalScores: Dictionary<string>

    combinedSecondTierScores: string[]
}

export interface LiveGameState {
    clockRunning: boolean
    clockDirection: ClockDirection
    gameTime: number | null
    gamePart: GamePart | null
}

export enum GamePart {
    FirstOvertime = "FirstOvertime",
    BreakAfterFirstOvertime = "BreakAfterFirstOvertime",
    SecondOvertime = "SecondOvertime",
    FirstSet = "FirstSet",
    SecondSet = "SecondSet",
    ThirdSet = "ThirdSet",
    FourthSet = "FourthSet",
    FifthSet = "FifthSet",
    FirstPeriod = "FirstPeriod",
    BreakAfterFirstPeriod = "BreakAfterFirstPeriod",
    SecondPeriod = "SecondPeriod",
    BreakAfterSecondPeriod = "BreakAfterSecondPeriod",
    ThirdPeriod = "ThirdPeriod",
    BreakAfterThirdPeriod = "BreakAfterThirdPeriod",
    FirstQuarter = "FirstQuarter",
    BreakAfterFirstQuarter = "BreakAfterFirstQuarter",
    SecondQuarter = "SecondQuarter",
    BreakAfterSecondQuarter = "BreakAfterSecondQuarter",
    ThirdQuarter = "ThirdQuarter",
    BreakAfterThirdQuarter = "BreakAfterThirdQuarter",
    FourthQuarter = "FourthQuarter",
    BreakAfterFourthQuarter = "BreakAfterFourthQuarter",
    Overtime = "Overtime",
    FirstHalf = "FirstHalf",
    SecondHalf = "SecondHalf",
    BreakAfterFirstHalf = "BreakAfterFirstHalf",
    FirstInning = "FirstInning",
    SecondInning = "SecondInning",
    ThirdInning = "ThirdInning",
    FourthInning = "FourthInning",
    FifthInning = "FifthInning",
    SixthInning = "SixthInning",
    SeventhInning = "SeventhInning",
    EighthInning = "EighthInning",
    NinthInning = "NinthInning",
    BreakAfterFirstInning = "BreakAfterFirstInning",
    BreakAfterSecondInning = "BreakAfterSecondInning",
    BreakAfterThirdInning = "BreakAfterThirdInning",
    BreakAfterFourthInning = "BreakAfterFourthInning",
    BreakAfterFifthInning = "BreakAfterFifthInning",
    BreakAfterSixthInning = "BreakAfterSixthInning",
    BreakAfterSeventhInning = "BreakAfterSeventhInning",
    BreakAfterEighthInning = "BreakAfterEighthInning",
    BreakAfterNinthInning = "BreakAfterNinthInning"
}