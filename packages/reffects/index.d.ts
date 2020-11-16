type EventId = string;
type EffectId = string;
type CoeffectId = string;

interface Event {
    id: EventId;
    payload?: any;
}

interface DelayedEvent extends Event {
    milliseconds: number;
}

interface Effects {
    [effectName: string]: any
}

interface CoeffectDescription {
    coeffectId: CoeffectId;
    data?: any;
}

interface Coeffects {
    [coeffectName: string]: any;
}

type EventHandler = (coeffects?: Coeffects, payload?: any) => Effects;

type EffectHandler = Function;

type CoeffectHandler = Function;

export function dispatch(event: Event): void;
export function dispatch(eventId: EventId): void;
export function dispatchMany(events: Event|EventId[]): void;
export function dispatchLater(event: DelayedEvent): void;

export function registerEventHandler(eventId: EventId, handler: EventHandler, coeffectDescriptions?: CoeffectDescription[]): void;
export function registerCoeffectHandler(coeffectId: CoeffectId, handler: CoeffectHandler): void;
export function registerEffectHandler(effectId: EffectId, handler: EffectHandler): void;
export function registerEventsDelegation(originalEvents: EventId[], targetEvent: EventId): void;

export function coeffect(id: CoeffectId, data?: any): CoeffectDescription|CoeffectId;
export function getEffectHandler(effectId: EffectId): EffectHandler;
export function getCoeffectHandler(coeffectId: CoeffectId): CoeffectHandler;
export function getEventHandler(eventId: EventId): EventHandler;

export function clearHandlers(): void;
export function disableVerbosity(): void;
