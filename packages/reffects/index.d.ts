type EventId = string;

interface Event {
    id: EventId;
    payload?: any;
}

interface DelayedEvent extends Event {
    milliseconds: number;
}

interface Effects {
    [effectName: string]: object
}

interface Coeffect{
    id: string;
    data?: object;
}

type EventHandler = (coeffect?: Coeffect, payload?: object) => Effects;

type EffectHandler = Function;

type CoeffectHandler = Function;

export function dispatch(event: Event): void;
export function dispatch(eventId: EventId): void;
export function dispatchMany(events: Event|EventId[]): void;
export function dispatchLater(event: DelayedEvent): void;

export function registerEventHandler(eventId: EventId, handler: EventHandler, coeffectDescriptions?: Coeffect[]): void;
export function registerCoeffectHandler(coeffectId: string, handler: CoeffectHandler): void;
export function registerEffectHandler(effectId: string, handler: EffectHandler): void;
export function registerEventsDelegation(originalEvents: EventId[], targetEvent: EventId): void;

export function coeffect(id: string, data?: object): Coeffect;
export function getEffectHandler(effectId: string): EffectHandler; 
export function getCoeffectHandler(coeffectId: string): CoeffectHandler;
export function getEventHandler(eventId: EventId): EventHandler;
