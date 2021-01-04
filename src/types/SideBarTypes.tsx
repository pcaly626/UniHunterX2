import Queue from '../utilities/queue/Queue';
import { Enemy, Player } from './EncounterTypes';

export interface SideBarProps {
    queue  : Queue
    openModal: Function,
    open? : Boolean
}