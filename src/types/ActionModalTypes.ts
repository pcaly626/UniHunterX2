import { Enemy, Player } from './EncounterTypes';

export interface ActionModalProps{
    combatant? : Enemy | Player,
    open?: Boolean
    hide: Function
}