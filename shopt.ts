import { Money } from "./money";

export class Shop {
    private open: boolean;
    private minOrderAmount: number;

    getMinOrderAmount() {
        return this.minOrderAmount;
    }

    isOpen() {
        return this.open;
    }

    isValidOrderAmount(amount: Money) {
        return amount.isGreterThanOrEquel(this.minOrderAmount);
    }
}
