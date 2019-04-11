import { EntityType, Dictionary, ISODateTimeString } from './common'
import { Selection } from './selection'
/**
     * Market
     */
export interface Market {
    id: string

    name: string

    betslipLine: string

    marketType: MarketType

    sportId: string

    leagueId: string

    startDate: ISODateTimeString

    title: string | null

    participantMapping: string | null

    selections: Selection[]

    eventId: string

    entityType: EntityType

    isLive: boolean

    isSuspended: boolean

    liveData: LiveData | null

    metadata: Dictionary<string>

    tags: string[]

    groups: string[]

    inMarketGroups: Group[]

    castMarkets: string[] | null
}

export interface MarketId {
    id: string,
    eventId: string
}

export interface MarketChange {
    id: string,
    name: string,
    betslipLine: string,
    selections: Selection[],
    eventId: string,
    isSuspended: boolean,
    liveData: LiveData | null,
    metadata: Dictionary<string>,
    marketType: MarketType
}

export interface LiveData {
    scoreHome: string
    scoreAway: string
}

export interface MarketType {
    id: string
    name: string
    isCastMarket: boolean
}

export interface Group {
    id: string
    sortingKey: number
}