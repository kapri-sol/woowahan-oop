import { OrderLineItem } from "./order-line-item";
import { Shop } from "./shopt";

enum OrderStatus {
    PROCEED = "PROCEED",
    ORDERED = "ORDERED"
}

export class Order {
    private id: bigint;
    private orderStatus: OrderStatus;
    private shop: Shop;
    private orderLineItems: OrderLineItem[];

    public place(): void {
        this.validate();
        this.ordered();
    }

    private validate() {
        if (!this.orderLineItems.length) {
            throw new Error("주문 항목이 비어있습니다.");
        }

        if (!this.shop.isOpen()) {
            throw new Error("가게가 영업중이 아닙니다.");
        }

        if (!this.shop.isValidOrderAmount(this.calculateTotalPrice())) {
            throw new Error(`최소 주문 금액 ${this.shop.getMinOrderAmount()} 이상을 주문해주세요.`);
        }

        this.orderLineItems.forEach((orderLineItems) => orderLineItems.validate());
    }

    private ordered() {
        this.orderStatus = OrderStatus.ORDERED;
    }

    private calculateTotalPrice() {}
}
