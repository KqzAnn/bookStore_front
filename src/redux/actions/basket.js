import BaseAction from "../helpers/BaseAction";

/**
 * List of actions
 * @type {string}
 */
export const AddToBasket = "AddToBasket";
export const RemoveFromBasket = "RemoveFromBasket";
export const ResetAllBasket = "ResetAllBasket";

/**
 * AddBasket action class
 */
export class AddBasket extends BaseAction {
    constructor(payload) {
        super(AddToBasket, payload);
    }
}

/**
 * RemoveBasket action class
 */
export class RemoveBasket extends BaseAction {
    constructor(payload) {
        super(RemoveFromBasket, payload);
    }
}

/**
 * ResetBasket action class
 */
 export class ResetBasket extends BaseAction {
    constructor(payload) {
        super(ResetAllBasket, payload);
    }
}
