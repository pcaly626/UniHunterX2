import { Enemy, Player } from './EncounterTypes';
import Queue from '../utilities/queue/Queue';

export interface ActionModalProps {
    combatant? : Enemy | Player,
    combatants : Queue,
    open?: Boolean,
    hide: Function,
    roll: Function
}