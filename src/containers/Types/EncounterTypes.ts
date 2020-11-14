import React, {ChangeEvent} from 'react';

export interface Encounter {
    player: Array < {
        value: string
    } >,
    enemy: string,
    name: string,
    terrain: string
}

export interface Weapon {
    name: string,
    dice: {
        type: number,
        amount: number,
        modifier: number
    },
    type: string,
    hand: number
}

export interface Spell {
    level: number,
    slots: number
}

export interface Player {
    modifiers: {
        strength: number,
        dexterity: number,
        constitution: number,
        intelligence: number,
        wisdom: number,
        charisma: number,
        proficiency: number
    },
    health: number,
    level: number,
    armorClass: number,
    playerClass: string,
    playerRace: string,
    attacks: Array < {
        weapons: Array < Weapon >,
        spells: Array < Spell >
    } >,
    deathSaves: {
        success: number,
        failure: number
    }

}


export interface CreateEncounterState {
    createEncounterForm: {
        name: {
            label: string,
            placeHolder: string,
            value: string,
            css: string,
            type: string,
            change: (event : ChangeEvent) => void,
            options: Array < {
                value: string
            } >;
        },
        player: {
            label: string,
            placeHolder: string,
            value: string,
            css: string,
            type: string,
            change: (event : ChangeEvent) => void,
            options: Array < {
                value: string
            } >;
        },
        enemy: {
            label: string,
            placeHolder: string,
            value: string,
            css: string,
            type: string,
            change: (event : ChangeEvent) => void,
            options: Array < {
                value: string
            } >;
        },
        terrain: {
            label: string,
            placeHolder: string,
            value: string,
            css: string,
            type: string,
            change: (event : ChangeEvent) => void,
            options: Array < {
                value: string
            } >;
        }
    },
    sendToEncounter?: any | null
};

export interface Round {}

export interface Encounter {
    roundNumber: number,
    round: Array < Round >
}
