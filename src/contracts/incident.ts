import { ISODateTimeString } from './common'

export interface Incident {
    /** incident ID */
    id: string

    /** event ID */
    eventId: string

    /** type of the incident */
    type: string

    /** participant Id */
    participantMapping: string

    /** participant role (Home | Away) */
    participantRole: string

    /** in game minute of incident */
    timeInGame: number

    /** DateTime of incident */
    timeInUTC: ISODateTimeString

    /** Game part of incident */
    InGamePart: string
}