export interface StoreState {
    name: string;
    enthusiasmLevel: number;
}

export interface HelloComopnentProps {
    name: string;
    enthusiasmLevel?: number;
    onIncrement: () => any;
    onDecrement: () => any;
}